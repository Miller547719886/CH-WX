import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import * as types from '@/store/mutation-types'
import tool from '@/utils/tool'
import axios from '@/http/api'

import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import AxiosMock from '@/pages/AxiosMock'
import PageView from '@/pages/PageView'
import SelectServiceAddress from '@/pages/SelectServiceAddress'
import Individualism from '@/pages/Individualism'
import ServiceEvaluation from '@/pages/ServiceEvaluation'
import SelfServiceInstall from '@/pages/selfServiceInstall'
import SelfServiceRepair from '@/pages/selfServiceRepair'
import AddServiceAddr from '@/pages/AddServiceAddr'
import EditAddress from '@/pages/EditAddress'
import ManagePersonalInfo from '@/pages/ManagePersonalInfo'
import GetOpenId from '@/pages/GetOpenId'
import MyServiceOrder from '@/pages/MyServiceOrder'
import ServiceOrderDetails from '@/pages/ServiceOrderDetails'
import ServiceOrderState from '@/pages/ServiceOrderState'
import ServiceCompletion from '@/pages/ServiceCompletion'
import ServiceAddrManage from '@/pages/ServiceAddrManage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'pageView',
    component: PageView,
    meta: {
      title: '长虹页面预览'
    }
  },
  {
    path: '/axiosMock',
    name: 'axiosMock',
    component: AxiosMock,
    meta: {
      title: '模拟数据请求'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/selfServiceInstall',
    name: 'selfServiceInstall',
    component: SelfServiceInstall,
    meta: {
      title: '自助报装'
    }
  },
  {
    path: '/selfServiceRepair',
    name: 'selfServiceRepair',
    component: SelfServiceRepair,
    meta: {
      title: '自助报修'
    }
  },
  {
    path: '/addServiceAddr',
    name: 'addServiceAddr',
    component: AddServiceAddr,
    meta: {
      title: '新建服务地址'
    }
  },
  {
    path: '/editAddress',
    name: 'editAddress',
    component: EditAddress,
    meta: {
      title: '编辑地址'
    }
  },
  {
    path: '/managePersonalInfo',
    name: 'managePersonalInfo',
    component: ManagePersonalInfo,
    meta: {
      title: '管理个人信息'
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '/selectServiceAddress',
    name: 'selectServiceAddress',
    component: SelectServiceAddress,
    meta: {
      title: '选择服务地址'
    }
  },
  {
    path: '/individualism',
    name: 'individualism',
    component: Individualism,
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/serviceEvaluation',
    name: 'serviceEvaluation',
    component: ServiceEvaluation,
    meta: {
      title: '服务评价'
    }
  },
  {
    path: '/getOpenId',
    name: 'getOpenId',
    component: GetOpenId,
    meta: {
      title: '获取用户信息'
    }
  },
  {
    path: '/myServiceOrder',
    name: 'myServiceOrder',
    component: MyServiceOrder,
    meta: {
      title: '我的服务单'
    }
  },
  {
    path: '/serviceOrderDetails',
    name: 'serviceOrderDetails',
    component: ServiceOrderDetails,
    meta: {
      title: '服务单详情'
    }
  },
  {
    path: '/serviceOrderState',
    name: 'serviceOrderState',
    component: ServiceOrderState,
    meta: {
      title: '服务单状态'
    }
  },
  {
    path: '/serviceCompletion',
    name: 'serviceCompletion',
    component: ServiceCompletion,
    meta: {
      title: '服务完工确认'
    }
  },
  {
    path: '/serviceAddrManage',
    name: 'serviceAddrManage',
    component: ServiceAddrManage,
    meta: {
      title: '服务地址管理'
    }
  }
]

// // 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  // mode: 'history',
  routes
})

const ignoreLoginCheckPage = ['selfServiceInstall', 'selfServiceRepair']

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    store.commit(types.CHANGE_TITLE, to.meta.title)
  }
  /* 判断是否微信浏览器 */
  let ua = window.navigator.userAgent.toLowerCase()
  // mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i)) {
    if (ua.match(/MicroMessenger/i).toLocaleString() === 'micromessenger') {
      /* 设置全局状态为微信浏览器 */
      store.commit(types.WECHAT_APPRAISAL, {
        isWechat: true
      })
      // 客户信息缓存
      let customer = tool.getStorage('customer')

      // 未取到客户信息缓存
      if (!customer) {
        let query = to.query
        let appId = null
        if (query && query.appid) {
          appId = query.appid
        }

        // url中有appId,需要获取openId
        let toPageName = to.name
        if (appId && toPageName && toPageName !== 'GetOpenId') {
          axios.get('/sfc/getAuthCodeUrl', {params: { appid: appId, backUrl: toPageName }})
        .then(
          (res) => {
            console.log(res)
            if (res.status === 200) {
              let result = res.data
              if (result.code === 0) {
                let wechatAuthCodeUrl = result.data
                if (wechatAuthCodeUrl) {
                  // console.log(wechatAuthCodeUrl)
                  window.location.href = wechatAuthCodeUrl
                  return
                }
              } else {
                console.log(result)
                next()
              }
            }
          }
        )
        .catch(
          (error) => {
            console.log(error)
            next()
          }
        )
          // window.location.href = 'http://www.baidu.com'
          return
        }
        next()
      }
      store.commit(types.WECHAT_APPRAISAL, true)
    }
  } else {
    /* 设置全局状态为非微信浏览器 */
    store.commit(types.WECHAT_APPRAISAL, false)
  }
  /* 设置绑定手机弹窗相关状态 */
  store.commit(types.SHOW_POPBINDPHONE, false)
  if (ignoreLoginCheckPage.indexOf(to.name) >= 0) {
    store.commit(types.SET_MASK_CLOSE, true)
  } else {
    store.commit(types.SET_MASK_CLOSE, false)
  }
  next()
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
