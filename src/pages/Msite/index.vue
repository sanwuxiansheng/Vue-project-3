<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name||'正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories, index) in categoriesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categories" :key="index">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com` + category.image_url" />
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>
<script>
// 引入vuex
import {mapState} from 'vuex'
// 引入商铺列表组件
import ShopList from '../../components/ShopList/index';
// 引入swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default {
  // name: "Msite",
  components: {
    ShopList
  },
  async mounted () {
    // this.$store.dispatch('getAddress')
    //创建实例对象---第一个参数:轮播图的容器(最外面的父级元素的选择器)
    //要想使用下面的方式实现轮播,必须要在界面内容加载完毕(DOM加载后)---有bug--坑
    // var mySwiper = new Swiper(".swiper-container", {
    //   loop: true, // 循环模式选项
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getShops')
    await this.$store.dispatch('getCategories')
    this.$nextTick(() => {
      //必须是界面显示后才有效果
        new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    })
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(["address", "categories", "shops"]),
    /*
      获取食品分类列表思路
      将食品类表分类设置成一个二维数组，外面的数组代表页数，里面的数组代表一页多少个
    */
    // 产生一个二维数组
    categoriesArr () {
      const {categories} = this
      const bigArr = [] // 大叔组
      let smallArr = [] // 小数组
      categories.forEach(category => {
        // 判断小数组是否有数据
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        smallArr.push(category) // 当小数组添加到大数组中时将数据加入到小数组中
        if (smallArr.length === 8) {
          smallArr = [] // 当小数组满了的时候就清空
        }
      });
      return bigArr // 将大数组(二维数组)返回出去
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100% 
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  
</style> 