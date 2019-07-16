<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';

export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
