import Vue from 'vue'
import Router from 'vue-router'
import storageServices from '../common/storage.service'
import Login from '@/pages/Login'
import WalletManagement from '@/pages/WalletManagement'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { nonRequiredAuth: true }
    },
    {
      path: '/wallets',
      name: 'WalletManagement',
      component: WalletManagement
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const isAuthenticated = !!storageServices.get('Token')
  if (authRequired && !isAuthenticated) {
    next('/login')
  }
  next()
})

export default router
