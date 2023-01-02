<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="福建省莆田市仙游县大济镇溪车村">
      <i class="iconfont icon-search1 headerLeft" slot="left"></i>
      <span slot="right" class="headerRight">登录/注册</span>
    </HeaderTop>
    <!-- 首页内容区 -->
    <div class="miste-content-wrapper">
      <div  class="miste-content">
        <!--首页内容区导航，使用swiper第三方库-->
        <nav class="msite_nav">
          <!-- Swiper -->
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysImgArr" :key="index">
                <a href="javascript:;" class="link-to-food" v-for="(category,index) in categorys" :key="index">
                  <div class="food-container">
                    <img :src="baseImageUrl+category+'.jpg'" />
                  </div>
                  <span>同城外卖</span>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!-- 首页附近商家 -->
        <div class="msite-shop-list">
          <!-- 头部 -->
          <div class="shop-header">
            <i class="iconfont icon-fujin shop-icon"></i>
            <span class="shop-header-title">附近商家</span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Swiper, { Pagination } from 'swiper';
    import 'swiper/css/bundle'
    import HeaderTop from '@/components/HeaderTop/HeaderTop';
    export default {
        name:'MSite',
        components:{
          HeaderTop
        },
        data() {
          return {
            baseImageUrl: '/nav/',
            // 这里暂时使用静态的数据
            categorysImgArr:[
              [1,2,3,4,5,6,7,8],
              [9,10,11,12,13,14]
            ],
          }
        },
        computed:{
          /*
            根据categorys一维数组生成一个2维数组
            小数组中的元素个数最大是8
          */
          categorysArr(){

          }
        },
        mounted() {
          const swiper = new Swiper(".mySwiper", {
            loop: true, // 可以循环轮播
            modules: [Pagination],
            pagination: {
              el: ".swiper-pagination",
            },
          });
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl'
  .msite
    width 100%
    .headerLeft
      font-size 27px
    .headerRight
      font-size 16px
    .miste-content-wrapper
      width 100%
      position fixed
      top 40px
      bottom 46px
      .msite_nav
        bottom-border-1px(#e4e4e4)
        width 100%
        height 200px
        background #fff
        .swiper
          width: 100%;
          height: 100%;
          .swiper-slide
            text-align: center;
            display: flex;
            align-items flex-start
            flex-wrap wrap
            .link-to-food
              width 25%
              .food-container
                width 100%
                padding-bottom 10px
                font-size 0
                img
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
      .msite-shop-list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop-header
          padding 10px 10px 0
          .shop-icon
            margin-right 5px
            color #999
          .shop-header-title
            color #999
            font-size 14px
            line-height 20px
</style>