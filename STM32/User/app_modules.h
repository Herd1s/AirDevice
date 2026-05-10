#ifndef APP_MODULES_H
#define APP_MODULES_H

#include "app.h"

void RCC_Config(void);
void GPIO_Config(void);
void ADC_Config(void);
void USART1_Config(void);
void USART2_BLE_Config(void);

void Buzzer_Set(uint8_t on);
void Relay_Set(uint8_t on);
void DustLed_Set(uint8_t on);

void App_DefaultParams(void);
uint8_t App_LoadParams(void);
uint8_t App_SaveParams(void);

void AvgFilter_Reset(AvgFilter_t *f);
uint16_t AvgFilter_Update(AvgFilter_t *f, uint16_t value);
uint16_t LimitStep(uint16_t prev, uint16_t now, uint16_t max_delta);
void AQ_UpdateAndJudge(void);
void Sensor_Task_500ms(void);
void Sensor_Task_2s(void);
uint8_t SGP30_Init(void);
void SGP30_Task_1s(void);

void Keys_Scan10ms(void);
uint8_t Event_Pop(void);
void HandleKeyEvent(uint8_t evt);
void Display_Task(void);

void Control_Task10ms(void);

void BLE_SendString(const char *s);
void BLE_ReportData(void);
void BLE_ReportConfig(void);
void BLE_CheckAlarmEdge(void);
void BLE_PollRx(void);

#endif
