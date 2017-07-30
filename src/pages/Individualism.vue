<template lang="jade">
  .page-individualism
    div.list-top.ta-c
      div.head
        img(src="../assets/head_img.png")
      p.f-16.color-white.the1 XXXXXXX
      p.f-14.color-white.the2 139****1000
    panel(v-bind:list="list" v-bind:type="type")
</template>

<script>
  import { Panel, Group } from 'vux'
  export default {
    components: {
      Panel,
      Group
    },
    data () {
      return {
        type: '3',
        list: [
          {
            src: 'static/images/icon01.png',
            title: '我的服务单',
            desc: '',
            url: '/myServiceOrder'
          },
          {
            src: 'static/images/icon02.png',
            title: '服务地址管理',
            desc: '',
            url: '/serviceAddrManage'
          },
          {
            src: 'static/images/icon03.png',
            title: '个人信息管理',
            desc: '',
            url: '/managePersonalInfo'
          }
        ]
      }
    }
}
</script>

<style lang="scss">
  .page-individualism{
    background-image:url(../assets/individualism_bg.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    .list-top{
      padding:1.25rem 0 0;
      .head{
        width:3.5625rem;
        height:3.5625rem;
        -webkit-border-radius:50%;
        border-radius:50%;
        border:.1875rem solid #fff;
        display:inline-block;
      }
    }
    .weui-panel{
      background-color: rgba(255,255,255,0.5);
    }
    .weui-panel:after{
      border-bottom: 1px solid #fff;
    }
    .weui-cells{
      background-color: initial;
    }
    .weui-cells:after{
      border-bottom: 1px solid #fff;
    }
    .weui-cell:before {
      border-top: 1px solid #fff;
    }
    .weui-panel .weui-cell:first-child:before{
      display: none;
    }
    .weui-cell_access .weui-cell__ft:after{
      border-color:#c3c3c3;
    }


  }

</style>
