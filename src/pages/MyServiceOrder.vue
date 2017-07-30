<template lang="jade">
  .page-my-service-order
    group.order-list-item(v-for="(item, index) in listData" v-bind:key="item.orderNumber")
      cell.title.cell-40.border-b-1(v-bind:title="item.orderNumber" v-bind:value="item.orderDate")
      div.content
        .flex(slot="default")
          .flex(style="width:100%;justify-content:flex-start")
            .type
              //- img(v-bind:src="proType(item.type)")
              img(src="../assets/type_fridge.png")
            .info
              .install-service(v-text="item.installService")
              .service-address(v-text="item.serviceAddress")
              .reservation(v-text="item.reservation")
          .order-confirm
            .order-confirm-inner(v-if="item.serviceState" v-text="item.orderConfirmed ? '服务评价' : '确认完工'")
      cell.footer.cell-40(v-bind:class="item.serviceState ? 'color-red' : 'color-blue'" v-bind:title="item.serviceState ? '服务完成' : '已派单'" v-bind:value="item.orderDateNow")
</template>

<script>
  import { Group, Cell } from 'vux'
  export default {
    name: 'notFound',
    components: {
      Group,
      Cell
    },
    data () {
      return {
        listData: [
          {
            orderNumber: 378273822,
            orderDate: '2017-06-30',
            type: '冰箱',
            installService: '美菱-洗衣机-不脱水',
            serviceAddress: '四川省绵阳市涪城区飞云大道东段16号',
            reservation: '2017-07-01 11:00',
            serviceState: false,
            orderConfirmed: false,
            orderDateNow: '2017-06-30 15:25'
          },
          {
            orderNumber: 378273822,
            orderDate: '2017-06-30',
            type: '空调',
            installService: '美菱-冰箱',
            serviceAddress: '四川省绵阳市涪城区飞云大道东段16号',
            reservation: '2017-07-01 11:00',
            serviceState: true,
            orderConfirmed: false,
            orderDateNow: '2017-06-30 15:25'
          },
          {
            orderNumber: 378273822,
            orderDate: '2017-06-30',
            type: '电饭煲',
            installService: '美菱-电饭煲-不工作',
            serviceAddress: '四川省绵阳市涪城区飞云大道东段16号',
            reservation: '2017-07-01 11:00',
            serviceState: true,
            orderConfirmed: true,
            orderDateNow: '2017-06-30 15:25'
          }
        ]
      }
    },
    methods: {
      proType (msg) {
        switch (msg) {
          case 'a':
            break
        }
      }
    }
  }
</script>

<style lang="scss">
  .page-my-service-order {
    .order-list-item {
      .title {
        .vux-label {
          &:before {
            content: '服务单号:';
          }
        }
      }

      .footer {
        .vux-label {
          &:before {
            content: '当前状态:';
          }
        }

        .weui-cell__ft {
          color: #333;
        }
      }
    }

    .type {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 70%;
        // max-height: 80%;
      }
    }

    .flex {
      min-height: 5rem;
      justify-content: space-between;
    }

    .info {
      width: 75%;
      padding: .625rem .25rem;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .install-service {
        position: relative;
        padding-left: 4.5em;
        &:before {
          position: absolute;
          left: 0;
          content: '安装服务:';
          color: #6f6c79;
        }
      }

      .service-address {
        position: relative;
        padding-left: 4.5em;
        &:before {
          position: absolute;
          left: 0;
          content: '服务地址:';
          color: #6f6c79;
        }
      }

      .reservation {
        position: relative;
        padding-left: 6.5em;
        &:before {
          position: absolute;
          left: 0;
          content: '预约上门时间:';
          color: #6f6c79;
        }
      }
    }

    .order-confirm {
      width: 2.25rem;

      .order-confirm-inner {
        // height: 100%;
        width: 100%;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        writing-mode: vertical-lr;
        padding: 1rem .5rem;
        background-color: #019dd9;
        color: #fff;
      }
    }
  }
</style>
