<template lang="jade">
  .page-self-service-repair
    group
      cell.multilevel-selection(v-bind:field-required="order[0].required" title="产品" v-on:click.native="bindPhone" is-link)
        div(slot="default")
          div {{ order[0].data.pro }}
          div {{ order[0].data.fault }}
    group(v-show="showOrder")
      x-input(v-bind:field-required="order[1].required" title="姓名" value="" placeholder="请输入您的姓名" v-model="order[1].data" autocomplete="off")
      x-input(v-bind:field-required="order[2].required" title="手机号" value="" placeholder="请输入您的手机号码" v-model="order[2].data" autocomplete="off")
      cell.multilevel-selection(v-bind:field-required="order[3].required" title="所在地区" value="请选择" v-on:click.native="bindPhone" is-link)
      x-input(v-bind:field-required="order[4].required" title="详细地址" value="" placeholder="请输入详细地址，如XX路XX小区X号" v-model="order[4].data" autocomplete="off")
    group(v-show="!showOrder")
      cell.multiline-cell(field-required title="服务地址")
        div.multiline-cell-inner(slot="default")
          div {{ ordered.data.name }}
          div {{ ordered.data.tel }}
          div {{ ordered.data.address }}
          x-button.btn-rounder.mt-4(slot="right" type="primary" mini)
            i.icon-location2.c-white
            |重新选择地址
    group
      visitTime(v-bind:visitTimeTitleF2C="visitTimeTitle" v-bind:field-required="order[5].required" v-on:visitTimeC2F="getVisitTime")
    group
      x-textarea(title="备注" value="" placeholder="请输入备注说明（最多可输入200个字）" v-bind:field-required="order[6].required" v-model="order[6].data" autocomplete="off")
    button.p-fixed-b.btn-cover.btn-blue-gradient(v-bind:disabled="!canCommit") 提交
    //- popProType(v-bind:PopProTypeF2C="popProTypeState" v-on:PopProTypeC2F="setPopProTypeState")

    //- group
    //-   popup(height="200px" @on-first-show="resetScroller" v-model="popShow" )
    //-     scroller(height="100%" lock-x ref="scroller")
    //-       ul.clearfix2
    //-         li(v-for="item in items" @click="changeSelect(item.name)") {{item.name}}
</template>

<script>
  import { XInput, Selector, Popup, Scroller, Group, Cell, XButton, XTextarea } from 'vux'
  import PopProType from '@/components/PopProType'
  import { mapState } from 'vuex'
  import VisitTime from '@/components/VisitTime'
  // import qs from 'qs'

  export default {
    name: 'selfServiceRepair',
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      Popup,
      Scroller,
      XButton,
      PopProType,
      VisitTime,
      XTextarea
    },
    data () {
      return {
        popProTypeState: false,
        visitTimeTitle: '期望的上门服务时间',
        showOrder: true,
        ordered: {
          data: {
            name: '王超',
            tel: 13910001000,
            address: '四川省绵阳市涪城区飞云大道东段15号'
          }
        },
        order: [
          {
            name: 'proType',
            required: true,
            data: {
              pro: '请选择', /* 美菱 */
              fault: '' /* '不制冷' */
            }
          },
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
            name: 'expectTime',
            required: false,
            data: ''
          },
          {
            name: 'comments',
            required: false,
            data: ''
          }
        ]
      }
    },
    mounted () {
    },
    methods: {
      getVisitTime (msg) {
        this.order[5].data = msg
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
