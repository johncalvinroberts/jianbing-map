<template>
  <div
    id="app"
    v-if="!isMiniProgram">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMiniProgram: true
    }
  },
  created () {
    this.isMiniProgram = process.env.TARGET === 'mp'
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>
