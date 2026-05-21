#include "app.h"
#include "app_modules.h"

#define SYN6288_FRAME_HEAD               0xFDU
#define SYN6288_CMD_SPEAK                0x01U
#define SYN6288_TEXT_GBK                 0x01U
#define SYN6288_MUSIC_NONE               0x00U

typedef enum
{
    VOICE_MSG_BOOT = 0,
    VOICE_MSG_ALARM_ON,
    VOICE_MSG_ALARM_OFF,
    VOICE_MSG_MUTE_ON,
    VOICE_MSG_MUTE_OFF,
    VOICE_MSG_MODE_AUTO,
    VOICE_MSG_MODE_MANUAL,
    VOICE_MSG_FAN_ON,
    VOICE_MSG_FAN_OFF,
    VOICE_MSG_PARAM_SAVED,
    VOICE_MSG_COUNT
} VoiceMsg_t;

typedef struct
{
    const uint8_t *text;
    uint16_t len;
} VoiceText_t;

static const uint8_t kVoiceBoot[] =
{
    0xBF, 0xD5, 0xC6, 0xF8, 0xBC, 0xE0, 0xB2, 0xE2, 0xCF, 0xB5,
    0xCD, 0xB3, 0xD2, 0xD1, 0xC6, 0xF4, 0xB6, 0xAF
};
static const uint8_t kVoiceAlarmOn[] =
{
    0xBF, 0xD5, 0xC6, 0xF8, 0xD6, 0xCA, 0xC1, 0xBF, 0xD2, 0xEC,
    0xB3, 0xA3, 0xA3, 0xAC, 0xC7, 0xEB, 0xD7, 0xA2, 0xD2, 0xE2,
    0xCD, 0xA8, 0xB7, 0xE7
};
static const uint8_t kVoiceAlarmOff[] =
{
    0xBF, 0xD5, 0xC6, 0xF8, 0xD6, 0xCA, 0xC1, 0xBF, 0xBB, 0xD6,
    0xB8, 0xB4, 0xD5, 0xFD, 0xB3, 0xA3
};
static const uint8_t kVoiceMuteOn[] =
{
    0xB1, 0xA8, 0xBE, 0xAF, 0xD2, 0xD1, 0xBE, 0xB2, 0xD2, 0xF4
};
static const uint8_t kVoiceMuteOff[] =
{
    0xB1, 0xA8, 0xBE, 0xAF, 0xBE, 0xB2, 0xD2, 0xF4, 0xD2, 0xD1,
    0xC8, 0xA1, 0xCF, 0xFB
};
static const uint8_t kVoiceModeAuto[] =
{
    0xD7, 0xD4, 0xB6, 0xAF, 0xC4, 0xA3, 0xCA, 0xBD
};
static const uint8_t kVoiceModeManual[] =
{
    0xCA, 0xD6, 0xB6, 0xAF, 0xC4, 0xA3, 0xCA, 0xBD
};
static const uint8_t kVoiceFanOn[] =
{
    0xB7, 0xE7, 0xC9, 0xC8, 0xD2, 0xD1, 0xBF, 0xAA, 0xC6, 0xF4
};
static const uint8_t kVoiceFanOff[] =
{
    0xB7, 0xE7, 0xC9, 0xC8, 0xD2, 0xD1, 0xB9, 0xD8, 0xB1, 0xD5
};
static const uint8_t kVoiceParamSaved[] =
{
    0xB2, 0xCE, 0xCA, 0xFD, 0xD2, 0xD1, 0xB1, 0xA3, 0xB4, 0xE6
};

static const VoiceText_t kVoiceTexts[VOICE_MSG_COUNT] =
{
    {kVoiceBoot, sizeof(kVoiceBoot)},
    {kVoiceAlarmOn, sizeof(kVoiceAlarmOn)},
    {kVoiceAlarmOff, sizeof(kVoiceAlarmOff)},
    {kVoiceMuteOn, sizeof(kVoiceMuteOn)},
    {kVoiceMuteOff, sizeof(kVoiceMuteOff)},
    {kVoiceModeAuto, sizeof(kVoiceModeAuto)},
    {kVoiceModeManual, sizeof(kVoiceModeManual)},
    {kVoiceFanOn, sizeof(kVoiceFanOn)},
    {kVoiceFanOff, sizeof(kVoiceFanOff)},
    {kVoiceParamSaved, sizeof(kVoiceParamSaved)}
};

static uint8_t s_voice_queue[VOICE_QUEUE_SIZE];
static uint8_t s_voice_head = 0U;
static uint8_t s_voice_tail = 0U;
static uint16_t s_voice_cooldown = 0U;
static uint8_t s_prev_alarm = 0U;
static uint8_t s_prev_mute = 0U;
static uint8_t s_prev_fan = 0U;
static FanMode_t s_prev_mode = FAN_MODE_AUTO;

static void SYN6288_SendByte(uint8_t byte)
{
    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET)
    {
    }
    USART_SendData(USART1, byte);
}

static void SYN6288_SpeakGbk(const uint8_t *text, uint16_t len)
{
    uint16_t frame_len;
    uint16_t i;
    uint8_t param;
    uint8_t ecc;

    frame_len = (uint16_t)(len + 3U);
    param = (uint8_t)(SYN6288_TEXT_GBK | (SYN6288_MUSIC_NONE << 4));
    ecc = SYN6288_FRAME_HEAD ^
          (uint8_t)(frame_len >> 8) ^
          (uint8_t)(frame_len & 0xFFU) ^
          SYN6288_CMD_SPEAK ^
          param;
    SYN6288_SendByte(SYN6288_FRAME_HEAD);
    SYN6288_SendByte((uint8_t)(frame_len >> 8));
    SYN6288_SendByte((uint8_t)(frame_len & 0xFFU));
    SYN6288_SendByte(SYN6288_CMD_SPEAK);
    SYN6288_SendByte(param);
    for (i = 0U; i < len; i++)
    {
        ecc ^= text[i];
        SYN6288_SendByte(text[i]);
    }
    SYN6288_SendByte(ecc);

    while (USART_GetFlagStatus(USART1, USART_FLAG_TC) == RESET)
    {
    }
}

static void Voice_Queue(VoiceMsg_t msg)
{
    uint8_t next;

    next = (uint8_t)((s_voice_head + 1U) % VOICE_QUEUE_SIZE);
    if (next == s_voice_tail)
    {
        return;
    }

    s_voice_queue[s_voice_head] = (uint8_t)msg;
    s_voice_head = next;
}

static uint8_t Voice_Pop(VoiceMsg_t *msg)
{
    if (s_voice_tail == s_voice_head)
    {
        return 0U;
    }

    *msg = (VoiceMsg_t)s_voice_queue[s_voice_tail];
    s_voice_tail = (uint8_t)((s_voice_tail + 1U) % VOICE_QUEUE_SIZE);
    return 1U;
}

void Voice_Init(void)
{
    s_voice_head = 0U;
    s_voice_tail = 0U;
    s_voice_cooldown = 0U;
    s_prev_alarm = g_alarm_active;
    s_prev_mute = g_alarm_muted;
    s_prev_fan = g_fan_on;
    s_prev_mode = g_fan_mode;
}

void Voice_SpeakBoot(void)
{
    Voice_Queue(VOICE_MSG_BOOT);
}

void Voice_NotifyParamsSaved(void)
{
    Voice_Queue(VOICE_MSG_PARAM_SAVED);
}

void Voice_Task10ms(void)
{
    VoiceMsg_t msg;

    if (g_alarm_active != s_prev_alarm)
    {
        s_prev_alarm = g_alarm_active;
        Voice_Queue(g_alarm_active ? VOICE_MSG_ALARM_ON : VOICE_MSG_ALARM_OFF);
    }

    if (g_alarm_muted != s_prev_mute)
    {
        s_prev_mute = g_alarm_muted;
        Voice_Queue(g_alarm_muted ? VOICE_MSG_MUTE_ON : VOICE_MSG_MUTE_OFF);
    }

    if (g_fan_mode != s_prev_mode)
    {
        s_prev_mode = g_fan_mode;
        Voice_Queue((g_fan_mode == FAN_MODE_AUTO) ? VOICE_MSG_MODE_AUTO : VOICE_MSG_MODE_MANUAL);
    }

    if (g_fan_mode == FAN_MODE_MANUAL && g_fan_on != s_prev_fan)
    {
        Voice_Queue(g_fan_on ? VOICE_MSG_FAN_ON : VOICE_MSG_FAN_OFF);
    }
    s_prev_fan = g_fan_on;

    if (s_voice_cooldown > 0U)
    {
        s_voice_cooldown--;
        return;
    }

    if (Voice_Pop(&msg))
    {
        if ((uint8_t)msg < (uint8_t)VOICE_MSG_COUNT)
        {
            SYN6288_SpeakGbk(kVoiceTexts[msg].text, kVoiceTexts[msg].len);
            s_voice_cooldown = VOICE_COOLDOWN_TICKS;
        }
    }
}
