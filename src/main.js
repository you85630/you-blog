// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 重置全局样式
import 'assets/css/reset.css'
// IE问题解决方案
import 'babel-polyfill'
// 引入组件库
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 引入全局事件
import utils from './assets/js/utils.js'

// 全局使用
Vue.use(iView)
Vue.prototype.utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
