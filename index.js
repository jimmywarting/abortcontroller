const EventEmitter = require('events')

class AbortSignal extends EventEmitter {
  constructor() {
    super()
    this.aborted = false
  }

  toString() {
    return '[object AbortSignal]'
  }

  get [Symbol.toStringTag]() {
    return 'AbortSignal'
  }
}

module.exports = class AbortController {
  constructor() {
    this.signal = new AbortSignal()
  }

  abort() {
    this.signal.aborted = true
    this.signal.emit('abort')
  }

  toString() {
    return '[object AbortController]'
  }

  get [Symbol.toStringTag]() {
    return 'AbortController'
  }
}
