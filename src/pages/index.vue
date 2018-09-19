<template>
  <div
    class="page__light"
    @click="clickHandle('test click', $event)">
    <div class="container text-center">
      <bing-map />
      <bottom-bar>
        <button
          class="btn--bottom-bar"
          @click="navToSubmit">🥞 submit</button>
        <button class="btn--bottom-bar">🔥 hot</button>
        <button class="btn--bottom-bar">🗺️ city</button>
        <button class="btn--bottom-bar">👩 me</button>
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
    },
    navToSubmit (e) {
      e && e.preventDefault()
      this.navigateTo('submit')
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
