import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: () => import('views/home'),
      meta: {
        requireAuth: true,
        title: '首页 | You'
      }
    }, {
      path: '/archives',
      name: 'archives',
      component: () => import('views/archives'),
      meta: {
        requireAuth: true,
        title: '归档 | You'
      }
    }, {
      path: '/tag',
      name: 'tag',
      component: () => import('views/tag'),
      meta: {
        requireAuth: true,
        title: '标签 | You'
      }
    }, {
      path: '/about',
      name: 'about',
      component: () => import('views/about'),
      meta: {
        requireAuth: true,
        title: '关于 | You'
      }
    }
  ]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // let login = sessionStorage.getItem('login')
  // if (to.meta.requireAuth) {
  //   if (!login) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   }
  // }
  next()
})

export default router
