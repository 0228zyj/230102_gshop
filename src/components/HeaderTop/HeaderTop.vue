<template>
  <mt-header :title="title" class="headerTop">
    <slot name="left" slot="left"></slot>
    <slot name="right" slot="right"></slot>
  </mt-header>
</template>

<script>
    export default {
        name:'HeaderTop',
        props:{
          title:{
            type:String,
            required:true
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .headerTop
    font-size 21px
    line-height 40px
    position fixed
    width 100%
    left 0
    top 0
    z-index 100
</style>