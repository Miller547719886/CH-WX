// import store from '@/store/store'
import axios from '@/http/api'
// import qs from 'qs'
const tool = {
  /**
   * get请求
   * @param url
   * @param cb
   * @returns {*}
   */
  get (url, cb) {
    axios.get(url)
      .then(
        (res) => {
          if (res.status === 200) {
            let result = res.data
            if (result.code === 0) {
              // TODO 业务逻辑
              let _data = result.data
              cb(_data)
            } else {
              // TODO 后台异常
              console.log(result.message)
            }
          }
        }
      )
      .catch(
        (error) => {
          // TODO 系统繁忙
          console.log(error)
        }
      )
  },
  /**
   * get请求
   * @param url
   * @param param
   * @param cb
   * @returns {*}
   */
  getParam (url, params, cb) {
    axios.get(url, { params })
      .then(
        (res) => {
          if (res.status === 200) {
            let result = res.data
            if (result.code === 0) {
              // TODO 业务逻辑
              let _data = result.data
              cb(_data)
            } else {
              // TODO 后台异常
              console.log(result.message)
            }
          }
        }
      )
      .catch(
        (error) => {
          // TODO 系统繁忙
          console.log(error)
        }
      )
  },
  /**
   * post请求
   * @param url
   * @param cb
   * @returns {*}
   */
  post (url, cb) {
    axios.post(url)
      .then(
        (res) => {
          if (res.status === 200) {
            let result = res.data
            if (result.code === 0) {
              // TODO 业务逻辑
              let _data = result.data
              cb(_data)
            } else {
              // TODO 后台异常
              console.log(result.message)
            }
          }
        }
      )
      .catch(
        (error) => {
          // TODO 系统繁忙
          console.log(error)
        }
      )
  },
  /**
   * 深度复制1
   * @param obj
   * @returns {*}
   */
  cloneObj (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  /**
   * 深度复制2
   * @param obj
   * @returns {*}
   */
  cloneObject (obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        var newArr = []
        for (var i = 0; i < obj.length; i++) newArr.push(obj[i])
        return newArr
      } else {
        var newObj = {}
        for (var key in obj) {
          newObj[key] = this.cloneObject(obj[key])
        }
        return newObj
      }
    } else {
      return obj
    }
  },
  /**
   * json转string
   * @param json
   * @returns {*}
   */
  jsonToStr (json) {
    if (typeof json === 'object') {
      try {
        return JSON && JSON.stringify(json)
      } catch (e) {
        return null
      }
    } else {
      return json
    }
  },
  /**
   * string转json
   * @param str
   * @returns {*}
   */
  strToJson (str) {
    if (typeof str === 'string') {
      try {
        return JSON && JSON.parse(str)
      } catch (e) {
        return null
      }
    } else {
      return str
    }
  },
  /**
   * 设置缓存
   * @param key
   * @param value
   */
  setStorage (key, value) {
    if (arguments.length === 2) {
      let v = value
      if (typeof v === 'object') {
        v = JSON.stringify(v)
        v = 'obj-' + v
      } else {
        v = 'str-' + v
      }
      localStorage.setItem(key, v)
    }
  },
  /**
   * 根据key取得缓存
   * @param key
   */
  getStorage (key) {
    let v = localStorage.getItem(key)
    if (!v) {
      return
    }
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4)
      return JSON.parse(v)
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4)
    }
  },
  /**
   * 根据key删除缓存
   * @param key
   */
  rmStorage (key) {
    localStorage.removeItem(key)
  },
  /**
   * 清空缓存
   */
  clearStorage () {
    localStorage.clear()
  },
  /**
   * 设置缓存
   * @param key
   * @param value
   */
  setSessionStorage (key, value) {
    if (arguments.length === 2) {
      let v = value
      if (typeof v === 'object') {
        v = JSON.stringify(v)
        v = 'obj-' + v
      } else {
        v = 'str-' + v
      }
      sessionStorage.setItem(key, v)
    }
  },
  /**
   * 根据key取得缓存
   * @param key
   */
  getSessionStorage (key) {
    let v = sessionStorage.getItem(key)
    if (!v) {
      return
    }
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4)
      return JSON.parse(v)
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4)
    }
  },
  /**
   * 根据key删除缓存
   * @param key
   */
  rmSessionStorage (key) {
    sessionStorage.removeItem(key)
  },
  /**
   * 清空缓存
   */
  clearSessionStorage () {
    sessionStorage.clear()
  }
}

export default tool
