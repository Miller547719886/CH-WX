<template lang="jade">
  .page-page-view
    group(title="组件预览列表")
      .p-10
    group(title="页面预览列表")
      .p-10
        router-link(to="/selfServiceInstall")
          XButton.mt-4 自助报装 BY XIONG
        router-link(to="/selfServiceRepair")
          XButton.mt-4 自助报修 BY XIONG
        router-link(to="/addServiceAddr")
          XButton.mt-4 添加服务地址 BY XIONG
        router-link(to="/editAddress")
          XButton.mt-4 编辑地址 BY XIONG
        router-link(to="/managePersonalInfo")
          XButton.mt-4 管理个人信息 BY XIONG
        router-link(to="/selectServiceAddress")
          XButton.mt-4 选择服务地址 BY SUN
        router-link(to="/individualism")
          XButton.mt-4 个人中心 BY SUN
        router-link(to="/myServiceOrder")
          XButton.mt-4 我的服务单 BY XIONG
        router-link(to="/serviceEvaluation")
          XButton.mt-4 服务评价 BY SUN
        router-link(to="/serviceOrderDetails")
          XButton.mt-4 服务单详情 BY XIONG
        router-link(to="/serviceOrderState")
          XButton.mt-4 服务单状态 BY XIONG
        router-link(to="/serviceCompletion")
          XButton.mt-4 服务完工确认 BY SUN
        router-link(to="/serviceAddrManage")
          XButton.mt-4 服务地址管理 BY XIONG
</template>

<script>
  import { Group, Cell, XButton } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XButton
    },
    name: 'pageView',
    data () {
      return {
        title: '标题',
        show: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">

</style>
