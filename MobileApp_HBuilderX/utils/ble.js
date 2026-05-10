function strToBuffer(str) {
  const arr = new Uint8Array(str.length)
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i)
  }
  return arr.buffer
}

function bufferToStr(buffer) {
  const bytes = new Uint8Array(buffer)
  let out = ''
  for (let i = 0; i < bytes.length; i++) {
    out += String.fromCharCode(bytes[i])
  }
  return out
}

export default class BleClient {
  constructor() {
    this.deviceId = ''
    this.serviceId = ''
    this.writeCharId = ''
    this.notifyCharId = ''
    this.lineBuf = ''
    this.listeners = {
      deviceFound: null,
      line: null,
      state: null
    }
  }

  onDeviceFound(cb) {
    this.listeners.deviceFound = cb
  }

  onLine(cb) {
    this.listeners.line = cb
  }

  onState(cb) {
    this.listeners.state = cb
  }

  emitState(payload) {
    if (this.listeners.state) this.listeners.state(payload)
  }

  async openAdapter() {
    return new Promise((resolve, reject) => {
      uni.openBluetoothAdapter({
        success: () => {
          this.emitState({ type: 'adapter', ok: true })
          resolve()
        },
        fail: (err) => {
          this.emitState({ type: 'adapter', ok: false, err })
          reject(err)
        }
      })
    })
  }

  startScan() {
    uni.onBluetoothDeviceFound((res) => {
      const devices = res.devices || []
      devices.forEach((d) => {
        if (this.listeners.deviceFound) this.listeners.deviceFound(d)
      })
    })

    uni.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      success: () => this.emitState({ type: 'scan', scanning: true }),
      fail: (err) => this.emitState({ type: 'scan', scanning: false, err })
    })
  }

  stopScan() {
    uni.stopBluetoothDevicesDiscovery({
      complete: () => this.emitState({ type: 'scan', scanning: false })
    })
  }

  async connect(deviceId) {
    this.deviceId = deviceId
    await this.createConnection()
    await this.pickServiceAndChars()
    await this.enableNotify()
    this.registerNotifyHandler()
    this.emitState({ type: 'conn', connected: true, deviceId })
  }

  createConnection() {
    return new Promise((resolve, reject) => {
      uni.createBLEConnection({
        deviceId: this.deviceId,
        timeout: 10000,
        success: resolve,
        fail: reject
      })
    })
  }

  getServices() {
    return new Promise((resolve, reject) => {
      uni.getBLEDeviceServices({
        deviceId: this.deviceId,
        success: (res) => resolve(res.services || []),
        fail: reject
      })
    })
  }

  getChars(serviceId) {
    return new Promise((resolve, reject) => {
      uni.getBLEDeviceCharacteristics({
        deviceId: this.deviceId,
        serviceId,
        success: (res) => resolve(res.characteristics || []),
        fail: reject
      })
    })
  }

  async pickServiceAndChars() {
    const services = await this.getServices()
    const preferred = services.find((s) => (s.uuid || '').toUpperCase().includes('FFE0'))
    const targetService = preferred || services[0]
    if (!targetService) throw new Error('No BLE service')
    this.serviceId = targetService.uuid

    const chars = await this.getChars(this.serviceId)
    const preferredChar = chars.find((c) => (c.uuid || '').toUpperCase().includes('FFE1'))
    const writeChar = preferredChar || chars.find((c) => c.properties && (c.properties.write || c.properties.writeNoResponse))
    const notifyChar = preferredChar || chars.find((c) => c.properties && (c.properties.notify || c.properties.indicate))

    if (!writeChar || !notifyChar) throw new Error('No writable/notifiable characteristic')
    this.writeCharId = writeChar.uuid
    this.notifyCharId = notifyChar.uuid
  }

  enableNotify() {
    return new Promise((resolve, reject) => {
      uni.notifyBLECharacteristicValueChange({
        deviceId: this.deviceId,
        serviceId: this.serviceId,
        characteristicId: this.notifyCharId,
        state: true,
        success: resolve,
        fail: reject
      })
    })
  }

  registerNotifyHandler() {
    uni.onBLECharacteristicValueChange((res) => {
      if (res.deviceId !== this.deviceId) return
      const chunk = bufferToStr(res.value)
      this.lineBuf += chunk
      let pos = this.lineBuf.indexOf('\n')
      while (pos >= 0) {
        const line = this.lineBuf.slice(0, pos).replace(/\r/g, '').trim()
        this.lineBuf = this.lineBuf.slice(pos + 1)
        if (line && this.listeners.line) this.listeners.line(line)
        pos = this.lineBuf.indexOf('\n')
      }
    })
  }

  writeLine(line) {
    const payload = `${line}\n`
    return new Promise((resolve, reject) => {
      uni.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: this.serviceId,
        characteristicId: this.writeCharId,
        value: strToBuffer(payload),
        success: resolve,
        fail: reject
      })
    })
  }

  disconnect() {
    if (!this.deviceId) return
    uni.closeBLEConnection({
      deviceId: this.deviceId,
      complete: () => {
        this.emitState({ type: 'conn', connected: false, deviceId: this.deviceId })
        this.deviceId = ''
        this.serviceId = ''
        this.writeCharId = ''
        this.notifyCharId = ''
        this.lineBuf = ''
      }
    })
  }
}
