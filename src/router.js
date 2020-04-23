import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
      },

      {
        path: '/page2',
        name: 'page-2',
        component: () => import('./views/Page2.vue'),
        meta: {
          auth: {
            user: 'view',
          }
        }
      },

      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
      },
      
      {
        path: '*',
        redirect: '/pages/error-404',
      }
    ],
})

export default router
