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

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
