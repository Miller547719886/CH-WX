<template lang="jade">
  //- 公用确认弹层
  confirm.confirm(v-model="show" v-bind:title="confirmTitle" v-bind:confirm-text="confirmText" v-bind:cancel-text="cancelText")
    slot(slot="default") 此处为内容
</template>

<script>
  import { Confirm } from 'vux'
  export default {
    name: 'slideown',
    components: {
      Confirm
    },
    props: {
      confirmTitle: {
        type: String,
        default: '此处为标题'
      },
      showConfirm: {
        type: Boolean,
        default: false
      },
      confirmText: {
        type: String,
        default: '确认啦'
      },
      cancelText: {
        type: String,
        default: '取消啦'
      }
    },
    data () {
      return {
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
    },
    mounted () {
      console.log('mounted')
    },
    computed: {
      show: {
        get () {
          return this.showConfirm
        },
        set (val) {
          this.$emit('confirmStateC2F', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
