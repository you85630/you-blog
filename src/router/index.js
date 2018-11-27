import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '*',
      name: '404',
      component: () => import('views/notfound'),
      meta: {
        title: '页面飞走了'
      }
    }, {
      path: '/home',
      component: () => import('views/index'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('components/pages/home'),
          meta: {
            requireAuth: true,
            title: "You's Blog"
          }
        }, {
          path: '/archives',
          name: 'archives',
          component: () => import('components/pages/archives'),
          meta: {
            requireAuth: true,
            title: '归档 | You'
          }
        }, {
          path: '/tags',
          name: 'tags',
          component: () => import('components/pages/tags'),
          meta: {
            requireAuth: true,
            title: '标签 | You'
          }
        }, {
          path: '/about',
          name: 'about',
          component: () => import('components/pages/about'),
          meta: {
            requireAuth: true,
            title: '关于 | You'
          }
        }, {
          path: '/tags/:id',
          name: 'tagitem',
          component: () => import('components/pages/tag-item'),
          meta: {
            requireAuth: true
          }
        }, {
          path: '/archives/:id',
          name: 'details',
          component: () => import('components/pages/details'),
          meta: {
            requireAuth: true
          }
        }
      ]
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
