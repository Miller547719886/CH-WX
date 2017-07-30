import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  hideOnBlur: false,
  showPop: false
}

// getters
const getters = {
  // checkoutTitle: state => {
  // }
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
  [types.SET_MASK_CLOSE] (state, t) {
    state.hideOnBlur = t
  },
  [types.SHOW_POPBINDPHONE] (state, t) {
    state.showPop = t
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
