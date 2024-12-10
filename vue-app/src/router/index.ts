import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TreeShakingBegin from '../views/2-tree-shaking-begin.vue'
import TreeShakingEnd from '../views/2-tree-shaking-end.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/2-tree-shaking-begin',
      name: 'tree-shaking-begin',
      component: TreeShakingBegin,
    },
    {
      path: '/2-tree-shaking-end',
      name: 'tree-shaking-end',
      component: TreeShakingEnd,
    },
    {
      path: '/3-code-splitting-begin',
      name: 'code-splitting-begin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/3-code-splitting-begin.vue'),
    },
    {
      path: '/3-code-splitting-end',
      name: 'code-splitting-end',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/3-code-splitting-end.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
