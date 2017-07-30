<template lang="jade">
  //- 公用绑定手机号组件
  popup.pop-bind-phone(v-model="showPop" v-bind:hide-on-blur="hideOnBlur")
    group(title="请绑定您的手机号")
      x-input.field-required(title="手机号" value="" placeholder="请输入您的手机号码" v-model="phone.tel" autocomplete="off")
      x-input.field-required.weui-cell_vcode(title="附加码" value="" placeholder="请输入附加码" v-model="phone.add" autocomplete="off")
        img(slot="right" class="weui-vcode-img" src="../assets/verify_code.png")
      x-input.field-required.weui-vcode(title="验证码" value="" placeholder="请输入短信验证码" v-model="phone.verify" autocomplete="off")
        x-button.btn-rounder.ml-8.bg-blue(slot="right" type="primary" mini) 获取验证码
      button.btn-cover.btn-blue-gradient.f-15 绑定手机号
</template>

<script>
  // import bus from '@/store/bus'
  import { Group, Popup, XInput, XButton } from 'vux'
  import * as types from '@/store/mutation-types'
  import { mapState } from 'vuex'
  export default {
    name: 'popBindPhone',
    components: {
      Group,
      Popup,
      XInput,
      XButton
    },
    data () {
      return {
        phone: {
          tel: '',
          add: '',
          verify: ''
        }
      }
    },
    beforeUpdate () {
      console.log(this.hideOnBlur, this.showPop)
    },
    mounted () {
    },
    computed: {
      ...mapState({
        hideOnBlur: state => state.popBindPhone.hideOnBlur,
        _showPop: state => state.popBindPhone.showPop
      }),
      showPop: {
        get () {
          return this._showPop
        },
        set (val) {
          this.$store.commit(types.SHOW_POPBINDPHONE, false)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
