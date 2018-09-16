<template>
  <div
    class="page__light"
    @click="clickHandle('test click', $event)">
    <div class="container text-center">
      Welcome to jianbing map
      <bing-map />
    </div>
</div></template>

<script>
import card from '@/components/card'
import BingMap from '@/components/bing-map'

export default {
  data () {
    return {
      motto: 'Hello World',
      markers: [],
      latitude: null,
      longitude: null
    }
  },

  components: {
    card,
    BingMap
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  created () {
    console.log('creeeatedc')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
