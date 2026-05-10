#include "app.h"
#include "app_modules.h"
#include <stdio.h>
#include <stdarg.h>
#include <string.h>
#include <stdlib.h>

static void BLE_SendChar(char c)
{
    while (USART_GetFlagStatus(USART2, USART_FLAG_TXE) == RESET)
    {
    }
    USART_SendData(USART2, (uint16_t)c);
}

void BLE_SendString(const char *s)
{
    while (*s != '\0')
    {
        BLE_SendChar(*s++);
    }
}

static void BLE_Sendf(const char *fmt, ...)
{
    char buf[BLE_TX_BUF_MAX];
    va_list ap;

    va_start(ap, fmt);
    vsnprintf(buf, sizeof(buf), fmt, ap);
    va_end(ap);
    BLE_SendString(buf);
}

static uint8_t ParseU16(const char *s, uint16_t *out)
{
    uint32_t value = 0;

    if (s == 0 || *s == '\0')
    {
        return 0;
    }

    while (*s != '\0')
    {
        if (*s < '0' || *s > '9')
        {
            return 0;
        }
        value = value * 10U + (uint32_t)(*s - '0');
        if (value > 65535U)
        {
            return 0;
        }
        s++;
    }

    *out = (uint16_t)value;
    return 1;
}

void BLE_ReportData(void)
{
    BLE_Sendf("$DATA,UP=%lu,T=%u,H=%u,CO2=%u,TVOC=%u,PM25=%u,MQ=%u,AQ=%u,LV=%u,ALM=%u,MUTE=%u,FAN=%u,MODE=%u,SGP=%u\r\n",
              (unsigned long)g_uptime_s,
              g_air_data.temp_dht_c,
              g_air_data.hum_dht_rh,
              g_air_data.co2_ppm,
              g_air_data.voc_ppb,
              g_air_data.pm25_ugm3,
              g_air_data.mq135_raw,
              g_aq_score,
              (uint8_t)g_aq_level,
              g_alarm_active,
              g_alarm_muted,
              g_fan_on,
              (uint8_t)g_fan_mode,
              g_air_data.module_online);
}

void BLE_ReportConfig(void)
{
    BLE_Sendf("$CFG,CO2_TH=%u,TVOC_TH=%u,PM25_TH=%u,MQ_TH=%u,FANOFF=%u\r\n",
              g_threshold.co2_ppm,
              g_threshold.voc_ppb,
              g_threshold.pm25_ugm3,
              g_threshold.mq135_raw,
              g_fan_off_delay_s);
}

static void BLE_LogAlarmEvent(uint8_t alarm_on)
{
    AlarmLog_t *log = &g_alarm_log[g_alarm_log_head];

    log->uptime_s = g_uptime_s;
    log->alarm_on = alarm_on;
    log->aq_score = g_aq_score;
    log->co2_ppm = g_air_data.co2_ppm;
    log->voc_ppb = g_air_data.voc_ppb;
    log->pm25_ugm3 = g_air_data.pm25_ugm3;
    log->mq135_raw = g_air_data.mq135_raw;

    g_alarm_log_head = (uint8_t)((g_alarm_log_head + 1U) % BLE_LOG_MAX);
    if (g_alarm_log_count < BLE_LOG_MAX)
    {
        g_alarm_log_count++;
    }

    BLE_Sendf("$EVT,ALARM,%s,UP=%lu,AQ=%u,CO2=%u,TVOC=%u,PM25=%u,MQ=%u\r\n",
              alarm_on ? "ON" : "OFF",
              (unsigned long)log->uptime_s,
              log->aq_score,
              log->co2_ppm,
              log->voc_ppb,
              log->pm25_ugm3,
              log->mq135_raw);
}

static void BLE_ReportLogs(void)
{
    uint8_t i;
    uint8_t idx;
    const AlarmLog_t *log;

    BLE_Sendf("$LOG,COUNT=%u\r\n", g_alarm_log_count);
    for (i = 0; i < g_alarm_log_count; i++)
    {
        idx = (uint8_t)((g_alarm_log_head + BLE_LOG_MAX - g_alarm_log_count + i) % BLE_LOG_MAX);
        log = &g_alarm_log[idx];
        BLE_Sendf("$LOG,%u,UP=%lu,STATE=%u,AQ=%u,CO2=%u,TVOC=%u,PM25=%u,MQ=%u\r\n",
                  (uint8_t)(i + 1U),
                  (unsigned long)log->uptime_s,
                  log->alarm_on,
                  log->aq_score,
                  log->co2_ppm,
                  log->voc_ppb,
                  log->pm25_ugm3,
                  log->mq135_raw);
    }
    BLE_SendString("$ENDLOG\r\n");
}

void BLE_CheckAlarmEdge(void)
{
    if (g_alarm_active != g_alarm_prev)
    {
        g_alarm_prev = g_alarm_active;
        BLE_LogAlarmEvent(g_alarm_active);
    }
}

static void BLE_ProcessLine(char *line)
{
    char *cmd;
    char *arg1;
    char *arg2;
    uint16_t value;

    cmd = strtok(line, ",");
    if (cmd == 0)
    {
        return;
    }

    if (strcmp(cmd, "PING") == 0)
    {
        BLE_SendString("$ACK,PING,OK\r\n");
        return;
    }

    if (strcmp(cmd, "GET") == 0)
    {
        arg1 = strtok(0, ",");
        if (arg1 == 0)
        {
            BLE_SendString("$ACK,GET,ERR,ARG\r\n");
            return;
        }

        if (strcmp(arg1, "DATA") == 0)
        {
            BLE_ReportData();
            BLE_SendString("$ACK,GET,OK\r\n");
        }
        else if (strcmp(arg1, "CFG") == 0)
        {
            BLE_ReportConfig();
            BLE_SendString("$ACK,GET,OK\r\n");
        }
        else if (strcmp(arg1, "LOG") == 0)
        {
            BLE_ReportLogs();
            BLE_SendString("$ACK,GET,OK\r\n");
        }
        else if (strcmp(arg1, "ALL") == 0)
        {
            BLE_ReportData();
            BLE_ReportConfig();
            BLE_SendString("$ACK,GET,OK\r\n");
        }
        else
        {
            BLE_SendString("$ACK,GET,ERR,CMD\r\n");
        }
        return;
    }

    if (strcmp(cmd, "CLR") == 0)
    {
        arg1 = strtok(0, ",");
        if (arg1 != 0 && strcmp(arg1, "LOG") == 0)
        {
            g_alarm_log_head = 0U;
            g_alarm_log_count = 0U;
            BLE_SendString("$ACK,CLR,OK\r\n");
        }
        else
        {
            BLE_SendString("$ACK,CLR,ERR,CMD\r\n");
        }
        return;
    }

    if (strcmp(cmd, "SAVE") == 0)
    {
        if (App_SaveParams())
        {
            BLE_SendString("$ACK,SAVE,OK\r\n");
        }
        else
        {
            BLE_SendString("$ACK,SAVE,ERR,FLASH\r\n");
        }
        return;
    }

    if (strcmp(cmd, "SET") == 0)
    {
        arg1 = strtok(0, ",");
        arg2 = strtok(0, ",");
        if (arg1 == 0 || arg2 == 0)
        {
            BLE_SendString("$ACK,SET,ERR,ARG\r\n");
            return;
        }

        if (strcmp(arg1, "MODE") == 0)
        {
            if (strcmp(arg2, "AUTO") == 0)
            {
                g_fan_mode = FAN_MODE_AUTO;
                g_manual_fan_on = 0U;
                BLE_SendString("$ACK,SET,OK\r\n");
            }
            else if (strcmp(arg2, "MAN") == 0)
            {
                g_fan_mode = FAN_MODE_MANUAL;
                BLE_SendString("$ACK,SET,OK\r\n");
            }
            else
            {
                BLE_SendString("$ACK,SET,ERR,MODE\r\n");
            }
            return;
        }

        if (!ParseU16(arg2, &value))
        {
            BLE_SendString("$ACK,SET,ERR,VAL\r\n");
            return;
        }

        if (strcmp(arg1, "CO2") == 0)
        {
            if (value < 400U || value > 3000U)
            {
                BLE_SendString("$ACK,SET,ERR,RANGE\r\n");
                return;
            }
            g_threshold.co2_ppm = value;
        }
        else if (strcmp(arg1, "TVOC") == 0)
        {
            if (value < 50U || value > 2000U)
            {
                BLE_SendString("$ACK,SET,ERR,RANGE\r\n");
                return;
            }
            g_threshold.voc_ppb = value;
        }
        else if (strcmp(arg1, "PM25") == 0)
        {
            if (value < 10U || value > 300U)
            {
                BLE_SendString("$ACK,SET,ERR,RANGE\r\n");
                return;
            }
            g_threshold.pm25_ugm3 = value;
        }
        else if (strcmp(arg1, "MQ135") == 0)
        {
            if (value < 500U || value > 3800U)
            {
                BLE_SendString("$ACK,SET,ERR,RANGE\r\n");
                return;
            }
            g_threshold.mq135_raw = value;
        }
        else if (strcmp(arg1, "FANOFF") == 0)
        {
            if (value < 5U || value > 120U)
            {
                BLE_SendString("$ACK,SET,ERR,RANGE\r\n");
                return;
            }
            g_fan_off_delay_s = value;
        }
        else if (strcmp(arg1, "FAN") == 0)
        {
            if (g_fan_mode != FAN_MODE_MANUAL)
            {
                BLE_SendString("$ACK,SET,ERR,MODE\r\n");
                return;
            }
            g_manual_fan_on = (value != 0U) ? 1U : 0U;
        }
        else if (strcmp(arg1, "MUTE") == 0)
        {
            g_alarm_muted = (value != 0U) ? 1U : 0U;
        }
        else
        {
            BLE_SendString("$ACK,SET,ERR,CMD\r\n");
            return;
        }

        BLE_ReportConfig();
        BLE_SendString("$ACK,SET,OK\r\n");
        return;
    }

    BLE_SendString("$ACK,UNK,ERR,CMD\r\n");
}

void BLE_PollRx(void)
{
    uint8_t c;

    while (USART_GetFlagStatus(USART2, USART_FLAG_RXNE) == SET)
    {
        c = (uint8_t)USART_ReceiveData(USART2);
        if (c == '\r')
        {
            continue;
        }
        if (c == '\n')
        {
            g_ble_rx_line[g_ble_rx_idx] = '\0';
            if (g_ble_rx_idx > 0U)
            {
                BLE_ProcessLine(g_ble_rx_line);
            }
            g_ble_rx_idx = 0U;
            continue;
        }

        if (c >= 0x20U && c <= 0x7EU)
        {
            if (g_ble_rx_idx < (BLE_RX_LINE_MAX - 1U))
            {
                g_ble_rx_line[g_ble_rx_idx++] = (char)c;
            }
            else
            {
                g_ble_rx_idx = 0U;
            }
        }
    }
}
