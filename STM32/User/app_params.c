#include "app.h"
#include "app_modules.h"
#include <string.h>
#include <stddef.h>

static uint16_t Param_Checksum(const uint8_t *data, uint16_t len)
{
    uint32_t sum = 0;
    uint16_t i;
    for (i = 0; i < len; i++)
    {
        sum += data[i];
    }
    return (uint16_t)(sum & 0xFFFFU);
}

void App_DefaultParams(void)
{
    g_threshold = kDefaultThreshold;
    g_fan_off_delay_s = 30U;
}

uint8_t App_LoadParams(void)
{
    const ParamStore_t *p = (const ParamStore_t *)PARAM_FLASH_ADDR;
    uint16_t calc;

    if (p->magic != PARAM_MAGIC || p->end_mark != PARAM_END_MARK)
    {
        return 0;
    }

    calc = Param_Checksum((const uint8_t *)p, (uint16_t)offsetof(ParamStore_t, checksum));
    if (calc != p->checksum)
    {
        return 0;
    }

    g_threshold = p->threshold;
    g_fan_off_delay_s = p->fan_off_delay_s;
    if (g_fan_off_delay_s < 5U || g_fan_off_delay_s > 120U)
    {
        g_fan_off_delay_s = 30U;
    }
    return 1;
}

uint8_t App_SaveParams(void)
{
    ParamStore_t s;
    FLASH_Status st;
    const uint16_t *src;
    uint32_t addr;
    uint16_t i;
    uint16_t count;

    memset(&s, 0, sizeof(s));
    s.magic = PARAM_MAGIC;
    s.threshold = g_threshold;
    s.fan_off_delay_s = g_fan_off_delay_s;
    s.end_mark = PARAM_END_MARK;
    s.checksum = Param_Checksum((const uint8_t *)&s, (uint16_t)offsetof(ParamStore_t, checksum));

    FLASH_Unlock();
    FLASH_ClearFlag(FLASH_FLAG_BSY | FLASH_FLAG_EOP | FLASH_FLAG_PGERR | FLASH_FLAG_WRPRTERR);

    st = FLASH_ErasePage(PARAM_FLASH_ADDR);
    if (st != FLASH_COMPLETE)
    {
        FLASH_Lock();
        return 0;
    }

    src = (const uint16_t *)&s;
    addr = PARAM_FLASH_ADDR;
    count = (uint16_t)(sizeof(ParamStore_t) / 2U);
    for (i = 0; i < count; i++)
    {
        st = FLASH_ProgramHalfWord(addr, src[i]);
        if (st != FLASH_COMPLETE)
        {
            FLASH_Lock();
            return 0;
        }
        addr += 2U;
    }

    FLASH_Lock();
    return 1;
}
