import axios from '@/http/api'
import MockAdapter from 'axios-mock-adapter'
import * as mockData from './mockData'

// 在初始化模拟调试器的时候，设置几秒的延迟：响应的延迟
var Mock = new MockAdapter(axios, { delayResponse: 100 })

// 登录验证
Mock.onPost('/login').reply(config => {
  let { username, password } = JSON.parse(config.data)
  return new Promise((resolve, reject) => {
    let user = null
    setTimeout(() => {
      let hasUser = mockData.users.some(u => {
        if (u.username === username && u.password === password) {
          user = JSON.parse(JSON.stringify(u))
          user.password = undefined
          return true
        } else {
          return false
        }
      })

      if (hasUser) {
        resolve([200, { code: 200, msg: '请求成功', user }])
      } else {
        resolve([200, { code: 500, msg: '账号或密码错误' }])
      }
    }, 1000)
  })
})

// 获取mock随机数据
// Mock.onGet('/list').reply(200, mockData.listData)

// 获取mock随机数据（带参数）
// Mock.onGet('/listParam').reply(200, mockData.listParamData)

export default Mock
