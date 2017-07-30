<template lang="jade">
  div#app.app
    ch-header(v-if="!isWechat")
    transition(v-bind:name="transitionName")
      router-view._view
    pop-bind-phone(v-bind:hideOnBlur="hideOnBlur" v-bind:popBindPhoneF2C="showPop" v-on:popBindPhoneC2F="setPopBindPhoneState")
</template>

<script>
import ChHeader from '@/components/ChHeader'
import PopBindPhone from '@/components/PopBindPhone'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      transitionName: '' // TODO: router跳转动画
    }
  },
  components: {
    ChHeader,
    PopBindPhone
  },
  methods: {
    // 获取弹层子组件的状态
    setPopBindPhoneState (msg) {
      this.showPop = msg
    }
  },
  computed: {
    ...mapState({
      isWechat: state => state.wechatAppraisal.isWechat,
      hideOnBlur: state => state.popBindPhone.hideOnBlur,
      showPop: state => state.popBindPhone.showPop
    })
  },
  beforeUpdate () {
    console.log(this.hideOnBlur, 'App beforeMount')

    // this.maskClose = this.$store.state.popBindPhone.maskClose
  },
  mounted () {
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style lang="scss">
  @import './styles/base.scss';
</style>
