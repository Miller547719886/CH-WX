// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from '@/http/api'
// import mock from '@/mock/mock'
import tool from '@/utils/tool'

Vue.config.productionTip = false // 关闭生产模式下给出的提示

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios
// 将mock挂载到prototype上，在组件中可以直接访问模拟数据
// Vue.prototype.mock = mock
// 挂载tool
Vue.prototype.tool = tool

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
