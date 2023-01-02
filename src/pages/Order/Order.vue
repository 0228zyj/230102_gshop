<template>
  <div class="order">
    <HeaderTop title="订单列表"/>
    <div class="order_no_login">
      <img src="./images/person.png" alt="">
      <p>登陆后查看外卖订单</p>
      <mt-button type="primary">立即登录</mt-button>
    </div>
  </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop/HeaderTop';
    export default {
        name:'Order',
        components:{
          HeaderTop
        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order
    width 100%
    .order_no_login
      padding-top 120px
      width 60%
      text-align center
      margin 0 auto
      >img
        width 100%
        height 30%
      >p
        padding 10px 0
        font-size 17px
        color #6a6a6a
</style>