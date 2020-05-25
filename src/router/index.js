import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {
      isLoginRequired: false,
      title: 'Login'
    },
    component: () => import('@/components/Login/Login.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: {
      isLoginRequired: true,
      title: 'Chat'
    },
    component: () => import('@/components/Chat/Chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.APP_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.isLoginRequired)) {
    if (store.getters.getLoggedIn) {
      next()
      return
    }
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
