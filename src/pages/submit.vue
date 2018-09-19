<template>
  <div
    class="page__light"
    @click="clickHandle('test click', $event)">

    <form class="form-container">
      <input
        type="text"
        class="form-control"
        v-model="motto"
        placeholder="v-model" >
      <input
        type="text"
        class="form-control"
        v-model.lazy="motto"
        placeholder="v-model.lazy" >
    </form>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
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
    console.log('creatteeed')
  }
}
</script>

<style scoped>
  .something {
    display: block;
  }
</style>
