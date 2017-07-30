/**
 * axios-http配置
 */

import Vue from 'Vue'
// import store from '@/store/store'
// import * as types from '@/store/types'
// import router from '@/router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import qs from 'qs'

Vue.use(VueAxios, axios)

var instance = axios.create({
  // 设置默认timeout
  timeout: 5000,
  // 设置允许跨域设置
  withCredentials: true,
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

// 设置默认请求url
// if (process.env.NODE_ENV === 'production') {
//   instance.defaults.baseURL = 'www.kydsfc.com'
// } else {
instance.defaults.baseURL = 'http://wx.kydsfc.com'
// }

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 如果不想要这个拦截器也简单，可以删除拦截器
// var myInterceptor = axios.interceptors.request.use(function () { /*...*/ })
// axios.interceptors.request.eject(myInterceptor)

export default instance
