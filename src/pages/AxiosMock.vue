<template lang="jade">
  .page-axios-mock
    group
      button(@click="getListData") getData
      div(v-for='item in productBrandList' v-html="item.name")
    group
      button(@click="getListDataParam") getDataParam
      div(v-for='item in productBrandListParam' v-html="item.name")
    group
      router-link(to="/Login")
        button go to login
      router-link(to="/SelfServiceInstall")
        button go to SelfServiceInstall
      router-link(to="/SelfServiceRepair")
        button go to SelfServiceRepair
    //- group
    //-   popup(height="200px" @on-first-show="resetScroller" v-model="popShow" )
    //-     scroller(height="100%" lock-x ref="scroller")
    //-       ul.clearfix
    //-         li(v-for="item in items" @click="changeSelect(item.name)") {{item.name}}
</template>

<script>
  import { XInput, Selector, Popup, Scroller, Group, Cell, XButton } from 'vux'
  import axios from '@/http/api'
  // import qs from 'qs'

  export default {
    name: 'axiosMock',
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      Popup,
      Scroller,
      XButton
    },
    data () {
      return {
        productBrandList: [],
        productBrandListParam: [],
        popShow: true
      }
    },
    mounted () {
    },
    methods: {
      showPop () {
        this.popShow = true
      },
      changeSelect (data) {
        this.popShow = false
      },
      getListData () {
        axios.get('/list')
        .then(
          (res) => {
            console.log(res)
            if (res.status === 200) {
              this.productBrandList = res.data
            }
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
      },
      getListDataParam () {
        axios.get('/listParam', { params: { id: 'Rufer' } })
        .then(
          (res) => {
            console.log(res)
            if (res.status === 200) {
              this.productBrandListParam = res.data
            }
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
      }
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
</style>
