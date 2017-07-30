<template lang="jade">
  .page-login
    img(src="../assets/logo.png")
    div
      group
        x-input(title="title" value="" placeholder="帐号" v-model="user.name" autocomplete="off")
          img(slot="label" style="padding-right:10px;display:block;" src="../assets/zh.png" width="24" height="24")
        x-input(title="title" type="password" placeholder="密码" show-clear=false v-model="user.password" autocomplete="off")
          img(slot="label" style="padding-right:10px;display:block;" src="../assets/mm.png" width="24" height="24")
        div(style="padding: 15px")
          x-button(@click.native="userLogin" type="primary") 登录
      toast(v-model="showPositionValue" type="text" v-bind:time="800" width="12rem" is-show-mask  v-bind:position="position") {{checkError}}
</template>

<script>
import { Group, Cell, XInput, XButton, Toast } from 'vux'
// import { mapActions } from 'vuex'
import axios from '@/http/api'
// import Qs from 'qs'
// import * as types from '@/store/types'

export default {
  name: 'login',
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    Toast
  },
  data () {
    return {
      user: {
        name: '', // 用户名
        password: '' // 密码
      },
      position: 'default',
      showPositionValue: false,
      errorType: 1,
      alert: ''
    }
  },
  mounted () {
    // this.$store.commit(types.TITLE, 'Login')
  },
  methods: {
    userLogin () {
      if (this.user.name !== '' && this.user.password !== '') {
        // {username: 13476139996, password:111111, deviceId:123, registrationId, 123}
        // this.$store.commit(types.LOGIN, this.user)
        let LoginData = {
          username: this.user.name,
          password: this.user.password/* , */
          // deviceId: 123,
          // registrationId: 123
        }
        axios.post('/login', JSON.stringify(LoginData))
          .then(
            (res) => {
              console.log(res)
              if (res.data.code === 200) {
                this.errorType = 3
                this.$router.push({ name: 'pageView', query: { id: this.user.name } })
              } else {
                this.errorType = 2
                this.showPosition('middle')
              }
            }
          )
          .catch(
            (err) => {
              console.log(err)
              this.errorType = 4
              this.showPosition('middle')
            }
          )
      } else { // 我们判断下账号密码是否为空
        this.errorType = 1
        this.showPosition('middle')
      }
    },
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    }
  },
  computed: {
    checkError () {
      switch (this.errorType) {
        case 1:
          return '用户名和密码不能为空'
        case 2:
          return '错误的用户名或密码'
        case 3:
          return '登录成功'
        case 4:
          return '网络异常'
        default:
          return ''
      }
    }
  },
  watch: {
    errorType: {
      handler (val) {
        // TODO
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
