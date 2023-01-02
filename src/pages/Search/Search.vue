<template>
  <div class="search">
    <HeaderTop title="搜索"/>
    <form @submit.prevent="search" class="search-form">
      <input type="text" placeholder="请输入商家或美食名称">
      <mt-button class="submit-button" type="primary">提交</mt-button>
    </form>
  </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop/HeaderTop';
    export default {
        name:'Search',
        components:{
          HeaderTop
        },
        methods: {
          search(){
            console.log('发送请求搜索')
          }
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl'
  .search
    width 100%
    height 100%
    .search-form
      clearFix()
      background-color #fff
      padding 12px 8px
      margin-top 40px
      input
        height 35px
        background-color #f2f2f2
        border 4px solid #f2f2f2
        font-size 15px
        color #333
        border-radius 2px
        outline none
        padding 0 4px
        width 75%
        float left
      .submit-button
        float right
</style>