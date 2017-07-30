<template lang="jade">
  .page-select-service-address
    group(v-bind:class="activated === 1 ? 'current' : ''" v-on:click.native="switchActive(1)")
      div.title 地址1
      div.con
        p 王超
        p 13910001000
        p 四川省绵阳市涪城区飞云大道东段16号
        <icon type="success-circle"></icon>
      div.tag 默认地址

    group(v-bind:class="activated === 2 ? 'current' : ''" v-on:click.native="switchActive(2)")
      div.title 地址2
      div.con
        p 陈林
        p 13822221111
        p 四川省绵阳市涪城区花园南街9号花园社区12号楼1102室
        <icon type="success-circle"></icon>
      div.tag 默认地址

    group(v-bind:class="activated === 3 ? 'current' : ''" v-on:click.native="switchActive(3)")
      div.title 地址3
      div.con
        p 王超
        p 13910001000
        p 四川省绵阳市游仙区绵山路112号1102室
        <icon type="success-circle"></icon>
      div.tag 默认地址

    button.p-fixed-b.btn-cover.btn-blue-gradient
      <x-icon type="ios-plus-outline" size="16"></x-icon>
      |新建服务地址

</template>



<script>
  import { Group, Icon, XButton } from 'vux'
  export default {
    components: {
      Group,
      Icon,
      XButton
    },
    data () {
      return {
        activated: 1
      }
    },
    methods: {
      switchActive (index) {
        this.activated = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .title{
    line-height: 2.5rem;
    border-bottom:.0625rem solid #e6e6e6;
    padding:0 .625rem;
    color:#43404c;
    font-size:13px;
  }
  .con{
    position: relative;
    padding:.625rem;
      p{
        color:#414141;
        font-size:13px;
        line-height: 1.25rem;
        padding-right: 1.25rem;
      }
      i.weui-icon{
        display: none;
      }
  }
  .tag{
    display: none;
  }
  .current{
    .con{
      background-color: #ebf9ff;
        i.weui-icon{
          display: block;
          position: absolute;
          top:50%;
          right:.625rem;
          -webkit-transform: translate(0 , -50%);
          -moz-transform: translate(0 , -50%);
          transform: translate(0 , -50%);
          color:#f46075;
          font-size:16px;
        }
        i.weui-icon:before{
          margin-left: 0;
          margin-right: 0;
        }
    }
    .tag{
      display: block;
    }
  }
  .vux-x-icon {
    fill: #fff;
    vertical-align: middle;
  }
</style>
