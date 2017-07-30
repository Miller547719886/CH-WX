import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  isWechat: true // 默认为微信浏览器
}

// getters
const getters = {
  //
}

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  // }
}

// mutations
const mutations = {
  [types.WECHAT_APPRAISAL] (state, t) {
    state.isWechat = t
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
