<template lang="jade">
  //- 公用绑定手机号组件
  popup.pop-multiple-select(v-model="showPop" v-on:on-show="onShow" v-on:on-hide="clearSelect")
    group.group-clingy
      .multiple-select-hd
        div(v-for="(item, index) in select" v-text="item.title" v-bind:class="[{active: activeIndex === index}]" v-on:click="switchTab(index)")
      .multiple-select-ct
        div(v-for="(item, index) in dataList" v-show="activeIndex === index")
          div.multiple-select-item(v-for="(_item, _index) in item" v-on:click="selectAction(index, _index)" v-text="_item.name")
</template>

<script>
  import { Group, Popup } from 'vux'
  import tool from '@/utils/tool'
  export default {
    name: 'popProType',
    components: {
      Group,
      Popup
    },
    props: ['popProTypeF2C'],
    data () {
      return {
        selectInit: [
          {
            name: 'brand',
            title: '请选择',
            data: ''
          },
          {
            name: 'proType',
            title: '',
            data: ''
          },
          {
            name: 'subProType',
            title: '',
            data: ''
          }
        ],
        select: [],
        dataList: [],
        dataListInit: [],
        levels: [],
        activeIndex: 0,
        result: '',
        chooseFinished: false
      }
    },
    beforeRouteEnter (to, from, next) {
    },
    mounted () {
      this.select = tool.cloneObj(this.selectInit)
    },
    methods: {
      onShow () {
        this.showBrand()
      },
      clearSelect () {
        this.select = tool.cloneObj(this.selectInit)
        this.dataList = tool.cloneObj(this.dataListInit)
        this.activeIndex = 0
      },
      updateData (index) {
        for (let item of this.select) {
          if (this.select.indexOf(item) > index) {
            item.title = ''
            item.data = ''
          }
        }

        for (let item of this.dataList) {
          let _index = this.dataList.indexOf(item)
          if (_index > index) {
            this.dataList[_index] = []
          }
        }
      },
      fillDataList (index, data) {
        this.dataList.splice(index, 1, data)
      },
      switchTab (index) {
        if (this.dataList[index] && this.dataList[index].length > 0) {
          this.activeIndex = index
        }
      },
      showBrand () {
        let _this = this
        tool.get('/product/productBrand/getAllActive/', function (data) {
          _this.fillDataList(0, data)
        })
        // this.dataListInit = tool.cloneObj(this.dataList)
      },
      showProType (v, code) {
        this.select[0].title = v
        this.select[0].data = v
        this.select[1].title = '请选择'
        // let _this = this
        tool.getParam('/product/productCategory/getActiveByBrand', { brand: code }, (data) => {
          this.fillDataList(1, data)
        })
        this.activeIndex++
      },
      showSubProType (v, code) {
        this.select[1].title = v
        this.select[1].data = v
        this.select[2].title = '请选择'
        // let _this = this
        tool.getParam('/product/productType/getActiveByCategory', { category: code }, (data) => {
          this.fillDataList(2, data)
        })
        this.activeIndex++
      },
      getResult (arr) {
        let result = arr.reduce((prev, next) => {
          let nextData = next['data']
          return (prev + '/' + nextData)
        }, '')
        return result.substring(1)
      },
      commitSelect (v) {
        this.select[2].data = v
        this.result = this.getResult(this.select)
        this.chooseFinished = true
        this.clearSelect()
        this.showPop = false
      },
      selectAction (index, _index) {
        this.updateData(index)
        let v = this.dataList[index][_index]
        let code = v.code
        let name = v.name
        switch (this.activeIndex) {
          case 0:
            this.showProType(name, code)
            break
          case 1:
            this.showSubProType(name, code)
            break
          case 2:
            this.commitSelect(name)
            break
        }
      }
    },
    computed: {
      showPop: {
        get () {
          return this.popProTypeF2C
        },
        set (val) {
          if (this.chooseFinished) {
            this.$emit('popProTypeDataC2F', this.result)
          }
          this.$emit('popProTypeStateC2F', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
