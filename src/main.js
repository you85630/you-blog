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

// markdown代码高亮
import hljs from 'highlight.js'
import 'highlight.js/styles/zenburn.css'
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

// 全局使用
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
