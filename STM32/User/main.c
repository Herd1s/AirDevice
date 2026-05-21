#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "app.h"
#include "app_modules.h"
#include <string.h>

const ThresholdConfig_t kDefaultThreshold = {1000U, 300U, 75U, 2200U};

AirData_t g_air_data;
ThresholdConfig_t g_threshold;
FanMode_t g_fan_mode = FAN_MODE_AUTO;
uint8_t g_manual_fan_on = 0;
uint8_t g_fan_on = 0;

uint8_t g_alarm_active = 0;
uint8_t g_alarm_muted = 0;
uint16_t g_fan_off_delay_s = 30;
uint16_t g_fan_keep_ticks = 0;

uint16_t g_mq_preheat_s = MQ_PREHEAT_SECONDS;

uint8_t g_page = 0;
uint8_t g_setting_mode = 0;
uint8_t g_setting_index = 0;
uint16_t g_aq_score = 0;
AqLevel_t g_aq_level = AQ_LEVEL_EXCELLENT;

uint8_t g_buzzer_phase = 0;
uint16_t g_buzzer_ticks = 0;

uint16_t g_sgp30_offline_ticks = SGP30_OFFLINE_TIMEOUT_TICKS;
uint16_t g_sgp30_warmup_s = SGP30_WARMUP_SECONDS;
uint32_t g_uptime_s = 0;

KeyState_t g_key_state[KEY_COUNT];
uint8_t g_event_queue[EVENT_QUEUE_SIZE];
uint8_t g_event_head = 0;
uint8_t g_event_tail = 0;

AvgFilter_t g_filter_mq;
AvgFilter_t g_filter_pm;
AvgFilter_t g_filter_co2;
AvgFilter_t g_filter_voc;
AvgFilter_t g_filter_temp_dht;
AvgFilter_t g_filter_hum_dht;

char g_ble_rx_line[BLE_RX_LINE_MAX];
uint8_t g_ble_rx_idx = 0;
volatile uint8_t g_ble_rx_fifo[BLE_RX_FIFO_SIZE];
volatile uint8_t g_ble_rx_head = 0;
volatile uint8_t g_ble_rx_tail = 0;
volatile uint8_t g_ble_rx_overflow = 0;
uint8_t g_alarm_prev = 0;
AlarmLog_t g_alarm_log[BLE_LOG_MAX];
uint8_t g_alarm_log_head = 0;
uint8_t g_alarm_log_count = 0;

int main(void)
{
    uint32_t ticks = 0;
    uint8_t evt;

    memset(&g_air_data, 0, sizeof(g_air_data));
    memset(&g_key_state, 0, sizeof(g_key_state));

    App_DefaultParams();

    AvgFilter_Reset(&g_filter_mq);
    AvgFilter_Reset(&g_filter_pm);
    AvgFilter_Reset(&g_filter_co2);
    AvgFilter_Reset(&g_filter_voc);
    AvgFilter_Reset(&g_filter_temp_dht);
    AvgFilter_Reset(&g_filter_hum_dht);

    RCC_Config();
    GPIO_Config();
    ADC_Config();
    USART1_Config();
    USART2_BLE_Config();
    Voice_Init();
    OLED_Init();
    OLED_Clear();
    g_air_data.module_online = SGP30_Init();
    if (g_air_data.module_online)
    {
        g_sgp30_offline_ticks = 0U;
    }

    App_LoadParams();

    OLED_ShowString(1, 1, "AirDevice STM32");
    OLED_ShowString(2, 1, "AQ Monitor Ready");
    OLED_ShowString(3, 1, "K1 Page/Setting");
    OLED_ShowString(4, 1, "K4 Mode/Mute");
    Delay_ms(1200);
    Voice_SpeakBoot();
    OLED_Clear();
    g_alarm_prev = g_alarm_active;
    BLE_SendString("$BOOT,AirDevice,JDY23,READY\r\n");
    BLE_ReportConfig();

    while (1)
    {
        Keys_Scan10ms();
        BLE_PollRx();

        evt = Event_Pop();
        while (evt != 0U)
        {
            HandleKeyEvent(evt);
            evt = Event_Pop();
        }

        if (g_sgp30_offline_ticks < 65000U)
        {
            g_sgp30_offline_ticks++;
        }
        if (g_sgp30_offline_ticks > SGP30_OFFLINE_TIMEOUT_TICKS)
        {
            g_air_data.module_online = 0;
        }
        BLE_CheckAlarmEdge();

        if ((ticks % APP_ANALOG_PERIOD_TICKS) == 0U)
        {
            Sensor_Task_500ms();
        }
        if ((ticks % APP_DHT_PERIOD_TICKS) == 0U)
        {
            Sensor_Task_2s();
        }
        if ((ticks % APP_SECOND_TICKS) == 0U)
        {
            g_uptime_s++;
            SGP30_Task_1s();
            if (g_mq_preheat_s > 0U)
            {
                g_mq_preheat_s--;
            }
            if (g_sgp30_warmup_s > 0U)
            {
                g_sgp30_warmup_s--;
            }
            BLE_ReportData();
        }
        if ((ticks % APP_DISPLAY_PERIOD_TICKS) == 0U)
        {
            Display_Task();
        }

        Control_Task10ms();
        Voice_Task10ms();
        Delay_ms(APP_LOOP_MS);
        ticks++;
    }
}
