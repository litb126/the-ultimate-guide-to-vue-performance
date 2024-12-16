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
    path: '/5-architecture-begin',
    name: 'Architecture Begin',

    component: () => import('../views/5-architecture-begin.vue'),
  },
  {
    path: '/5-architecture-end',
    name: 'Architecture End',
    component: () => import('../views/5-architecture-end.vue'),
  },
  {
    path: '/6-lazy-hydrate-begin',
    name: 'Lazy Hydrate Begin',

    component: () => import('../views/6-lazy-hydrate-begin.vue'),
  },
  {
    path: '/6-lazy-hydrate-end',
    name: 'Lazy Hydrate End',
    component: () => import('../views/6-lazy-hydrate-end.vue'),
  },
  {
    path: '/7-vue-vapor-mode-begin',
    name: 'Vapor Mode Begin',
    component: () => import('../views/7-vue-vapor-mode-begin.vue'),
  },
  {
    path: '/7-vue-vapor-mode-end',
    name: 'Vapor Mode End',
    component: () => import('../views/7-vue-vapor-mode-end.vue'),
  },
  {
    path: '/8-list-virtualization-begin',
    name: 'List Virtualization Begin',
    component: () => import('../views/8-list-virtualization-begin.vue'),
  },
  {
    path: '/8-list-virtualization-end',
    name: 'List Virtualization End',
    component: () => import('../views/8-list-virtualization-end.vue'),
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
