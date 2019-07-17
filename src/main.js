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
// 引入表单验证的js文件
import './validate'
// 引入并注册使用按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
// 注册全局公共组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
