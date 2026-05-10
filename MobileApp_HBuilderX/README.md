# AirDevice Mobile (HBuilderX / uni-app)

This is a uni-app client for JDY23 BLE UART firmware.

## Features

- BLE scan and connect
- realtime sensor data display
- threshold editing and write-back
- fan mode / mute control
- device alarm log query and clear
- local alarm history persistence (device-side logs are also supported)

## Project Structure

- `pages/index/index.vue`: main page (UI + command flow)
- `utils/ble.js`: BLE adapter / service / characteristic handling
- `pages.json`, `main.js`, `App.vue`: uni-app bootstrap files

## How to Run

1. Open HBuilderX.
2. Import folder `MobileApp_HBuilderX` as a uni-app project.
3. Run on Android device with Bluetooth enabled.
4. Open app, tap `打开并扫描`, find JDY device, then connect.

## Firmware Command Examples

- `GET,ALL`
- `SET,CO2,1000`
- `SET,TVOC,300`
- `SET,PM25,75`
- `SET,MQ135,2200`
- `SET,FANOFF,30`
- `SET,MODE,AUTO`
- `SAVE`

## Notes

- The app auto-detects service/characteristic, but it prefers `FFE0/FFE1`.
- If your JDY23 firmware uses different UUIDs, keep auto-detect path or pin UUIDs in `utils/ble.js`.
- JDY23 and STM32 must share common ground and correct UART levels.
