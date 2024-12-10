import { createRouter, createWebHistory } from 'vue-router'
import TreeShakingBegin from '../views/2-tree-shaking-begin.vue'
import TreeShakingEnd from '../views/2-tree-shaking-end.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/2-tree-shaking-begin',
    name: 'Tree Shaking Begin',
    component: TreeShakingBegin,
  },
  {
    path: '/2-tree-shaking-end',
    name: 'Tree Shaking End',
    component: TreeShakingEnd,
  },
  {
    path: '/3-code-splitting-begin',
    name: 'Code Splitting Begin',
    component: () => import('../views/3-code-splitting-begin.vue'),
  },
  {
    path: '/3-code-splitting-end',
    name: 'Code Splitting End',
    component: () => import('../views/3-code-splitting-end.vue'),
  },
  {
    path: '/4-prefetching-begin',
    name: 'Prefetching Begin',

    component: () => import('../views/4-prefetching-begin.vue'),
  },
  {
    path: '/4-prefetching-end',
    name: 'Prefetching End',
    component: () => import('../views/4-prefetching-end.vue'),
  },
  {
    path: '/5-lazy-hydrate-begin',
    name: 'Lazy Hydrate Begin',

    component: () => import('../views/5-lazy-hydrate-begin.vue'),
  },
  {
    path: '/5-lazy-hydrate-end',
    name: 'Lazy Hydrate End',
    component: () => import('../views/5-lazy-hydrate-end.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
