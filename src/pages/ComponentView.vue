<template lang="jade">
  .page-axios-mock
    //- group
    .p-10
      x-button(mini v-on:click.native="showBindPhone") 绑定手机号
</template>

<script>
  import { XInput, Selector, Popup, Scroller, Group, Cell, XButton } from 'vux'
  import PopBindPhone from '@/components/PopBindPhone'
  import * as types from '@/store/mutation-types'
  export default {
    name: 'axiosMock',
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      Popup,
      Scroller,
      XButton,
      PopBindPhone
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      showBindPhone () {
        this.$store.commit(types.SHOW_POPBINDPHONE, true)
        console.log(this.$store)
      }
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
</style>
