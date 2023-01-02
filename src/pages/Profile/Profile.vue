<template>
  <div class="profile">
    <HeaderTop title="我的"/>
    <section class="profile-number">
      <div class="user-image">
        <img src="./images/2.jpg" alt="" />
      </div>
      <div class="user-info">
        <h3 class="user-name">登录/注册</h3>
        <div class="user-phone-number">
          <span>
            <i class="iconfont icon-phone"></i>
          </span>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <span class="arrow">
        <i class="iconfont icon-arrow-right-bold arrow-right"></i>
      </span>
    </section>
    <section class="profile-info-data">
      <ul class="info-data-list">
        <a href="javascript:;" class="info-data-link">
          <span class="info-data-top"><span>0.00</span>元</span>
          <span class="info-data-bottom">我的余额</span>
        </a>
        <a href="javascript:;" class="info-data-link">
          <span class="info-data-top"><span>0</span>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </a>
        <a href="javascript:;" class="info-data-link">
          <span class="info-data-top"><span>0</span>分</span>
          <span class="info-data-bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile-my-order">
      <mt-cell title="我的订单" is-link class="my-order">
        <i slot="icon" class="iconfont icon-icon_dingdan_01 icon-order-s"></i>
      </mt-cell>
      <mt-cell title="积分商城" is-link class="my-order">
        <i slot="icon" class="iconfont icon-jifenquanicon icon-jifen"></i>
      </mt-cell>
      <mt-cell title="外卖会员卡" is-link class="my-order">
        <i slot="icon" class="iconfont icon-huiyuan icon-vip"></i>
      </mt-cell>
    </section>
    <section class="profile-my-order">
      <mt-cell title="服务中心" is-link class="my-order">
        <i slot="icon" class="iconfont icon-fuwuzhongxin icon-fuwu"></i>
      </mt-cell>
    </section>
  </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop/HeaderTop';
    export default {
        name:'Profile',
        components:{
          HeaderTop
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl'
  .profile
    height 100%
    width 100%
    .profile-number
      top-border-1px(#e4e4e4)
      display flex
      margin-top 40px
      background #26a2ff
      padding 20px 10px
      color #fff
      .user-image
        width 60px
        height 60px
        border-radius 50%
      .user-image>img
        width 100%
        height 100%
        border-radius 50%
      .user-info
        flex 1
        padding 0 10px
        line-height 30px
        overflow hidden
        .user-name
          width 90%
          font-weight bold
          font-size 18px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .arrow
        line-height 60px
        .arrow-right
          font-size 25px
    .profile-info-data
      width 100%
      bottom-border-1px(#e4e4e4)
      .info-data-list
        display flex
        background #fff
        .info-data-link
          flex  1
          display flex
          flex-direction column
          text-align: center
          border-right 1px solid #f1f1f1
          color  #333
          .info-data-top
            padding 10px 0
            &>span
              font-size 30px
              font-weight bold
              color  #f90
          .info-data-bottom
            padding-bottom 7px
        .info-data-link:nth-of-type(2)
          .info-data-top>span
            color  #ff5f3e
        .info-data-link:nth-of-type(3)
          border 0
          .info-data-top>span
            color  skyblue
    .profile-my-order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my-order
        min-height 50px
        .iconfont
          font-size 20px
        .icon-order-s
          color #2D8DCD
        .icon-jifen
          color #FF6373
        .icon-vip
          color #D7A26A
        .icon-fuwu
          color #438CFF
</style>