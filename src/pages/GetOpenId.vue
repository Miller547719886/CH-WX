<template lang="jade">
  div 跳转中...
</template>

<script>
  import axios from '@/http/api'
  import tool from '@/utils/tool'
  export default {
    name: 'GetOpenId',
    data () {
      return {
      }
    },
    mounted () {
      this.getOpenId()
    },
    methods: {
      getOpenId () {
        let query = this.$route.query
        if (!query) {
          alert('获取用户信息失败')
          return
        }
        let backPage = query.backpage
        if (!backPage) {
          alert('获取用户信息失败')
          return
        }
        let appId = query.appid
        let openId = query.openid
        if (!appId) {
          this.$router.push({ name: backPage })
          return
        }

        if (!openId) {
          this.$router.push({ name: backPage })
          return
        }

        // 获取openId的Url
        axios.get('/sfc/getCustomerByOpenId', {params: { appId: appId, openId: openId }})
        .then(
          (res) => {
            if (res.status === 200) {
              let result = res.data
              if (result.code === 0) {
                let customer = result.data
                if (customer) {
                  tool.setStorage('customer', customer)
                  this.$router.push({ name: backPage, query: {appid: appId} })
                } else {
                  this.$router.push({ name: backPage })
                }
              } else {
                this.$router.push({ name: backPage })
              }
            }
          }
        )
        .catch(
          (error) => {
            console.log(error)
            this.$router.push({ name: backPage })
          }
        )
      }
    },
    watch: {
    }
  }
</script>
