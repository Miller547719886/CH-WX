<template lang="jade">
  //- 公用上门时间选择组件
  datetime(v-bind:title="visitTimeTitleF2C" placeholder="请选择" format="YYYY-MM-DD HH" v-bind:start-date="startDate" v-bind:end-date="endDate" v-bind:min-month=7 v-bind:max-month=12 v-bind:min-hour=9 v-bind:max-hour=18 v-model="expectTime" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分")
</template>

<script>
  // import bus from '@/store/bus'
  import { Datetime } from 'vux'
  export default {
    name: 'visitTime',
    components: {
      Datetime
    },
    props: ['visitTimeTitleF2C'],
    data () {
      return {
        startDate: '',
        endDate: '',
        expectT: ''
      }
    },
    beforeRouteEnter (to, from, next) {
    },
    mounted () {
      let startD = new Date()
      let endD = new Date()
      endD.setDate(endD.getDate() + 7)
      this.startDate = startD.getFullYear() + '-' + parseInt(startD.getMonth() + 1) + '-' + startD.getDate()
      this.endDate = endD.getFullYear() + '-' + parseInt(endD.getMonth() + 1) + '-' + endD.getDate()
    },
    computed: {
      expectTime: {
        get () {
          return this.expectT
        },
        set (val) {
          this.$emit('visitTimeC2F', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
