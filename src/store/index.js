import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import pageTitle from './modules/pageTitle'
import wechatAppraisal from './modules/wechatAppraisal'
import popBindPhone from './modules/popBindPhone'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    pageTitle,
    wechatAppraisal,
    popBindPhone
  },
  strict: debug
})
