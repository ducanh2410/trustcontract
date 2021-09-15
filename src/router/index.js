import { createRouter, createWebHistory } from 'vue-router'
import contract from './routes/contract'
import mailBox from './routes/mailBox'
import contractDraft from './routes/contractDraft'
import contractPending from './routes/contractPending'
import contractDone from './routes/contractDone'
import deposit from './routes/deposit'

const routes = [
  { path: '/', redirect: { name: 'mail-box' } },
  ...contract,
  ...mailBox,
  ...contractDraft,
  ...contractPending,
  ...contractDone,
  ...deposit,
  {
    path: '/:catchAll(.*)',
    redirect: 'error-404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  // const isLoggedIn = isUserLoggedIn()

  // if (!canNavigate(to)) {
  //   // Redirect to login if not logged in
  //   if (!isLoggedIn) return next({ name: 'auth-login' })

  //   // If logged in => not authorized
  //   return next({ name: 'misc-not-authorized' })
  // }

  // // Redirect if logged in
  // if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  //   const userData = getUserData()
  //   next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  // }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
