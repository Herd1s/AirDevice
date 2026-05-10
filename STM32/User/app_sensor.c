#include "app.h"
#include "app_modules.h"
#include "Delay.h"
#include <string.h>

#define DUST_ADC_REF_MV               3300U
#define DUST_ADC_FULL_SCALE           4095U
#define DUST_VOLTAGE_DIVIDER_RATIO    11U   /* If no divider hardware, set to 1 */
#define DUST_NO_DUST_VOLTAGE_MV       400U  /* Tune this value per board (typ. 350~900mV) */
#define DUST_COV_RATIO_X100           20U   /* 0.20 ug/m3 per mV */

void AvgFilter_Reset(AvgFilter_t *f)
{
    memset(f, 0, sizeof(AvgFilter_t));
}

uint16_t AvgFilter_Update(AvgFilter_t *f, uint16_t value)
{
    if (f->count < (uint8_t)(sizeof(f->buf) / sizeof(f->buf[0])))
    {
        f->buf[f->idx] = value;
        f->sum += value;
        f->count++;
        f->idx++;
    }
    else
    {
        if (f->idx >= (uint8_t)(sizeof(f->buf) / sizeof(f->buf[0])))
        {
            f->idx = 0;
        }
        f->sum -= f->buf[f->idx];
        f->buf[f->idx] = value;
        f->sum += value;
        f->idx++;
    }

    if (f->idx >= (uint8_t)(sizeof(f->buf) / sizeof(f->buf[0])))
    {
        f->idx = 0;
    }

    if (f->count == 0U)
    {
        return value;
    }
    return (uint16_t)(f->sum / f->count);
}

uint16_t LimitStep(uint16_t prev, uint16_t now, uint16_t max_delta)
{
    if (prev == 0U)
    {
        return now;
    }
    if (now > prev)
    {
        if ((now - prev) > max_delta)
        {
            return (uint16_t)(prev + max_delta);
        }
    }
    else
    {
        if ((prev - now) > max_delta)
        {
            return (uint16_t)(prev - max_delta);
        }
    }
    return now;
}

static uint16_t ADC_ReadChannel(uint8_t channel)
{
    ADC_RegularChannelConfig(ADC1, channel, 1, ADC_SampleTime_239Cycles5);
    ADC_SoftwareStartConvCmd(ADC1, ENABLE);
    while (ADC_GetFlagStatus(ADC1, ADC_FLAG_EOC) == RESET)
    {
    }
    return ADC_GetConversionValue(ADC1);
}

static uint16_t MedianAverageADC(uint8_t channel)
{
    uint16_t value[7];
    uint16_t i;
    uint16_t j;
    uint16_t tmp;
    uint32_t sum = 0;

    for (i = 0; i < 7; i++)
    {
        value[i] = ADC_ReadChannel(channel);
        Delay_us(200);
    }

    for (i = 0; i < 6; i++)
    {
        for (j = i + 1; j < 7; j++)
        {
            if (value[i] > value[j])
            {
                tmp = value[i];
                value[i] = value[j];
                value[j] = tmp;
            }
        }
    }

    for (i = 1; i < 6; i++)
    {
        sum += value[i];
    }

    return (uint16_t)(sum / 5U);
}

static uint16_t MQ135_Read(void)
{
    return MedianAverageADC(ADC_Channel_4);
}

static uint16_t Dust_Filter(uint16_t new_val)
{
    static uint16_t buf[10];
    static uint8_t idx = 0U;
    static uint8_t first = 1U;
    static uint32_t sum = 0U;
    uint8_t k;

    if (first)
    {
        for (k = 0U; k < 10U; k++)
        {
            buf[k] = new_val;
        }
        sum = (uint32_t)new_val * 10U;
        first = 0U;
        return new_val;
    }

    sum -= buf[idx];
    buf[idx] = new_val;
    sum += new_val;

    idx++;
    if (idx >= 10U)
    {
        idx = 0U;
    }
    return (uint16_t)(sum / 10U);
}

static uint16_t Dust_ReadPM25(void)
{
    uint16_t adc_s1;
    uint16_t adc_s2;
    uint16_t adc_lit;
    uint16_t adc_dark;
    uint16_t adc_diff;
    uint16_t adc_filtered;
    uint32_t mv_pin;
    uint32_t mv_sensor;
    uint32_t pm_diff;
    int32_t pm;

    /* Sample at both control levels once, then auto-select the higher reading
       as "LED-lit" value. This avoids hard dependency on board LED polarity. */
    DustLed_Set(1);
    Delay_us(280);
    adc_s1 = ADC_ReadChannel(ADC_Channel_5);
    Delay_us(40);

    DustLed_Set(0);
    Delay_us(280);
    adc_s2 = ADC_ReadChannel(ADC_Channel_5);

    if (adc_s1 >= adc_s2)
    {
        adc_lit = adc_s1;
        adc_dark = adc_s2;
    }
    else
    {
        adc_lit = adc_s2;
        adc_dark = adc_s1;
    }
    adc_diff = (uint16_t)(adc_lit - adc_dark);

    adc_filtered = Dust_Filter(adc_lit);
    mv_pin = ((uint32_t)adc_filtered * DUST_ADC_REF_MV) / DUST_ADC_FULL_SCALE;
    mv_sensor = mv_pin * DUST_VOLTAGE_DIVIDER_RATIO;

    if (mv_sensor > DUST_NO_DUST_VOLTAGE_MV)
    {
        pm = (int32_t)(((mv_sensor - DUST_NO_DUST_VOLTAGE_MV) * DUST_COV_RATIO_X100) / 100U);
    }
    else
    {
        pm = 0;
    }

    /* Fallback from lit-dark delta to prevent long-term zero when baseline
       model mismatches the current analog front-end. */
    pm_diff = ((uint32_t)adc_diff * 12U) / 10U; /* ~1.2 ug/m3 per ADC count */
    if ((uint32_t)pm < pm_diff)
    {
        pm = (int32_t)pm_diff;
    }

    if (pm > 1000)
    {
        pm = 1000;
    }
    return (uint16_t)pm;
}

static void DHT11_PinOutput(void)
{
    GPIO_InitTypeDef gpio;
    gpio.GPIO_Mode = GPIO_Mode_Out_OD;
    gpio.GPIO_Speed = GPIO_Speed_50MHz;
    gpio.GPIO_Pin = DHT_PIN;
    GPIO_Init(DHT_PORT, &gpio);
}

static void DHT11_PinInput(void)
{
    GPIO_InitTypeDef gpio;
    gpio.GPIO_Mode = GPIO_Mode_IN_FLOATING;
    gpio.GPIO_Pin = DHT_PIN;
    gpio.GPIO_Speed = GPIO_Speed_50MHz;
    GPIO_Init(DHT_PORT, &gpio);
}

static uint8_t DHT11_WaitState(uint8_t state, uint16_t timeout_us)
{
    while (timeout_us--)
    {
        if (GPIO_ReadInputDataBit(DHT_PORT, DHT_PIN) == (BitAction)state)
        {
            return 1;
        }
        Delay_us(1);
    }
    return 0;
}

static uint8_t DHT11_Read(uint8_t *temp, uint8_t *hum)
{
    uint8_t data[5];
    uint8_t i;
    uint8_t j;
    uint8_t sum;

    memset(data, 0, sizeof(data));

    DHT11_PinOutput();
    GPIO_ResetBits(DHT_PORT, DHT_PIN);
    Delay_ms(20);
    GPIO_SetBits(DHT_PORT, DHT_PIN);
    Delay_us(30);
    DHT11_PinInput();

    if (!DHT11_WaitState(0, 100))
    {
        return 0;
    }
    if (!DHT11_WaitState(1, 100))
    {
        return 0;
    }

    for (j = 0; j < 5; j++)
    {
        for (i = 0; i < 8; i++)
        {
            if (!DHT11_WaitState(0, 70))
            {
                return 0;
            }
            if (!DHT11_WaitState(1, 70))
            {
                return 0;
            }
            Delay_us(40);
            data[j] <<= 1;
            if (GPIO_ReadInputDataBit(DHT_PORT, DHT_PIN) == Bit_SET)
            {
                data[j] |= 0x01;
            }
            if (!DHT11_WaitState(0, 80))
            {
                return 0;
            }
        }
    }

    DHT11_PinOutput();
    GPIO_SetBits(DHT_PORT, DHT_PIN);

    sum = (uint8_t)(data[0] + data[1] + data[2] + data[3]);
    if (sum != data[4])
    {
        return 0;
    }

    *hum = data[0];
    *temp = data[2];
    return 1;
}

static void SGP30_I2C_Delay(void)
{
    Delay_us(3);
}

static void SGP30_I2C_SetSDA(uint8_t high)
{
    GPIO_WriteBit(SGP30_I2C_PORT, SGP30_I2C_SDA_PIN, high ? Bit_SET : Bit_RESET);
}

static void SGP30_I2C_SetSCL(uint8_t high)
{
    GPIO_WriteBit(SGP30_I2C_PORT, SGP30_I2C_SCL_PIN, high ? Bit_SET : Bit_RESET);
}

static uint8_t SGP30_I2C_ReadSDA(void)
{
    return (GPIO_ReadInputDataBit(SGP30_I2C_PORT, SGP30_I2C_SDA_PIN) == Bit_SET) ? 1U : 0U;
}

static void SGP30_I2C_Start(void)
{
    SGP30_I2C_SetSDA(1);
    SGP30_I2C_SetSCL(1);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSDA(0);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSCL(0);
}

static void SGP30_I2C_Stop(void)
{
    SGP30_I2C_SetSDA(0);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSCL(1);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSDA(1);
    SGP30_I2C_Delay();
}

static uint8_t SGP30_I2C_WriteByte(uint8_t byte)
{
    uint8_t i;
    uint8_t ack;

    for (i = 0; i < 8U; i++)
    {
        SGP30_I2C_SetSDA((byte & 0x80U) ? 1U : 0U);
        SGP30_I2C_Delay();
        SGP30_I2C_SetSCL(1);
        SGP30_I2C_Delay();
        SGP30_I2C_SetSCL(0);
        byte <<= 1;
    }

    SGP30_I2C_SetSDA(1);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSCL(1);
    SGP30_I2C_Delay();
    ack = (SGP30_I2C_ReadSDA() == 0U) ? 1U : 0U;
    SGP30_I2C_SetSCL(0);
    return ack;
}

static uint8_t SGP30_I2C_ReadByte(uint8_t ack)
{
    uint8_t i;
    uint8_t data = 0;

    SGP30_I2C_SetSDA(1);
    for (i = 0; i < 8U; i++)
    {
        data <<= 1;
        SGP30_I2C_SetSCL(1);
        SGP30_I2C_Delay();
        if (SGP30_I2C_ReadSDA())
        {
            data |= 0x01U;
        }
        SGP30_I2C_SetSCL(0);
        SGP30_I2C_Delay();
    }

    SGP30_I2C_SetSDA(ack ? 0U : 1U);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSCL(1);
    SGP30_I2C_Delay();
    SGP30_I2C_SetSCL(0);
    SGP30_I2C_SetSDA(1);
    return data;
}

static uint8_t SGP30_CRC8(const uint8_t *data, uint8_t len)
{
    uint8_t i;
    uint8_t j;
    uint8_t crc = 0xFFU;

    for (i = 0; i < len; i++)
    {
        crc ^= data[i];
        for (j = 0; j < 8U; j++)
        {
            if ((crc & 0x80U) != 0U)
            {
                crc = (uint8_t)((crc << 1) ^ 0x31U);
            }
            else
            {
                crc <<= 1;
            }
        }
    }
    return crc;
}

static uint8_t SGP30_WriteCommand(uint16_t cmd)
{
    SGP30_I2C_Start();
    if (!SGP30_I2C_WriteByte((uint8_t)((SGP30_I2C_ADDR << 1) | 0x00U)))
    {
        SGP30_I2C_Stop();
        return 0;
    }
    if (!SGP30_I2C_WriteByte((uint8_t)(cmd >> 8)))
    {
        SGP30_I2C_Stop();
        return 0;
    }
    if (!SGP30_I2C_WriteByte((uint8_t)(cmd & 0xFFU)))
    {
        SGP30_I2C_Stop();
        return 0;
    }
    SGP30_I2C_Stop();
    return 1;
}

static uint8_t SGP30_ReadResponse(uint8_t *data, uint8_t len)
{
    uint8_t i;

    SGP30_I2C_Start();
    if (!SGP30_I2C_WriteByte((uint8_t)((SGP30_I2C_ADDR << 1) | 0x01U)))
    {
        SGP30_I2C_Stop();
        return 0;
    }

    for (i = 0; i < len; i++)
    {
        data[i] = SGP30_I2C_ReadByte((i + 1U) < len ? 1U : 0U);
    }
    SGP30_I2C_Stop();
    return 1;
}

uint8_t SGP30_Init(void)
{
    uint8_t rx[6];
    uint8_t word0[2];
    uint8_t word1[2];

    if (!SGP30_WriteCommand(0x2003U)) /* IAQ init */
    {
        return 0;
    }
    Delay_ms(12);

    if (!SGP30_WriteCommand(0x2008U)) /* First measurement */
    {
        return 0;
    }
    Delay_ms(12);

    if (!SGP30_ReadResponse(rx, sizeof(rx)))
    {
        return 0;
    }

    word0[0] = rx[0];
    word0[1] = rx[1];
    word1[0] = rx[3];
    word1[1] = rx[4];
    if (SGP30_CRC8(word0, 2U) != rx[2] || SGP30_CRC8(word1, 2U) != rx[5])
    {
        return 0;
    }

    return 1;
}

static uint8_t SGP30_ReadAir(uint16_t *eco2, uint16_t *tvoc)
{
    uint8_t rx[6];
    uint8_t word0[2];
    uint8_t word1[2];

    if (!SGP30_WriteCommand(0x2008U))
    {
        return 0;
    }
    Delay_ms(12);

    if (!SGP30_ReadResponse(rx, sizeof(rx)))
    {
        return 0;
    }

    word0[0] = rx[0];
    word0[1] = rx[1];
    word1[0] = rx[3];
    word1[1] = rx[4];
    if (SGP30_CRC8(word0, 2U) != rx[2] || SGP30_CRC8(word1, 2U) != rx[5])
    {
        return 0;
    }

    *eco2 = (uint16_t)(((uint16_t)rx[0] << 8) | rx[1]);
    *tvoc = (uint16_t)(((uint16_t)rx[3] << 8) | rx[4]);
    return 1;
}

void SGP30_Task_1s(void)
{
    uint16_t eco2;
    uint16_t tvoc;
    uint16_t val;

    if (!g_air_data.module_online)
    {
        if (!SGP30_Init())
        {
            return;
        }
        g_air_data.module_online = 1;
        g_sgp30_offline_ticks = 0U;
        g_sgp30_warmup_s = SGP30_WARMUP_SECONDS;
        return;
    }

    if (!SGP30_ReadAir(&eco2, &tvoc))
    {
        return;
    }

    val = LimitStep(g_air_data.co2_ppm, eco2, LIMIT_CO2_DELTA);
    g_air_data.co2_ppm = AvgFilter_Update(&g_filter_co2, val);

    val = LimitStep(g_air_data.voc_ppb, tvoc, LIMIT_VOC_DELTA);
    g_air_data.voc_ppb = AvgFilter_Update(&g_filter_voc, val);

    g_air_data.module_online = 1;
    g_sgp30_offline_ticks = 0U;
}

void AQ_UpdateAndJudge(void)
{
    uint32_t r_pm = 0;
    uint32_t r_co2 = 0;
    uint32_t r_voc = 0;
    uint32_t r_mq = 0;
    uint32_t score;
    uint8_t over = 0;
    uint8_t under = 1;

    if (g_threshold.pm25_ugm3 != 0U)
    {
        r_pm = (uint32_t)g_air_data.pm25_ugm3 * 100U / g_threshold.pm25_ugm3;
    }
    if (g_threshold.mq135_raw != 0U)
    {
        r_mq = (uint32_t)g_air_data.mq135_raw * 100U / g_threshold.mq135_raw;
    }
    if (g_air_data.module_online)
    {
        if (g_threshold.co2_ppm != 0U)
        {
            r_co2 = (uint32_t)g_air_data.co2_ppm * 100U / g_threshold.co2_ppm;
        }
        if (g_threshold.voc_ppb != 0U)
        {
            r_voc = (uint32_t)g_air_data.voc_ppb * 100U / g_threshold.voc_ppb;
        }
        score = (35U * r_pm + 35U * r_co2 + 20U * r_voc + 10U * r_mq) / 100U;
    }
    else
    {
        score = (70U * r_pm + 30U * r_mq) / 100U;
    }

    if (score < 80U)
    {
        g_aq_level = AQ_LEVEL_EXCELLENT;
    }
    else if (score < 120U)
    {
        g_aq_level = AQ_LEVEL_GOOD;
    }
    else if (score < 170U)
    {
        g_aq_level = AQ_LEVEL_LIGHT;
    }
    else if (score < 230U)
    {
        g_aq_level = AQ_LEVEL_MODERATE;
    }
    else
    {
        g_aq_level = AQ_LEVEL_HEAVY;
    }
    g_aq_score = (uint16_t)score;

    if (g_air_data.pm25_ugm3 > g_threshold.pm25_ugm3)
    {
        over = 1;
    }
    if (g_air_data.pm25_ugm3 >= (g_threshold.pm25_ugm3 > HYS_PM25 ? (g_threshold.pm25_ugm3 - HYS_PM25) : 0U))
    {
        under = 0;
    }

    if (g_mq_preheat_s == 0U)
    {
        if (g_air_data.mq135_raw > g_threshold.mq135_raw)
        {
            over = 1;
        }
        if (g_air_data.mq135_raw >= (g_threshold.mq135_raw > HYS_MQ135 ? (g_threshold.mq135_raw - HYS_MQ135) : 0U))
        {
            under = 0;
        }
    }

    if (g_air_data.module_online)
    {
        if (g_air_data.co2_ppm > g_threshold.co2_ppm ||
            g_air_data.voc_ppb > g_threshold.voc_ppb)
        {
            over = 1;
        }
        if (g_air_data.co2_ppm >= (g_threshold.co2_ppm > HYS_CO2 ? (g_threshold.co2_ppm - HYS_CO2) : 0U) ||
            g_air_data.voc_ppb >= (g_threshold.voc_ppb > HYS_VOC ? (g_threshold.voc_ppb - HYS_VOC) : 0U))
        {
            under = 0;
        }
    }

    if (!g_alarm_active)
    {
        if (over)
        {
            g_alarm_active = 1;
        }
    }
    else if (under)
    {
        g_alarm_active = 0;
        g_alarm_muted = 0;
    }
}

void Sensor_Task_500ms(void)
{
    uint16_t mq_raw;
    uint16_t pm;

    mq_raw = MQ135_Read();
    mq_raw = LimitStep(g_air_data.mq135_raw, mq_raw, LIMIT_MQ_DELTA);
    g_air_data.mq135_raw = AvgFilter_Update(&g_filter_mq, mq_raw);

    pm = Dust_ReadPM25();
    pm = LimitStep(g_air_data.pm25_ugm3, pm, LIMIT_PM25_DELTA);
    g_air_data.pm25_ugm3 = AvgFilter_Update(&g_filter_pm, pm);

    AQ_UpdateAndJudge();
}

void Sensor_Task_2s(void)
{
    uint8_t t;
    uint8_t h;
    uint16_t val;

    if (DHT11_Read(&t, &h))
    {
        g_air_data.dht_valid = 1;
        val = LimitStep(g_air_data.temp_dht_c, t, LIMIT_TEMP_DELTA);
        g_air_data.temp_dht_c = AvgFilter_Update(&g_filter_temp_dht, val);

        val = LimitStep(g_air_data.hum_dht_rh, h, LIMIT_HUM_DELTA);
        g_air_data.hum_dht_rh = AvgFilter_Update(&g_filter_hum_dht, val);
    }
    else
    {
        g_air_data.dht_valid = 0;
    }
}
