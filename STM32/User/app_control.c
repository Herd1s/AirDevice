#include "app.h"
#include "app_modules.h"

void Control_Task10ms(void)
{
    if (g_fan_mode == FAN_MODE_AUTO)
    {
        if (g_alarm_active)
        {
            g_fan_keep_ticks = (uint16_t)(g_fan_off_delay_s * APP_SECOND_TICKS);
            g_fan_on = 1;
        }
        else if (g_fan_keep_ticks > 0U)
        {
            g_fan_keep_ticks--;
            g_fan_on = 1;
        }
        else
        {
            g_fan_on = 0;
        }
    }
    else
    {
        g_fan_on = g_manual_fan_on;
    }

    if (g_alarm_active && !g_alarm_muted)
    {
        g_buzzer_ticks++;
        if (g_buzzer_ticks >= 25U)
        {
            g_buzzer_ticks = 0;
            g_buzzer_phase = (uint8_t)!g_buzzer_phase;
        }
    }
    else
    {
        g_buzzer_ticks = 0;
        g_buzzer_phase = 0;
    }

    Relay_Set(g_fan_on);
    Buzzer_Set(g_buzzer_phase);
}
