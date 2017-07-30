<template lang="jade">
  .page-service-evaluation
    div.box-top.ta-c
      p 请对本次服务进行打分
      group
        cell
          rater(v-model="data1" slot="value" v-bind:font-size=35 active-color="#f58796")
      flexbox
        flexbox-item
          div.flex-demo(v-bind:class="activated === 1 ? 'current' : ''" v-on:click="switchActive(1)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 2 ? 'current' : ''" v-on:click="switchActive(2)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 3 ? 'current' : ''" v-on:click="switchActive(3)") XXX
      flexbox
        flexbox-item
          div.flex-demo(v-bind:class="activated === 4 ? 'current' : ''" v-on:click="switchActive(4)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 5 ? 'current' : ''" v-on:click="switchActive(5)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 6 ? 'current' : ''" v-on:click="switchActive(6)") XXX
      flexbox
        flexbox-item
          div.flex-demo(v-bind:class="activated === 7 ? 'current' : ''" v-on:click="switchActive(7)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 8 ? 'current' : ''" v-on:click="switchActive(8)") XXX
        flexbox-item
          div.flex-demo(v-bind:class="activated === 9 ? 'current' : ''" v-on:click="switchActive(9)") XXX
    div.box-bottom
      group
        x-textarea(title="评价" placeholder="请输入您的评价" v-bind:show-counter="false" v-bind:rows="3")
    button.p-fixed-b.btn-cover.btn-blue-gradient 提交
</template>

<script>
  import { Rater, Group, Cell, Flexbox, FlexboxItem, XTextarea, XButton } from 'vux'

  export default {
    components: {
      Rater,
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      XTextarea,
      XButton
    },
    data () {
      return {
        data1: 0,
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

<style lang="scss">
  .page-service-evaluation{
    background-color: #fff;
    margin-top: .3125rem;
    .box-top{
      padding:.9375rem .625rem;
      border-bottom:1px solid #e6e6e6;
        p{
          color:#2c2b33;
          font-size:15px;
        }
        .weui-cells:before,
        .weui-cells:after,
        .weui-cell__hd,
        .vux-cell-bd{
          display: none;
        }
        .weui-cell{
          -webkit-justify-content: center;
          justify-content: center;
        }
        .vux-flexbox{
          margin-top:.625rem;
          .flex-demo {
            text-align: center;
            font-size:12px;
            color: #2c2b33;
            background-color:transparent;
            -webkit-border-radius:.25rem;
            border-radius:.25rem;
            background-clip: padding-box;
            border:1px solid #cccccc;
            height:1.875rem;
            line-height: 1.875rem;
          }
          .flex-demo.current{
            background-color: #019dd9;
            border:1px solid #019dd9;
            color:#fff;
          }
        }
    }
    .box-bottom{
      padding:.9375rem .625rem;
      .weui-cells:before,
      .weui-cells:after{
        display: none;
      }
      .vux-x-textarea.weui-cell{
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .weui-label{
        color:#666;
      }
      .weui-textarea{
        background-color: #f2f2f2;
        -webkit-border-radius:.25rem;
        border-radius:.25rem;
        padding: .25rem;
      }
    }
  }
  #app .page-ServiceEvaluation .weui-cells.vux-no-group-title{
    margin-top: 0;
  }
  #app .page-ServiceEvaluation .weui-cell{
    padding: 0;
    height: auto;
  }




  textarea::-webkit-input-placeholder {text-align: left;}
</style>
