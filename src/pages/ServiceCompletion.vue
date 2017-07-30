<template lang="jade">
  .page-service-completion
    div.list-top
      img(src="../assets/ServiceCompletion_bg.png", alt="")
    ul.list
      li.item 工程师：王超 (13510001000)
      li.item 产品：美菱-冰柜 (单温转换冷柜BC/BD-203DTS(G1608)白色C2)
      li.item 产品编号：12014562358895
      li.item 服务内容：安装
      li.item 收费金额：总计 0 元
      li.item 服务完成时间：2017-07-02 11:22:33
    p.link 如上述信息有误，请点击返回
      span.color-blue(v-on:click="showconfirm1()") 返回
    button.p-fixed-b.btn-cover.btn-blue-gradient(v-on:click="showconfirm2()") 服务完成

    confirm(v-on:confirmStateC2F="setConfirmState" v-bind:showConfirm="messageAlert.show" v-bind:confirmTitle="messageAlert.title" v-bind:confirmText="messageAlert.confirm" v-bind:cancelText="messageAlert.cancel")
      div(slot="default")
        div {{ messageAlert.content }}

</template>

<script>
  import Confirm from '@/components/Confirm'
  export default {
    name: 'notFound',
    components: {
      Confirm
    },
    data () {
      return {
        messageAlert: {
          show: false,
          title: '消息提醒',
          confirm: '确认',
          cancel: '取消',
          content: '此处为内容'
        }
      }
    },
    methods: {
      setConfirmState (msg) {
        this.messageAlert.show = msg
      },
      showconfirm1 () {
        this.messageAlert.show = true
        this.messageAlert.content = '您确认本次服务已完成?'
      },
      showconfirm2 () {
        this.messageAlert.show = true
        this.messageAlert.content = '您确认要返回吗?'
      }
    }
  }
</script>

<style lang="scss">
  .page-service-completion{
    .list-top{
      background-color: #fff;
      min-height: 11.3125rem;
      img{
        width:100%;
      }
    }
    .list{
      background-color: #fff;
      border-bottom:1px solid #e6e6e6;
      .item{
        color:#43404c;
        font-size:12px;
        border-top:1px dashed #d8d8d8;
        padding:.625rem;
        line-height:1.25rem;
        list-style: none;
      }
      .item:first-child{
        border-top:none;
      }
    }
    p.link{
      color:#101010;
      font-size:12px;
      padding:.625rem;
      line-height:1.25rem;
    }
  }
</style>
