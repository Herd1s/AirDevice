# AirDevice (STM32F103C8T6, StdPeriph)

This firmware integrates local sensors + SGP30 + JDY23 BLE UART, and supports:
- sensor sampling: `DHT11`, `MQ135(ADC)`, `GP2Y1014AU0F(ADC + LED timing)`, `SGP30(I2C)`
- processing: moving average + median-average + step limiting
- control: buzzer alarm + relay fan auto/manual linkage
- HMI: 4 keys (short/long press), page switch, threshold setting, mute
- BLE control: threshold write, mode switch, log query/clear, save to flash

## 1. Pin Map

- `PA1`: DHT11 one-wire data
- `PA4 (ADC1_IN4)`: MQ135 analog output
- `PA5 (ADC1_IN5)`: GP2Y1014 analog output
- `PA6`: GP2Y1014 LED control (active low)
- `PB6/PB7`: OLED SSD1306 software I2C
- `PB10/PB11`: SGP30 software I2C (dedicated bus)
- `PA2/PA3`: JDY23 BLE UART (`USART2`, 9600)
- `PB8`: buzzer input (active low)
- `PB9`: relay input (active low)
- `PB12~PB15`: key K1~K4 (pull-up input)
- `PA9/PA10`: debug UART (`USART1`, 115200)

## 2. JDY23 BLE UART Protocol

Line-based ASCII, one command per line, terminated by `\n`.

### Device periodic upload

- every 1s: `$DATA,...`
- alarm edge event: `$EVT,ALARM,...`

Example:
```text
$DATA,UP=12,T=26,H=52,CO2=640,TVOC=70,PM25=18,MQ=1880,AQ=92,LV=1,ALM=0,MUTE=0,FAN=0,MODE=0,SGP=1
```

### Commands from app

- `PING`
- `GET,DATA`
- `GET,CFG`
- `GET,LOG`
- `GET,ALL`
- `SET,CO2,<400..3000>`
- `SET,TVOC,<50..2000>`
- `SET,PM25,<10..300>`
- `SET,MQ135,<500..3800>`
- `SET,FANOFF,<5..120>`
- `SET,MODE,AUTO`
- `SET,MODE,MAN`
- `SET,FAN,0|1` (only valid in manual mode)
- `SET,MUTE,0|1`
- `SAVE`
- `CLR,LOG`

### Responses

- ack: `$ACK,<CMD>,OK` or `$ACK,<CMD>,ERR,<REASON>`
- config: `$CFG,CO2_TH=...,TVOC_TH=...,PM25_TH=...,MQ_TH=...,FANOFF=...`
- logs:
  - header: `$LOG,COUNT=n`
  - entries: `$LOG,idx,UP=...,STATE=...,AQ=...,CO2=...,TVOC=...,PM25=...,MQ=...`
  - end: `$ENDLOG`

## 3. SGP30 Notes

- I2C address: `0x58`
- command `0x2003`: IAQ init
- command `0x2008`: measure air quality (eCO2 + TVOC)
- CRC-8 check: polynomial `0x31`, init `0xFF`

## 4. Flash Parameter Storage

- storage address: `0x0800FC00` (last page of 64KB layout)
- content: thresholds + fan-off delay
- if your chip is 128KB layout, update `PARAM_FLASH_ADDR`

## 5. Build

- project file: `Project.uvprojx`
- build status verified: `0 Error(s), 0 Warning(s)`
