<template lang="jade">
  .page-manage-personal-info
    group
      cell(title="头像" is-link)
        img.user-avatar(slot="default" src="../assets/user_avatar.png")
    group
      cell.cell-value-grey(v-bind:field-required="order[0].required" title="姓名" v-bind:value="order[0].data")
      cell.cell-value-grey(v-bind:field-required="order[1].required" title="手机号" v-bind:value="order[1].data")
    group
      selector.cell-value-red(title="性别" v-bind:options="optionSex" v-model="selectSex" placeholder="请选择")
      datetime(v-model="birthday" title="出生年月" placeholder="请选择")
    button.p-fixed-b.btn-cover.btn-blue-gradient(v-bind:disabled="!canCommit") 保存
    pop-bind-phone(v-bind:popBindPhoneF2C="popBindPhoneState" v-on:popBindPhoneC2F="setPopBindPhoneState")
    //- popProType(v-bind:PopProTypeF2C="popProTypeState" v-on:PopProTypeC2F="setPopProTypeState")

    //- group
    //-   popup(height="200px" @on-first-show="resetScroller" v-model="popShow" )
    //-     scroller(height="100%" lock-x ref="scroller")
    //-       ul.clearfix2
    //-         li(v-for="item in items" @click="changeSelect(item.name)") {{item.name}}
</template>

<script>
  import { XInput, Selector, Popup, Scroller, Group, Cell, Datetime, XButton } from 'vux'
  import PopBindPhone from '@/components/PopBindPhone'
  import PopProType from '@/components/PopProType'
  import { mapState } from 'vuex'
  // import qs from 'qs'

  export default {
    name: 'selfServiceInstall',
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      Popup,
      Scroller,
      XButton,
      Datetime,
      PopBindPhone,
      PopProType
    },
    data () {
      return {
        popBindPhoneState: false,
        popProTypeState: false,
        optionSex: ['男', '女'],
        selectSex: '',
        birthday: '',
        order: [
          {
            name: 'name',
            required: false,
            data: 'XXX'
          },
          {
            name: 'tel',
            required: false,
            data: '13910001000'
          },
          {
            name: 'region',
            required: true,
            data: '四川省/绵阳市/涪城区/高新街道'
          },
          {
            name: 'region',
            required: true,
            data: '飞云大道东段17号'
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
        let required = this.order.filter((i) => {
          return i.required === true
        })
        let can = required.every((i) => {
          return i.data.length !== 0
        })
        let ordered = this.showOrder
          ? can
          : true
        return ordered
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
