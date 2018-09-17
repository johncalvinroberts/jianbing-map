<style lang="scss">
  @import "../styles/variables.scss";
  .bottom-bar--outer{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    color: $white;
    background-color: $black;
    height: 55px;
    z-index: 999;
    overflow:hidden;
  }
  .bottom-bar--inner{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:55px;
  }
</style>
<template>
  <div class="bottom-bar--outer">
    <div class="bottom-bar--inner">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
