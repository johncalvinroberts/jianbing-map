<style lang="scss" scoped>
  .map {
    width: 100%;
    height: calc(100vh - 100px)!important;
  }

</style>
<template>
  <div>
    <div v-if="isMiniProgram">
      <map
        class="map"
        id="map"
        longitude="longitude"
        latitude="latitude"
        scale="16"
        show-location="true"
        markers="markers"
        bindmarkertap="makertap"/>
    </div>
    <div v-else>
      <div class="amap-wrapper map">
        <el-amap
          class="amap-box"
          :vid="'amap-vue'">
          heere
        </el-amap>
      </div>
    </div>
  </div>
</template>
<script>
import VueAMap from 'vue-amap'
const isMiniProgram = process.env.TARGET === 'mp'

import { amapsWxKey } from '@/keys'
const amapFile = require('../utils/amap-wx')

export default {
  methods: {
    showMarkerInfo (data, i) {
      this.textData = {
        name: data[i].name,
        desc: data[i].address }
    }
  },
  data () {
    return {
      isMiniProgram
    }
  },
  created () {
    console.log('heyyyy haha')
    if (this.isMiniProgram) {
      let myAmapFun = new amapFile.AMapWX({ key: amapsWxKey })
      myAmapFun.getPoiAround({
        iconPathSelected: '../../images/cake2.png', //如：..­/..­/img/marker_checked.png
        iconPath: '../../images/cake2.png', //如：..­/..­/img/marker.png
        success: (data) => {
          let markersData = data.markers
          this.markers = markersData
          this.latitude = markersData[0].latitude
          this.longitude = markersData[0].longitude
          this.showMarkerInfo(markersData,0)
        },
        fail: (info) => {
          wx.showModal({ title:info.errMsg })
        }
      })
    } else {
      setTimeout(() => {

        amapInitComponent() // eslint-disable-line
      }, 5000)
    }
  },
}
</script>
