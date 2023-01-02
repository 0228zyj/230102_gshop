<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuideVue/>
  </div>
</template>

<script>
  import FooterGuideVue from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuideVue,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
