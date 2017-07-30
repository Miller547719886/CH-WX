import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  titleName: ''
}

// getters
const getters = {
  checkoutTitle: state => {
    return ('页面-' + state.titleName)
  }
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
  [types.CHANGE_TITLE] (state, t) {
    state.titleName = t
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
