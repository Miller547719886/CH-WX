<template lang="jade">
  //- 公用下拉框
  group.cell-slide-down
    cell(v-bind:title="title" v-bind:arrow-direction="showContent ? 'up' : 'down'" is-link v-on:click.native="showContent = !showContent")
      div(slot="icon" style="display:block;margin-right:5px;width:20px;height:20px")
        slot(name="icon")
    div.cell-slide-down-content.slide(v-bind:class="showContent ? 'animate' : ''")
      slot(name="default") 此处为内容
</template>

<script>
  import { Group, Cell } from 'vux'
  export default {
    name: 'slideown',
    components: {
      Group,
      Cell
    },
    props: {
      title: {
        type: String,
        default: '此处为标题'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showContent: this.show
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
    },
    mounted () {
      console.log('mounted')
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .cell-slide-down-content>div {
    border-top: 1px solid #e6e6e6;
    font-size: 13px;
    padding: 10px;
  }
</style>
