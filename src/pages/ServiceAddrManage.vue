<template lang="jade">
  .page-service-addr-manage
    group.service-addr
      .addr-info.border-b-1
        div 王超
        div 13910001000
        div 四川省绵阳省涪城区飞云大道东段15号
        div.tag 地址1
      .addr-option.flex.justify-between
        label.set-default-addr.flex
          input(type="checkbox")
          i.icon-radio
          span
        .action.flex
          .edit.flex
            img(src="../assets/edit.png", alt="")
            span 编辑
          .delete.flex
            img(src="../assets/delete.png", alt="")
            span 删除
    group.service-addr
      group.service-addr
      .addr-info.border-b-1
        div 陈林
        div 13910001000
        div 四川省绵阳市涪城区花园南街9号花园社区12号楼1102室
        div.tag 地址1
      .addr-option.flex.justify-between
        label.set-default-addr.flex
          input(type="checkbox")
          i.icon-radio
          span
        .action.flex
          .edit.flex
            img(src="../assets/edit.png", alt="")
            span 编辑
          .delete.flex
            img(src="../assets/delete.png", alt="")
            span 删除
    group.service-addr
      group.service-addr
      .addr-info.border-b-1
        div 陈林
        div 13910001000
        div 四川省绵阳市游仙区绵山路112号
        div.tag 地址1
      .addr-option.flex.justify-between
        label.set-default-addr.flex
          input(type="checkbox")
          i.icon-radio
          span
        .action.flex
          .edit.flex
            img(src="../assets/edit.png", alt="")
            span 编辑
          .delete.flex
            img(src="../assets/delete.png", alt="")
            span 删除
    button.p-fixed-b.btn-cover.btn-blue-gradient 新建服务地址
</template>

<script>
  import { Group } from 'vux'
  export default {
    components: {
      Group
    },
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">
  .page-service-addr-manage {
    .service-addr {
      .addr-info {
        font-size: 12px;
        padding: 10px;
      }

      .addr-option {
        line-height: 40px;
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;

        .set-default-addr {
          input {
            visibility: hidden;
            height: 0;
            width: 0;

            &:checked+i {
              background-image: url(../assets/checked_red.png);
            }

            &:checked~span:after {
              content: "默认地址";
            }
          }

          span:after {
            content: "设为默认地址";
          }

          i {
            display: inline-block;
            margin-top: -3px;
            margin-right: 5px;
            width: 17px;
            height: 17px;
            background-image: url(../assets/circle.png);
          }
        }

        .edit,
        .delete {
          margin-left: 10px;

          img {
            width: 17px;
            height: 17px;
            margin-top: -3px;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
