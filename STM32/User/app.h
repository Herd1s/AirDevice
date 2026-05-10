#ifndef APP_H
#define APP_H

#include "stm32f10x.h"
#include <stdint.h>

#define APP_LOOP_MS                      10U
#define APP_DISPLAY_PERIOD_TICKS         20U   /* 200ms */
#define APP_ANALOG_PERIOD_TICKS          50U   /* 500ms */
#define APP_DHT_PERIOD_TICKS             200U  /* 2s */
#define APP_SECOND_TICKS                 100U  /* 1s */

#define MQ_PREHEAT_SECONDS               45U
#define SGP30_OFFLINE_TIMEOUT_TICKS      500U  /* 5s */
#define SGP30_WARMUP_SECONDS             15U
#define BLE_BAUDRATE                     9600U
#define BLE_RX_LINE_MAX                  96U
#define BLE_TX_BUF_MAX                   196U
#define BLE_LOG_MAX                      20U

#define SGP30_I2C_PORT                   GPIOB
#define SGP30_I2C_SCL_PIN                GPIO_Pin_10
#define SGP30_I2C_SDA_PIN                GPIO_Pin_11
#define SGP30_I2C_ADDR                   0x58U

#define DHT_PORT                         GPIOA
#define DHT_PIN                          GPIO_Pin_1

#define DUST_LED_PORT                    GPIOA
#define DUST_LED_PIN                     GPIO_Pin_6

#define BUZZER_PORT                      GPIOB
#define BUZZER_PIN                       GPIO_Pin_8
#define RELAY_PORT                       GPIOB
#define RELAY_PIN                        GPIO_Pin_9

#define KEY_COUNT                        4U
#define KEY_DEBOUNCE_TICKS               2U
#define KEY_LONG_TICKS                   80U   /* 800ms */

#define EVENT_QUEUE_SIZE                 12U

#define BEEP_ACTIVE_LOW                  1U
#define RELAY_ACTIVE_LOW                 1U
#define DUST_LED_ACTIVE_LOW              1U

#define PARAM_FLASH_ADDR                 0x0800FC00U /* Last page of 64KB Flash */
#define PARAM_MAGIC                      0x41514431U /* 'AQD1' */
#define PARAM_END_MARK                   0x55AAU

#define HYS_PM25                         10U
#define HYS_CO2                          200U
#define HYS_VOC                          50U
#define HYS_MQ135                        100U

#define LIMIT_TEMP_DELTA                 5U
#define LIMIT_HUM_DELTA                  8U
#define LIMIT_CO2_DELTA                  250U
#define LIMIT_VOC_DELTA                  80U
#define LIMIT_PM25_DELTA                 40U
#define LIMIT_MQ_DELTA                   300U

typedef enum
{
    FAN_MODE_AUTO = 0,
    FAN_MODE_MANUAL = 1
} FanMode_t;

typedef enum
{
    AQ_LEVEL_EXCELLENT = 0,
    AQ_LEVEL_GOOD = 1,
    AQ_LEVEL_LIGHT = 2,
    AQ_LEVEL_MODERATE = 3,
    AQ_LEVEL_HEAVY = 4
} AqLevel_t;

typedef struct
{
    uint16_t co2_ppm;
    uint16_t voc_ppb;
    uint16_t pm25_ugm3;
    uint16_t mq135_raw;
} ThresholdConfig_t;

typedef struct
{
    uint16_t temp_dht_c;
    uint16_t hum_dht_rh;
    uint16_t co2_ppm;
    uint16_t voc_ppb;
    uint16_t pm25_ugm3;
    uint16_t mq135_raw;
    uint8_t dht_valid;
    uint8_t module_online;
} AirData_t;

typedef struct
{
    uint16_t buf[8];
    uint32_t sum;
    uint8_t idx;
    uint8_t count;
} AvgFilter_t;

typedef struct
{
    GPIO_TypeDef *port;
    uint16_t pin;
} KeyHw_t;

typedef struct
{
    uint8_t raw;
    uint8_t stable;
    uint8_t debounce;
    uint16_t hold_ticks;
    uint8_t long_reported;
} KeyState_t;

typedef struct
{
    uint32_t magic;
    ThresholdConfig_t threshold;
    uint16_t fan_off_delay_s;
    uint16_t reserved;
    uint16_t checksum;
    uint16_t end_mark;
} ParamStore_t;

typedef struct
{
    uint32_t uptime_s;
    uint8_t alarm_on;
    uint16_t aq_score;
    uint16_t co2_ppm;
    uint16_t voc_ppb;
    uint16_t pm25_ugm3;
    uint16_t mq135_raw;
} AlarmLog_t;

enum
{
    KEY1_SHORT = 1,
    KEY1_LONG = 2,
    KEY2_SHORT = 3,
    KEY2_LONG = 4,
    KEY3_SHORT = 5,
    KEY3_LONG = 6,
    KEY4_SHORT = 7,
    KEY4_LONG = 8
};

extern const ThresholdConfig_t kDefaultThreshold;

extern AirData_t g_air_data;
extern ThresholdConfig_t g_threshold;
extern FanMode_t g_fan_mode;
extern uint8_t g_manual_fan_on;
extern uint8_t g_fan_on;

extern uint8_t g_alarm_active;
extern uint8_t g_alarm_muted;
extern uint16_t g_fan_off_delay_s;
extern uint16_t g_fan_keep_ticks;

extern uint16_t g_mq_preheat_s;

extern uint8_t g_page;
extern uint8_t g_setting_mode;
extern uint8_t g_setting_index;
extern uint16_t g_aq_score;
extern AqLevel_t g_aq_level;

extern uint8_t g_buzzer_phase;
extern uint16_t g_buzzer_ticks;

extern uint16_t g_sgp30_offline_ticks;
extern uint16_t g_sgp30_warmup_s;
extern uint32_t g_uptime_s;

extern KeyState_t g_key_state[KEY_COUNT];
extern uint8_t g_event_queue[EVENT_QUEUE_SIZE];
extern uint8_t g_event_head;
extern uint8_t g_event_tail;

extern AvgFilter_t g_filter_mq;
extern AvgFilter_t g_filter_pm;
extern AvgFilter_t g_filter_co2;
extern AvgFilter_t g_filter_voc;
extern AvgFilter_t g_filter_temp_dht;
extern AvgFilter_t g_filter_hum_dht;

extern char g_ble_rx_line[BLE_RX_LINE_MAX];
extern uint8_t g_ble_rx_idx;
extern uint8_t g_alarm_prev;
extern AlarmLog_t g_alarm_log[BLE_LOG_MAX];
extern uint8_t g_alarm_log_head;
extern uint8_t g_alarm_log_count;

#endif
