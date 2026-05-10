<template>
  <view class="app-container">
    <scroll-view class="main-content" scroll-y>
      
      <view v-show="currentTab === 0" class="page-section">
        <view class="card">
          <view class="title">
            <text>蓝牙状态</text>
            <text :class="['status-badge', connected ? 'connected' : 'disconnected']">{{ connText }}</text>
          </view>
          <view class="row">
            <button class="btn" size="mini" type="primary" @click="openAndScan">扫描</button>
            <button class="btn" size="mini" type="default" @click="stopScan">停止</button>
            <button class="btn" size="mini" type="warn" @click="disconnect">断开</button>
          </view>
          
          <view class="sub mt-10" v-if="connectedDeviceName">
            <text>已连设备：</text>
            <text class="device-name-highlight">{{ connectedDeviceName }}</text>
          </view>

          <view class="list" v-if="devices.length > 0 && !connected">
            <view class="item" v-for="d in devices" :key="d.deviceId">
              <view class="item-info">
                <view class="name">{{ d.name || d.localName || 'Unnamed Device' }}</view>
                <view class="id">{{ d.deviceId }}</view>
              </view>
              <button class="connect-btn" size="mini" type="primary" plain @click="connectDevice(d)">连接</button>
            </view>
          </view>
        </view>

        <view class="card">
          <view class="title">
            <text>实时环境数据</text>
            <view class="title-actions">
              <button class="action-btn" size="mini" @click="sendCmd('GET,DATA')">🔄 刷新</button>
            </view>
          </view>
          <view class="grid">
            <view :class="['kv', m.k === 'ALARM' && m.v === 'ON' ? 'alert' : '']" v-for="m in metrics" :key="m.k">
              <view class="kv-header">
                <text class="icon">{{ m.icon }}</text>
                <text class="k">{{ m.k }}</text>
              </view>
              <text class="v">{{ m.v }}</text>
            </view>
          </view>
        </view>
      </view>

      <view v-show="currentTab === 1" class="page-section">
        <view class="card">
          <view class="title">设备控制</view>
          <view class="row">
            <button class="btn" size="mini" type="default" @click="sendCmd('SET,MODE,AUTO')">🤖 自动模式</button>
            <button class="btn" size="mini" type="default" @click="sendCmd('SET,MODE,MAN')">👋 手动模式</button>
          </view>
          <view class="row">
            <button class="btn" size="mini" type="primary" plain @click="sendCmd('SET,FAN,1')">🌀 开风扇</button>
            <button class="btn" size="mini" type="warn" plain @click="sendCmd('SET,FAN,0')">🛑 关风扇</button>
          </view>
          <view class="row">
            <button class="btn" size="mini" type="default" plain @click="sendCmd('SET,MUTE,1')">🔕 报警静音</button>
            <button class="btn" size="mini" type="default" plain @click="sendCmd('SET,MUTE,0')">🔔 取消静音</button>
          </view>
        </view>

        <view class="card">
          <view class="title">
            <text>阈值参数设置</text>
            <button class="action-btn" size="mini" @click="sendCmd('GET,CFG')">读取</button>
          </view>
          <view class="form-group">
            <view class="formRow">
              <text class="label">CO2 阈值 (ppm)</text>
              <input class="ipt" type="number" v-model="cfgEdit.co2" />
            </view>
            <view class="formRow">
              <text class="label">TVOC 阈值 (ppb)</text>
              <input class="ipt" type="number" v-model="cfgEdit.tvoc" />
            </view>
            <view class="formRow">
              <text class="label">PM2.5 阈值</text>
              <input class="ipt" type="number" v-model="cfgEdit.pm25" />
            </view>
            <view class="formRow">
              <text class="label">MQ135 阈值</text>
              <input class="ipt" type="number" v-model="cfgEdit.mq" />
            </view>
            <view class="formRow">
              <text class="label">风扇延时 (s)</text>
              <input class="ipt" type="number" v-model="cfgEdit.fanoff" />
            </view>
          </view>
          <view class="row mt-20">
            <button class="btn" size="mini" type="primary" @click="applyConfig">✅ 下发应用</button>
            <button class="btn" size="mini" type="default" @click="sendCmd('SAVE')">💾 保存至 Flash</button>
          </view>
        </view>
      </view>

      <view v-show="currentTab === 2" class="page-section">
        <view class="card">
          <view class="title">设备通讯日志</view>
          <view class="sub">
            <text>最后应答：</text>
            <text class="ack-text">{{ lastAck || '暂无数据' }}</text>
          </view>
          <view class="row mt-20">
            <button class="btn" size="mini" type="primary" @click="sendCmd('GET,LOG')">📥 读设备日志</button>
            <button class="btn" size="mini" type="warn" plain @click="clearDeviceLogs">🗑️ 清设备</button>
            <button class="btn" size="mini" type="default" plain @click="clearLocalLogs">🧹 清本地</button>
          </view>
          
          <view class="terminal" v-if="logs.length > 0">
            <view class="log" v-for="(l, idx) in logs" :key="idx">
              <text class="log-time">[{{ l.time }}]</text>
              <text class="log-msg">{{ l.msg }}</text>
            </view>
          </view>
          <view v-else class="empty-state">
            暂无日志记录
          </view>
        </view>
      </view>

    </scroll-view>

    <view class="tab-bar">
      <view class="tab-item" :class="{ active: currentTab === 0 }" @click="currentTab = 0">
        <text class="tab-icon">📊</text>
        <text class="tab-text">数据</text>
      </view>
      <view class="tab-item" :class="{ active: currentTab === 1 }" @click="currentTab = 1">
        <text class="tab-icon">⚙️</text>
        <text class="tab-text">设置</text>
      </view>
      <view class="tab-item" :class="{ active: currentTab === 2 }" @click="currentTab = 2">
        <text class="tab-icon">📋</text>
        <text class="tab-text">日志</text>
      </view>
    </view>

  </view>
</template>

<script>
import BleClient from '../../utils/ble'

const LOG_KEY = 'airdevice_alarm_logs'

function parseKvLine(line) {
  const parts = line.split(',')
  const kv = {}
  for (let i = 1; i < parts.length; i++) {
    const p = parts[i]
    const pos = p.indexOf('=')
    if (pos > 0) kv[p.slice(0, pos)] = p.slice(pos + 1)
  }
  return kv
}

function nowText() {
  const d = new Date()
  const p = (n) => `${n}`.padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}

export default {
  data() {
    return {
      currentTab: 0, // 当前所在页：0数据，1设置，2日志
      ble: null,
      connText: '未连接',
      devices: [],
      connected: false,
      connectedDeviceName: '',
      lastAck: '',
      loadingCfg: false,
      data: {
        UP: 0, T: 0, H: 0, CO2: 0, TVOC: 0, PM25: 0, MQ: 0, AQ: 0, LV: 0, ALM: 0, MUTE: 0, FAN: 0, MODE: 0, SGP: 0
      },
      cfgEdit: { co2: '1000', tvoc: '300', pm25: '75', mq: '2200', fanoff: '30' },
      logs: [],
      tempLogBatch: []
    }
  },
  computed: {
    // 给数据指标配上了对应的图标
    metrics() {
      const d = this.data
      return [
        { k: 'T(°C)', v: d.T, icon: '🌡️' },
        { k: 'H(%)', v: d.H, icon: '💧' },
        { k: 'eCO2', v: d.CO2, icon: '💨' },
        { k: 'TVOC', v: d.TVOC, icon: '🧪' },
        { k: 'PM2.5', v: d.PM25, icon: '🌫️' },
        { k: 'MQ135', v: d.MQ, icon: '🏭' },
        { k: 'AQ', v: d.AQ, icon: '🍃' },
        { k: 'ALARM', v: d.ALM ? 'ON' : 'OFF', icon: '🚨' },
        { k: 'FAN', v: d.FAN ? 'ON' : 'OFF', icon: '🌀' },
        { k: 'MODE', v: d.MODE === '1' ? 'MAN' : 'AUTO', icon: '🤖' },
        { k: 'SGP30', v: d.SGP ? 'Online' : 'Offline', icon: '🔌' },
        { k: 'UP(s)', v: d.UP, icon: '⏱️' }
      ]
    }
  },
  onLoad() {
    this.ble = new BleClient()
    this.ble.onDeviceFound((dev) => {
      const existed = this.devices.find((d) => d.deviceId === dev.deviceId)
      if (existed) return
      const name = dev.name || dev.localName || ''
      if (name.toUpperCase().includes('JDY') || name.length > 0) {
        this.devices.push(dev)
      }
    })
    this.ble.onState((st) => {
      if (st.type === 'adapter') this.connText = st.ok ? '蓝牙已打开' : '蓝牙打开失败'
      if (st.type === 'scan') this.connText = st.scanning ? '扫描中...' : '已停止扫描'
      if (st.type === 'conn') this.connected = !!st.connected
    })
    this.ble.onLine((line) => this.handleLine(line))
    this.loadLocalLogs()
  },
  onUnload() {
    if (this.ble) {
      this.ble.stopScan()
      this.ble.disconnect()
    }
  },
  methods: {
    async openAndScan() {
      try {
        this.devices = []
        await this.ble.openAdapter()
        this.ble.startScan()
      } catch (e) {
        uni.showToast({ title: '蓝牙打开失败', icon: 'none' })
      }
    },
    stopScan() {
      this.ble.stopScan()
    },
    async connectDevice(d) {
      try {
        await this.ble.connect(d.deviceId)
        this.connectedDeviceName = d.name || d.localName || d.deviceId
        this.connText = '已连接'
        this.ble.stopScan()
        this.sendCmd('GET,ALL')
      } catch (e) {
        this.connText = '连接失败'
        uni.showToast({ title: '连接失败', icon: 'none' })
      }
    },
    disconnect() {
      if (this.ble) this.ble.disconnect()
      this.connText = '已断开'
      this.connectedDeviceName = ''
    },
    async sendCmd(cmd) {
      if (!this.connected) {
        uni.showToast({ title: '请先连接设备', icon: 'none' })
        return
      }
      try {
        await this.ble.writeLine(cmd)
      } catch (e) {
        uni.showToast({ title: '发送失败', icon: 'none' })
      }
    },
    async applyConfig() {
      const list = [
        `SET,CO2,${this.cfgEdit.co2}`,
        `SET,TVOC,${this.cfgEdit.tvoc}`,
        `SET,PM25,${this.cfgEdit.pm25}`,
        `SET,MQ135,${this.cfgEdit.mq}`,
        `SET,FANOFF,${this.cfgEdit.fanoff}`
      ]
      for (let i = 0; i < list.length; i++) {
        await this.sendCmd(list[i])
        await new Promise((r) => setTimeout(r, 120))
      }
    },
    clearLocalLogs() {
      this.logs = []
      uni.setStorageSync(LOG_KEY, this.logs)
    },
    clearDeviceLogs() {
      this.sendCmd('CLR,LOG')
    },
    loadLocalLogs() {
      const local = uni.getStorageSync(LOG_KEY)
      if (Array.isArray(local)) this.logs = local
    },
    pushLog(text) {
      this.logs.unshift({ time: nowText(), msg: text })
      if (this.logs.length > 200) this.logs = this.logs.slice(0, 200)
      uni.setStorageSync(LOG_KEY, this.logs)
    },
    applyCfgFromKv(kv) {
      if (kv.CO2_TH) this.cfgEdit.co2 = kv.CO2_TH
      if (kv.TVOC_TH) this.cfgEdit.tvoc = kv.TVOC_TH
      if (kv.PM25_TH) this.cfgEdit.pm25 = kv.PM25_TH
      if (kv.MQ_TH) this.cfgEdit.mq = kv.MQ_TH
      if (kv.FANOFF) this.cfgEdit.fanoff = kv.FANOFF
    },
    applyDataFromKv(kv) {
      const keys = Object.keys(this.data)
      keys.forEach((k) => {
        if (kv[k] !== undefined) this.$set(this.data, k, kv[k])
      })
    },
    handleLine(line) {
      if (line.startsWith('$DATA,')) {
        const kv = parseKvLine(line)
        this.applyDataFromKv(kv)
        return
      }
      if (line.startsWith('$CFG,')) {
        const kv = parseKvLine(line)
        this.applyCfgFromKv(kv)
        return
      }
      if (line.startsWith('$EVT,')) {
        this.pushLog(line)
        return
      }
      if (line.startsWith('$LOG,COUNT=')) {
        this.tempLogBatch = []
        return
      }
      if (line.startsWith('$LOG,')) {
        this.tempLogBatch.push(line)
        return
      }
      if (line === '$ENDLOG') {
        this.tempLogBatch.forEach((l) => this.pushLog(l))
        this.tempLogBatch = []
        return
      }
      if (line.startsWith('$ACK,')) {
        this.lastAck = line
      }
    }
  }
}
</script>

<style>
/* 全局页面配置 */
page {
  background-color: #f4f6f9;
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 主体内容滚动区 (留出底部 TabBar 的高度) */
.main-content {
  flex: 1;
  height: calc(100vh - 120rpx); /* 减去底部导航栏的高度 */
  overflow-y: auto;
}

.page-section {
  padding: 24rpx;
  padding-bottom: 40rpx;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10rpx); }
  to { opacity: 1; transform: translateY(0); }
}

/* 卡片样式 */
.card {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 8rpx 24rpx rgba(149, 157, 165, 0.1);
}

/* 标题样式 */
.title {
  font-size: 32rpx;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title::before {
  content: "";
  display: inline-block;
  width: 8rpx;
  height: 32rpx;
  background: #3b82f6;
  border-radius: 8rpx;
  margin-right: 16rpx;
}

/* 按钮行 */
.row {
  display: flex;
  gap: 16rpx;
  margin-bottom: 16rpx;
}
.row .btn {
  flex: 1;
  margin: 0;
  font-size: 26rpx;
  border-radius: 12rpx;
}
.mt-10 { margin-top: 10rpx; }
.mt-20 { margin-top: 20rpx; }

/* 文本状态与设备名 */
.sub {
  color: #64748b;
  font-size: 26rpx;
}
.status-badge {
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
  font-size: 22rpx;
  font-weight: 600;
}
.status-badge.connected { background: #dcfce7; color: #16a34a; }
.status-badge.disconnected { background: #e2e8f0; color: #64748b; }
.device-name-highlight { color: #0f172a; font-weight: 600; }
.ack-text { color: #3b82f6; font-family: monospace; }

/* 扫描列表 */
.list { margin-top: 20rpx; }
.list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1rpx solid #e2e8f0;
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 16rpx;
}
.item-info { flex: 1; }
.name { font-size: 28rpx; font-weight: 600; color: #1e293b; }
.id { color: #94a3b8; font-size: 22rpx; margin-top: 6rpx; }
.connect-btn { margin: 0; border-radius: 10rpx; }

/* 数据网格 (仪表盘风格 + 图标) */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16rpx;
}
.kv {
  background: #f8fafc;
  border-radius: 16rpx;
  padding: 24rpx 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.kv-header {
  display: flex;
  align-items: center;
  margin-bottom: 8rpx;
}
.kv-header .icon {
  font-size: 24rpx;
  margin-right: 6rpx;
}
.kv-header .k {
  color: #64748b;
  font-size: 22rpx;
}
.kv .v {
  font-size: 32rpx;
  font-weight: 700;
  color: #0f172a;
}
.kv.alert { background: #fef2f2; border: 1rpx solid #fecaca; }
.kv.alert .v { color: #ef4444; }

/* 表单输入 */
.form-group {
  background: #f8fafc;
  border-radius: 16rpx;
  padding: 0 20rpx;
}
.formRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 0;
  border-bottom: 1rpx solid #e2e8f0;
}
.formRow:last-child { border-bottom: none; }
.label { font-size: 28rpx; color: #475569; }
.ipt {
  flex: 1;
  text-align: right;
  font-size: 30rpx;
  color: #0f172a;
  font-weight: 500;
  padding: 0 10rpx;
}

/* 终端风格日志 */
.terminal {
  margin-top: 20rpx;
  background: #1e293b;
  border-radius: 16rpx;
  padding: 20rpx;
  height: 600rpx; /* 增加日志区域高度 */
  overflow-y: auto;
}
.log {
  font-family: "Courier New", Courier, monospace;
  font-size: 22rpx;
  line-height: 1.5;
  margin-bottom: 8rpx;
  word-break: break-all;
}
.log-time { color: #64748b; margin-right: 12rpx; }
.log-msg { color: #10b981; }
.empty-state { text-align: center; color: #94a3b8; font-size: 26rpx; padding: 40rpx 0; }

/* ================= 自定义底部 TabBar ================= */
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110rpx;
  background-color: #ffffff;
  display: flex;
  border-top: 1rpx solid #e2e8f0;
  padding-bottom: env(safe-area-inset-bottom); /* 适配全面屏底部小黑条 */
  z-index: 999;
}
.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #94a3b8;
  transition: color 0.2s;
}
.tab-icon {
  font-size: 40rpx;
  margin-bottom: 4rpx;
}
.tab-text {
  font-size: 22rpx;
  font-weight: 500;
}
/* 选中态样式 */
.tab-item.active {
  color: #3b82f6;
}
.tab-item.active .tab-icon {
  transform: scale(1.1); /* 点击放大一点点图标 */
  transition: transform 0.2s;
}
</style>