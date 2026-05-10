#include "app.h"
#include "app_modules.h"
#include "OLED.h"
#include <stdio.h>

static const KeyHw_t g_key_hw[KEY_COUNT] =
{
    {GPIOB, GPIO_Pin_12}, /* K1 */
    {GPIOB, GPIO_Pin_13}, /* K2 */
    {GPIOB, GPIO_Pin_14}, /* K3 */
    {GPIOB, GPIO_Pin_15}  /* K4 */
};

static uint8_t Key_IsPressed(uint8_t index)
{
    return (GPIO_ReadInputDataBit(g_key_hw[index].port, g_key_hw[index].pin) == Bit_RESET) ? 1U : 0U;
}

static void Event_Push(uint8_t evt)
{
    uint8_t next = (uint8_t)((g_event_head + 1U) % EVENT_QUEUE_SIZE);
    if (next == g_event_tail)
    {
        return;
    }
    g_event_queue[g_event_head] = evt;
    g_event_head = next;
}

uint8_t Event_Pop(void)
{
    uint8_t evt;
    if (g_event_tail == g_event_head)
    {
        return 0;
    }
    evt = g_event_queue[g_event_tail];
    g_event_tail = (uint8_t)((g_event_tail + 1U) % EVENT_QUEUE_SIZE);
    return evt;
}

void Keys_Scan10ms(void)
{
    uint8_t i;
    uint8_t raw;
    uint8_t evt_short;
    uint8_t evt_long;

    for (i = 0; i < KEY_COUNT; i++)
    {
        raw = Key_IsPressed(i);
        if (raw != g_key_state[i].raw)
        {
            g_key_state[i].raw = raw;
            g_key_state[i].debounce = 0;
        }
        else if (g_key_state[i].debounce < KEY_DEBOUNCE_TICKS)
        {
            g_key_state[i].debounce++;
        }
        else if (g_key_state[i].stable != raw)
        {
            g_key_state[i].stable = raw;
            if (raw)
            {
                g_key_state[i].hold_ticks = 0;
                g_key_state[i].long_reported = 0;
            }
            else if (!g_key_state[i].long_reported)
            {
                evt_short = (uint8_t)(1U + i * 2U);
                Event_Push(evt_short);
            }
        }

        if (g_key_state[i].stable)
        {
            if (g_key_state[i].hold_ticks < 60000U)
            {
                g_key_state[i].hold_ticks++;
            }
            if (g_key_state[i].hold_ticks >= KEY_LONG_TICKS && !g_key_state[i].long_reported)
            {
                g_key_state[i].long_reported = 1;
                evt_long = (uint8_t)(2U + i * 2U);
                Event_Push(evt_long);
            }
        }
    }
}

static uint16_t *CurrentSettingValue(void)
{
    switch (g_setting_index)
    {
    case 0:
        return &g_threshold.co2_ppm;
    case 1:
        return &g_threshold.voc_ppb;
    case 2:
        return &g_threshold.pm25_ugm3;
    case 3:
        return &g_threshold.mq135_raw;
    case 4:
        return &g_fan_off_delay_s;
    default:
        return &g_threshold.co2_ppm;
    }
}

static const char *CurrentSettingName(void)
{
    switch (g_setting_index)
    {
    case 0:
        return "CO2";
    case 1:
        return "TVOC";
    case 2:
        return "PM25";
    case 3:
        return "MQ135";
    case 4:
        return "FANOFF";
    default:
        return "CO2";
    }
}

static void AdjustSetting(int16_t step)
{
    uint16_t *p = CurrentSettingValue();
    int32_t v = *p;

    if (step > 0)
    {
        v += step;
    }
    else
    {
        v -= (-step);
    }

    switch (g_setting_index)
    {
    case 0:
        if (v < 400)
            v = 400;
        if (v > 3000)
            v = 3000;
        break;
    case 1:
        if (v < 50)
            v = 50;
        if (v > 2000)
            v = 2000;
        break;
    case 2:
        if (v < 10)
            v = 10;
        if (v > 300)
            v = 300;
        break;
    case 3:
        if (v < 500)
            v = 500;
        if (v > 3800)
            v = 3800;
        break;
    case 4:
        if (v < 5)
            v = 5;
        if (v > 120)
            v = 120;
        break;
    default:
        break;
    }

    *p = (uint16_t)v;
}

void HandleKeyEvent(uint8_t evt)
{
    switch (evt)
    {
    case KEY1_SHORT:
        if (g_setting_mode)
        {
            g_setting_index = (uint8_t)((g_setting_index + 1U) % 5U);
        }
        else
        {
            g_page = (uint8_t)((g_page + 1U) % 3U);
        }
        break;

    case KEY1_LONG:
        g_setting_mode = (uint8_t)!g_setting_mode;
        if (g_setting_mode)
        {
            g_setting_index = 0;
        }
        break;

    case KEY2_SHORT:
        if (g_setting_mode)
        {
            AdjustSetting(+1);
        }
        break;

    case KEY2_LONG:
        if (g_setting_mode)
        {
            AdjustSetting(+10);
        }
        break;

    case KEY3_SHORT:
        if (g_setting_mode)
        {
            AdjustSetting(-1);
        }
        break;

    case KEY3_LONG:
        if (g_setting_mode)
        {
            AdjustSetting(-10);
        }
        break;

    case KEY4_SHORT:
        if (g_setting_mode)
        {
            App_SaveParams();
            g_setting_mode = 0;
        }
        else if (g_alarm_active)
        {
            g_alarm_muted = (uint8_t)!g_alarm_muted;
        }
        else
        {
            g_fan_mode = (g_fan_mode == FAN_MODE_AUTO) ? FAN_MODE_MANUAL : FAN_MODE_AUTO;
            if (g_fan_mode == FAN_MODE_AUTO)
            {
                g_manual_fan_on = 0;
            }
        }
        break;

    case KEY4_LONG:
        if (!g_setting_mode && g_fan_mode == FAN_MODE_MANUAL)
        {
            g_manual_fan_on = (uint8_t)!g_manual_fan_on;
        }
        break;

    default:
        break;
    }
}

static const char *AQ_LevelText(AqLevel_t level)
{
    switch (level)
    {
    case AQ_LEVEL_EXCELLENT:
        return "Excellent";
    case AQ_LEVEL_GOOD:
        return "Good";
    case AQ_LEVEL_LIGHT:
        return "LightPoll";
    case AQ_LEVEL_MODERATE:
        return "Moderate";
    default:
        return "HeavyPoll";
    }
}

static void OLED_PrintLine(uint8_t line, const char *text)
{
    char buf[17];
    uint8_t i;

    for (i = 0; i < 16; i++)
    {
        buf[i] = ' ';
    }
    buf[16] = '\0';

    for (i = 0; i < 16 && text[i] != '\0'; i++)
    {
        buf[i] = text[i];
    }
    OLED_ShowString(line, 1, buf);
}

void Display_Task(void)
{
    char line[24];

    if (g_setting_mode)
    {
        OLED_PrintLine(1, "Setting Threshold");
        sprintf(line, "%s=%u", CurrentSettingName(), *CurrentSettingValue());
        OLED_PrintLine(2, line);
        OLED_PrintLine(3, "K2+/K3- K1 Next");
        OLED_PrintLine(4, "K4 Save");
        return;
    }

    if (g_page == 0U)
    {
        sprintf(line, "T1:%2uC H1:%2u%%", g_air_data.temp_dht_c, g_air_data.hum_dht_rh);
        OLED_PrintLine(1, line);
        sprintf(line, "CO2:%4uppm", g_air_data.co2_ppm);
        OLED_PrintLine(2, line);
        sprintf(line, "FAN:%s %s", (g_fan_mode == FAN_MODE_AUTO) ? "AUTO" : "MAN", g_fan_on ? "ON" : "OFF");
        OLED_PrintLine(3, line);
        sprintf(line, "ALM:%s M:%s", g_alarm_active ? "ON" : "OFF", g_alarm_muted ? "MUTE" : "RUN");
        OLED_PrintLine(4, line);
    }
    else if (g_page == 1U)
    {
        sprintf(line, "CO2 :%4uppm", g_air_data.co2_ppm);
        OLED_PrintLine(1, line);
        sprintf(line, "TVOC:%4uppb", g_air_data.voc_ppb);
        OLED_PrintLine(2, line);
        sprintf(line, "PM25:%4uug", g_air_data.pm25_ugm3);
        OLED_PrintLine(3, line);
        sprintf(line, "SGP30:%s", g_air_data.module_online ? "Online" : "Offline");
        OLED_PrintLine(4, line);
    }
    else
    {
        sprintf(line, "MQ135:%4u", g_air_data.mq135_raw);
        OLED_PrintLine(1, line);
        sprintf(line, "AQ:%3u %s", g_aq_score, AQ_LevelText(g_aq_level));
        OLED_PrintLine(2, line);
        sprintf(line, "SGP30:%s", g_air_data.module_online ? "Online" : "Offline");
        OLED_PrintLine(3, line);
        if (g_sgp30_warmup_s > 0U)
        {
            sprintf(line, "SGPWarm:%us", g_sgp30_warmup_s);
        }
        else if (g_mq_preheat_s > 0U)
        {
            sprintf(line, "Warmup:%us", g_mq_preheat_s);
        }
        else
        {
            sprintf(line, "FanOffDelay:%us", g_fan_off_delay_s);
        }
        OLED_PrintLine(4, line);
    }
}
