<template lang="jade">
  .page-service-order-details
    flow.order-state-flow
      flow-state(title="已受理" v-bind:is-done="orderState.progress > 0 ? true : false" v-bind:class="orderState.progress === 1 ? 'on' : ''")
      flow-line(v-bind:is-done="orderState > 1 ? true : false")
      flow-state(title="已派单" v-bind:is-done="orderState.progress > 1 ? true : false" v-bind:class="orderState.progress === 2 ? 'on' : ''")
      flow-line(v-bind:is-done="orderState > 2 ? true : false")
      flow-state(title="已预约" v-bind:is-done="orderState.progress > 2 ? true : false" v-bind:class="orderState.progress === 3 ? 'on' : ''")
      flow-line(v-bind:is-done="orderState > 3 ? true : false")
      flow-state(title="已上门" v-bind:is-done="orderState.progress > 3 ? true : false" v-bind:class="orderState.progress === 4 ? 'on' : ''")
      flow-line(v-bind:is-done="orderState > 4 ? true : false")
      flow-state(title="服务完成" v-bind:is-done="orderState.progress > 4 ? true : false" v-bind:class="orderState.progress === 5 ? 'on' : ''")
      flow-line(v-bind:is-done="orderState > 5 ? true : false")
      flow-state(title="服务评价" v-bind:is-done="orderState.progress > 5 ? true : false" v-bind:class="orderState.progress === 6 ? 'on' : ''")

    group
      cell-box(is-link)
        div.color-blue(v-text="checkProgress(orderState.progress)")
        div(v-text="orderState.action")
        div(v-text="orderState.time")

    slidedown.service-order-info(title="服务单信息" show=false)
      img(slot="icon" src="../assets/service_order_info.png")
      div(slot="default")
        .service-type {{ serviceOrderInfo.serviceType }}

    slidedown.user-info(title="用户信息" show=false)
      img(slot="icon" src="../assets/user_info.png")
      div(slot="default")

    slidedown.user-info(title="工程师信息" show=false)
      img(slot="icon" src="../assets/engineer_info.png")
      div(slot="default")

    slidedown.user-info(title="上门服务时间" show=false)
      img(slot="icon" src="../assets/todoor_service_time.png")
      div(slot="default")

    slidedown.user-info(title="服务信息" show=false)
      img(slot="icon" src="../assets/service_info.png")
      div(slot="default")

    slidedown.user-info(title="服务评价" show=false)
      img(slot="icon" src="../assets/service_evaluate.png")
      div(slot="default")
        rater.mb-8
        flexbox.mb-8
          flexbox-item
            x-button.f-12 XXX
          flexbox-item
            x-button.f-12 XXX
          flexbox-item
            x-button.f-12 XXX
        div 这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论

    confirm(v-on:confirmStateC2F="setConfirmState" v-bind:showConfirm="messageAlert.show" v-bind:confirmTitle="messageAlert.title" v-bind:confirmText="messageAlert.confirm" v-bind:cancelText="messageAlert.cancel")
      div(slot="default")
        img(src="../assets/checked.png", alt="")
        div 本次服务已完成，请您进行确认!
</template>

<script>
  import { Group, Cell, Flow, FlowState, FlowLine, CellBox, Rater, XButton, Flexbox, FlexboxItem } from 'vux'
  import Confirm from '@/components/Confirm'
  import Slidedown from '@/components/Slidedown'
  export default {
    name: 'notFound',
    components: {
      Group,
      Cell,
      Flow,
      FlowState,
      FlowLine,
      CellBox,
      Slidedown,
      Confirm,
      Rater,
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        orderFlow: ['已提交', '已受理', '已派单', '已预约', '已上门', '服务完成', '服务评价'],
        orderState: {
          progress: 0,
          action: '已成功提交服务单',
          time: '2017-07-01 11:22:33'
        },
        serviceOrderInfo: {
          serviceType: '安装'
        },
        messageAlert: {
          show: true,
          title: '消息提醒',
          confirm: '服务完成',
          cancel: '服务未完成'
        }
      }
    },
    methods: {
      checkProgress (msg) {
        return this.orderFlow[msg]
      },
      setConfirmState (msg) {
        this.messageAlert.show = msg
      }
    }
  }
</script>

<style lang="scss">
</style>
