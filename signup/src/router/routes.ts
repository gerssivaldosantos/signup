import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/profile',
    component: () => import('pages/Profile.vue')
  },

  {
    path: '/createUser',
    component: () => import('pages/CreateUser.vue')
  },

  {
    path: '/rescuePassword',
    component: () => import('pages/RescuePassword.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
