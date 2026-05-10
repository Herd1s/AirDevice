#include "app.h"
#include "app_modules.h"

void RCC_Config(void)
{
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO |
                           RCC_APB2Periph_GPIOA |
                           RCC_APB2Periph_GPIOB |
                           RCC_APB2Periph_ADC1 |
                           RCC_APB2Periph_USART1, ENABLE);
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_USART2, ENABLE);

    RCC_ADCCLKConfig(RCC_PCLK2_Div6); /* 72/6 = 12MHz */
}

void Buzzer_Set(uint8_t on)
{
#if BEEP_ACTIVE_LOW
    GPIO_WriteBit(BUZZER_PORT, BUZZER_PIN, on ? Bit_RESET : Bit_SET);
#else
    GPIO_WriteBit(BUZZER_PORT, BUZZER_PIN, on ? Bit_SET : Bit_RESET);
#endif
}

void Relay_Set(uint8_t on)
{
#if RELAY_ACTIVE_LOW
    GPIO_WriteBit(RELAY_PORT, RELAY_PIN, on ? Bit_RESET : Bit_SET);
#else
    GPIO_WriteBit(RELAY_PORT, RELAY_PIN, on ? Bit_SET : Bit_RESET);
#endif
}

void DustLed_Set(uint8_t on)
{
#if DUST_LED_ACTIVE_LOW
    GPIO_WriteBit(DUST_LED_PORT, DUST_LED_PIN, on ? Bit_RESET : Bit_SET);
#else
    GPIO_WriteBit(DUST_LED_PORT, DUST_LED_PIN, on ? Bit_SET : Bit_RESET);
#endif
}

void GPIO_Config(void)
{
    GPIO_InitTypeDef gpio;

    GPIO_StructInit(&gpio);

    gpio.GPIO_Mode = GPIO_Mode_AIN;
    gpio.GPIO_Pin = GPIO_Pin_4 | GPIO_Pin_5; /* MQ135 + Dust ADC */
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_Out_PP;
    gpio.GPIO_Speed = GPIO_Speed_50MHz;
    gpio.GPIO_Pin = DUST_LED_PIN;
    GPIO_Init(DUST_LED_PORT, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_Out_PP;
    gpio.GPIO_Pin = BUZZER_PIN | RELAY_PIN;
    GPIO_Init(GPIOB, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_AF_PP;
    gpio.GPIO_Pin = GPIO_Pin_9; /* USART1 TX */
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_IN_FLOATING;
    gpio.GPIO_Pin = GPIO_Pin_10; /* USART1 RX */
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_AF_PP;
    gpio.GPIO_Pin = GPIO_Pin_2; /* USART2 TX for JDY23 */
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_IN_FLOATING;
    gpio.GPIO_Pin = GPIO_Pin_3; /* USART2 RX for JDY23 */
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_Out_OD;
    gpio.GPIO_Pin = SGP30_I2C_SCL_PIN | SGP30_I2C_SDA_PIN;
    GPIO_Init(SGP30_I2C_PORT, &gpio);
    GPIO_SetBits(SGP30_I2C_PORT, SGP30_I2C_SCL_PIN | SGP30_I2C_SDA_PIN);

    gpio.GPIO_Mode = GPIO_Mode_IPU;
    gpio.GPIO_Pin = GPIO_Pin_12 | GPIO_Pin_13 | GPIO_Pin_14 | GPIO_Pin_15;
    GPIO_Init(GPIOB, &gpio);

    gpio.GPIO_Mode = GPIO_Mode_Out_OD;
    gpio.GPIO_Speed = GPIO_Speed_50MHz;
    gpio.GPIO_Pin = DHT_PIN;
    GPIO_Init(DHT_PORT, &gpio);
    GPIO_SetBits(DHT_PORT, DHT_PIN);

    Buzzer_Set(0);
    Relay_Set(0);
    DustLed_Set(0);
}

void ADC_Config(void)
{
    ADC_InitTypeDef adc;

    ADC_DeInit(ADC1);
    ADC_StructInit(&adc);
    adc.ADC_Mode = ADC_Mode_Independent;
    adc.ADC_ScanConvMode = DISABLE;
    adc.ADC_ContinuousConvMode = DISABLE;
    adc.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;
    adc.ADC_DataAlign = ADC_DataAlign_Right;
    adc.ADC_NbrOfChannel = 1;
    ADC_Init(ADC1, &adc);

    ADC_Cmd(ADC1, ENABLE);
    ADC_ResetCalibration(ADC1);
    while (ADC_GetResetCalibrationStatus(ADC1) == SET)
    {
    }
    ADC_StartCalibration(ADC1);
    while (ADC_GetCalibrationStatus(ADC1) == SET)
    {
    }
}

void USART1_Config(void)
{
    USART_InitTypeDef usart;

    USART_StructInit(&usart);
    usart.USART_BaudRate = 115200;
    usart.USART_Mode = USART_Mode_Tx | USART_Mode_Rx;
    USART_Init(USART1, &usart);
    USART_Cmd(USART1, ENABLE);
}

void USART2_BLE_Config(void)
{
    USART_InitTypeDef usart;

    USART_StructInit(&usart);
    usart.USART_BaudRate = BLE_BAUDRATE;
    usart.USART_Mode = USART_Mode_Tx | USART_Mode_Rx;
    USART_Init(USART2, &usart);
    USART_Cmd(USART2, ENABLE);
}
