<template lang="jade">
  .page-add-service-addr
    group
      x-input(v-bind:field-required="addr[0].required" title="姓名" value="" placeholder="请输入您的姓名" v-model="addr[0].data" autocomplete="off")
      x-input(v-bind:field-required="addr[1].required" title="手机号" value="" placeholder="请输入您的手机号码" v-model="addr[1].data" autocomplete="off")
    group
      x-input.weui-cell_vcode(v-bind:field-required="addr[2].required" title="附加码" value="" placeholder="请输入附加码" v-model="addr[2].data" autocomplete="off")
        img(slot="right" class="weui-vcode-img" src="../assets/verify_code.png")
      x-input.weui-vcode(v-bind:field-required="addr[3].required" title="验证码" value="" placeholder="请输入短信验证码" v-model="addr[3].data" autocomplete="off")
        x-button.btn-rounder.ml-8.bg-blue(slot="right" type="primary" mini) 获取验证码
    group
      cell.multilevel-selection(v-bind:field-required="addr[4].required" title="所在地区" value="请选择" v-on:click.native="bindPhone" is-link)
      x-input(v-bind:field-required="addr[5].required" title="详细地址" value="" placeholder="请输入详细地址，如XX路XX小区X号" v-model="addr[5].data" autocomplete="off")
      x-switch(title="设为默认地址" v-bind:field-required="addr[6].required")
    button.p-fixed-b.btn-cover.btn-blue-gradient(v-bind:disabled="!canCommit") 保存
    PopBindPhone(v-bind:popBindPhoneF2C="popBindPhoneState" v-on:popBindPhoneC2F="setPopBindPhoneState")
    //- popProType(v-bind:PopProTypeF2C="popProTypeState" v-on:PopProTypeC2F="setPopProTypeState")

    //- group
    //-   popup(height="200px" @on-first-show="resetScroller" v-model="popShow" )
    //-     scroller(height="100%" lock-x ref="scroller")
    //-       ul.clearfix2
    //-         li(v-for="item in items" @click="changeSelect(item.name)") {{item.name}}
</template>

<script>
  import { XInput, Selector, Group, Cell, XButton, XSwitch } from 'vux'
  import PopBindPhone from '@/components/PopBindPhone'
  import PopProType from '@/components/PopProType'
  import { mapState } from 'vuex'
  import VisitTime from '@/components/VisitTime'
  // import qs from 'qs'

  export default {
    name: 'addServiceAddr',
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      XButton,
      PopBindPhone,
      PopProType,
      VisitTime,
      XSwitch
    },
    data () {
      return {
        popBindPhoneState: false,
        popProTypeState: false,
        addr: [
          {
            name: 'name',
            required: true,
            data: ''
          },
          {
            name: 'tel',
            required: true,
            data: ''
          },
          {
            name: 'add',
            required: true,
            data: ''
          },
          {
            name: 'verify',
            required: true,
            data: ''
          },
          {
            name: 'region',
            required: true,
            data: '湖北-武汉'
          },
          {
            name: 'address',
            required: true,
            data: ''
          },
          {
            name: 'defaultAddr',
            required: false,
            data: ''
          }
        ]
      }
    },
    mounted () {
    },
    methods: {
      // 获取弹层子组件的状态
      setPopBindPhoneState (msg) {
        this.popBindPhoneState = msg
      },
      // 获取弹层子组件的状态
      setPopProTypeState (msg) {
        this.popProTypeState = msg
      },
      bindPhone () {
        this.popBindPhoneState = true
      },
      selectProType () {
        this.popProTypeState = true
      }
    },
    computed: {
      // 判断是否可以提交
      canCommit () {
        let required = this.addr.filter((i) => {
          return i.required === true
        })
        let can = required.every((i) => {
          return i.data.length !== 0
        })
        return can
      },
      ...mapState({
        // showPop: state => state.showPop.showPop
      })
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
</style>
