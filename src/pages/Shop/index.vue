<template>
<div>
  <ShopHeard/>
  Shop组件
  <div class="tab">
    <div class="tab-item">
      <router-link to="/shop/goods">点餐</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop/ratings">评价</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop/info">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>
<script>
// 引入ShopHeard组件
import ShopHeard from '../../components/ShopHeard'
export default {
  name:"Shop",
  components: {
    ShopHeard
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
</style>