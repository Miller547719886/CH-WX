<template lang="jade">
  .page-service-order-state
    group
      .flow-item(v-for="(item, index) in orderState")
        .dot-line(v-bind:class="{ 'on': index === 0, 'noline': index === orderState.length -1 }")
        .flow-item-info
          .state(v-bind:class="{ 'on': index === 0 }") {{ orderFlow[index] }}
          div {{ item.action }}
          div.color-grey {{ item.time }}
</template>

<script>
  import { Group } from 'vux'
  export default {
    name: 'notFound',
    components: {
      Group
    },
    data () {
      return {
        orderFlow: ['已提交', '已受理', '已派单', '已预约', '已上门', '服务完成', '服务评价'],
        orderState: [
          {
            action: '未评价，请您对本次服务进行评价',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '本次安装服务已完成,收费0元',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '工程师已上门',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '工程师将于2017-07-03 11:30上门服务',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '已安排工程师王超为您提供上门服务',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '已成功受理服务单',
            time: '2017-07-01 11:22:33'
          },
          {
            action: '已成功提交服务单',
            time: '2017-07-01 11:22:33'
          }
        ]
      }
    },
    methods: {
      checkProgress (msg) {
        return this.orderFlow[msg]
      }
    }
  }
</script>

<style lang="scss">
  .page-service-order-state {
    .flow-item {
      font-size: 13px;
      padding-left: 1rem;
      height: 5.3125rem;
      display: flex;

      .flow-item-info {
        margin-left: 1rem;
        width: 100%;
        padding-top: .6rem;

        .state {
          display: inline-block;
          position: relative;
          line-height: 25px;
          padding: 0 6px;
          border-radius: 6px;
          background-color: #b8b8b8;
          color: #fff;
          margin-bottom: .5rem;

          &:before {
            content: '';
            position: absolute;
            top: 10px;
            left: -4px;
            border-right: 5px solid #b8b8b8;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
          }

          &.on {
            background-color: #019dd9;

            &:before {
              border-right: 5px solid #019dd9;
            }
          }
        }
      }

      &:not(:last-of-type) {
        .flow-item-info {
          border-bottom: 1px solid #e6e6e6;
        }
      }

      .dot-line {
        position: relative;
        width: 2px;
        top: 1.375rem;
        background-color: #b7b7b7;
        height: 100%;

        &.noline {
          height: 0;
        }

        &.on:after {
          content: '';
          position: absolute;
          right: -4px;
          top: -5px;
          width: 10px;
          height: 10px;
          border-radius: 10px;
          background-color: #019dd9;
          z-index: 2;
        }

        &.on:before {
          content: '';
          position: absolute;
          right: -6px;
          top: -7px;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          background-color: #99d8f0;
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          right: -3px;
          top: -4px;
          width: 8px;
          height: 8px;
          border-radius: 7px;
          background-color: #949494;
        }
      }
    }
  }
</style>
