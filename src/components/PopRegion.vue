<template lang="jade">
  //- 公用绑定手机号组件
  popup.pop-multiple-select(v-model="showPop" v-on:on-show="onShow" v-on:on-hide="clearSelect")
    group.group-clingy
      .multiple-select-hd
        div(v-for="(item, index) in select" v-text="item.title" v-bind:class="[{active: activeIndex === index}]" v-on:click="switchTab(index)")
      .multiple-select-ct
        div(v-for="(item, index) in dataList" v-show="activeIndex === index")
          div.multiple-select-item(v-for="(_item, _index) in item" v-on:click="selectAction(index, _index)" v-text="fillContent(_item)")
</template>

<script>
  import { Group, Popup } from 'vux'
  import tool from '@/utils/tool'
  export default {
    name: 'popRegion',
    components: {
      Group,
      Popup
    },
    props: ['popRegionF2C'],
    data () {
      return {
        selectInit: [
          {
            name: 'province',
            title: '请选择',
            data: ''
          },
          {
            name: 'city',
            title: '',
            data: ''
          },
          {
            name: 'block',
            title: '',
            data: ''
          },
          {
            name: 'street',
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
        this.showProvince()
      },
      fillContent (item) {
        let name = ''
        switch (this.activeIndex) {
          case 0:
            name = item.provinceName
            break
          case 1:
            name = item.cityName
            break
          case 2:
            name = item.districtName
            break
          case 3:
            name = item.streetName
            break
        }
        return name
      },
      fillDataList (index, data, key) {
        let _data = data[key]
        this.dataList.splice(index, 1, _data)
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
      switchTab (index) {
        if (this.dataList[index] && this.dataList[index].length > 0) {
          this.activeIndex = index
        }
      },
      showProvince (_key) {
        // let _this = this
        tool.get('/lookup/address/listProvince', (data) => {
          let key = 'provinceList'
          this.fillDataList(0, data, key)
        })
        // this.dataListInit = tool.cloneObj(this.dataList)
      },
      showCity (v, _key) {
        this.select[0].title = v
        this.select[0].data = v
        this.select[1].title = '请选择'
        // let _this = this
        tool.getParam('/lookup/address/listCityByProvinceCode', { provinceCode: _key }, (data) => {
          let key = 'cityList'
          this.fillDataList(1, data, key)
        })
        this.activeIndex++
      },
      showBlock (v, _key) {
        this.select[1].title = v
        this.select[1].data = v
        this.select[2].title = '请选择'
        // let _this = this
        tool.getParam('/lookup/address/listDistrictByCityCode', { cityCode: _key }, (data) => {
          let key = 'districtList'
          this.fillDataList(2, data, key)
        })
        this.activeIndex++
      },
      showStreet (v, _key) {
        this.select[2].title = v
        this.select[2].data = v
        this.select[3].title = '请选择'
        // let _this = this
        tool.getParam('/lookup/address/listStreetByDistrictCode', { districtCode: _key }, (data) => {
          let key = 'streetList'
          this.fillDataList(3, data, key)
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
      commitRegion (v, _key) {
        this.select[3].data = v
        this.result = this.getResult(this.select)
        this.chooseFinished = true
        this.clearSelect()
        this.showPop = false
      },
      selectAction (index, _index) {
        this.updateData(index)
        let v = this.dataList[index][_index]
        let name = ''
        let code = ''
        switch (this.activeIndex) {
          case 0:
            name = v.provinceName
            code = v.provinceCode
            this.showCity(name, code)
            break
          case 1:
            name = v.cityName
            code = v.cityCode
            this.showBlock(name, code)
            break
          case 2:
            name = v.districtName
            code = v.districtCode
            this.showStreet(name, code)
            break
          case 3:
            name = v.streetName
            this.commitRegion(name)
        }
      }
    },
    computed: {
      showPop: {
        get () {
          return this.popRegionF2C
        },
        set (val) {
          if (this.chooseFinished) {
            this.$emit('popRegionDataC2F', this.result)
          }
          this.$emit('popRegionStateC2F', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
