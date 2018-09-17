<template>
  <div
    class="page__light"
    @click="clickHandle('test click', $event)">
    <div class="container text-center">
      <bing-map />
      <bottom-bar>
        <button class="x">Yoooo</button>
      </bottom-bar>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import BingMap from '@/components/bing-map'
import BottomBar from '@/components/bottom-bar'

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
    BingMap,
    BottomBar
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
