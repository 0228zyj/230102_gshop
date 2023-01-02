<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/msite'}" @click="goTo('/msite')">
      <span>
        <i class="iconfont icon-tongchengwaimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/search'}" @click="goTo('/search')">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/order'}" @click="goTo('/order')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/profile'}" @click="goTo('/profile')">
      <span>
        <i class="iconfont icon-my"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
    export default {
        name:'FooterGuide',
        data() {
          return {
            
          }
        },
        methods: {
          // 切换路由
          goTo(path){
            this.$router.replace(path)
          },
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    z-index 100
    display flex
    width 100%
    height 50px
    background: #fff
    .guide_item
      flex 1
      display flex
      flex-direction column
      text-align center
      align-items center
      margin 5px
      color #999999
      &.on
        color #1C87FF
      span
        font-size 12px
        margin 2px 0
        .iconfont
          font-size 22px
</style>