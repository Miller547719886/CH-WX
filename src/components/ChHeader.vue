<template lang="jade">
  x-header(v-bind:right-options="{showMore: true}" @on-click-more="showMenus = true") {{ titleName }}
</template>

<script>
  import { XHeader } from 'vux'
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'chHeader',
    components: {
      XHeader
    },
    data () {
      return {
        // titleName: '',
        showMenus: false
      }
    },
    mounted () {
    },
    methods: {
    },
    computed: {
      ...mapState({
        titleName: state => state.pageTitle.titleName
      }),
      ...mapGetters([
        'checkoutTitle'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
