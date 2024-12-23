import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login' // 默认重定向到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/BasicLayout.vue'),
    children: [
      {
        path: '/map',
        name: 'MapEditor',
        component: () => import('../views/map/index.vue'),
        meta: { title: '地图编辑器', requiresAuth: true }
      },
      {
        path: '/devices',
        name: 'Devices',
        component: () => import('../views/devices/index.vue'),
        meta: { title: '设备管理', requiresAuth: true }
      },
      {
        path: '/operations',
        name: 'Operations',
        component: () => import('../views/operations/index.vue'),
        meta: { title: '运营管理', requiresAuth: true }
      },
      {
        path: 'system/users',
        name: 'UserManage',
        component: () => import(/* webpackChunkName: "user-manage" */ '../views/system/user/index.vue'),
        meta: { title: '用户管理', requiresAuth: true }
      },
      {
        path: 'system/settings',
        name: 'SystemSettings',
        component: () => import(/* webpackChunkName: "system-settings" */ '../views/system/settings/index.vue'),
        meta: { title: '系统设置', requiresAuth: true }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true
})

export default router