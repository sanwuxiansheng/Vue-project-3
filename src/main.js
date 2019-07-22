// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 注册路由器
import router from './router'
// 定义全局组件
import Header from './components/Heard/index.vue'
// 引入状态数据库
import store from './store'
// 引入创建的全局公共组件
import Star from './components/Star/index.vue'
import ShopHeard from './components/ShopHeard'
import CartControl from './components/CartControl/index.vue'
// 引入表单验证的js文件
import './validate'
// 引入Mock.js文件
import './mock/mock-server.js'
// 引入并注册使用按钮
import { Button } from 'mint-ui';
import Split from './components/Split'
import './filter' // 加载自定义过滤器
import VueLazyload from 'vue-lazyload' // 引入图片懒加载插件
import loading from '../public/images/01-gif.gif' // 引入懒加载所需要的图片
// 注册为全局组件标签
Vue.component('Split', Split)
Vue.component(Button.name, Button);
// 注册全局公共组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('ShopHeard', ShopHeard)
Vue.component('CartControl', CartControl)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
