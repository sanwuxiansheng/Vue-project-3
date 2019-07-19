<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';
// 引入api
import {reqUser} from './api'
import {RECEIVE_USER} from './store/mutation-types.js'
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted () {
    // 发送请求获取用户信息---生成了session---sid----cookie--客户端---cookie(sid)------服务端(sid-----userId)
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      // console.log(user);
      this.$store.commit(RECEIVE_USER, user)
    }
  }
}
</script>

<style>

</style>
