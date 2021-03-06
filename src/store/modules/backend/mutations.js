import Vue from 'vue'
// catch socket emit
export const SOCKET_EMIT = payload => { }

export const SET_SERVER_TIME = (state, time) => {
  if (time) state.serverTime = time
}

export const SET_SYSTEM_SETTINGS = (state, payload) => {
  state.systemSettings = payload
}

export const SET_CLIENT_TIME = (state, time) => {
  state.clientTime = time
}

export const LAST_BLOCKS = (state, blocks) => {
  blocks = blocks || []
  state.lastBlocks = blocks
}

export const LAST_BLOCKS_TIME = (state, time) => {
  if (undefined === time) time = Date.now()
  state.lastBlocksTime = time
}
export const SET_BLOCKS = (state, blocks) => {
  state.blocks = blocks
}

export const LAST_TRANSACTIONS = (state, transactions) => {
  transactions = transactions || []
  state.lastTransactions = transactions
}

export const SET_TRANSACTIONS = (state, transactions) => {
  state.transactions = transactions
}

export const SET_REQUESTING = (state, payload) => {
  let key = payload[0]
  let value = payload[1]
  if (key) {
    Vue.set(state.requesting, key, value)
  }
}

export const SET_RESPONSE = (state, payload) => {
  let key = payload[0]
  let data = payload[1] || {}
  data.sort = data.sort || {}
  if (!state.responses[key]) Vue.set(state.responses, key, {})
  for (let p in data) {
    Vue.set(state.responses[key], p, data[p])
  }
}

export const SET_DB_STATUS = (state, data) => {
  Vue.set(state, 'dbStatus', data)
}

export const SET_PENDING_BLOCKS = (state, blocks) => {
  let list = state.blocks.slice()
  if (list.length) {
    blocks.map(block => {
      if (!list.find(b => b.number === block.number)) {
        Vue.set(state.pendingBlocks, block.number, true)
      }
    })
  }
}

export const CLEAR_PENDING_BLOCKS = (state) => {
  state.pendingBlocks = {}
}
