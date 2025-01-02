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
    path: '/9a-shallow-ref-begin',
    name: 'Shallow Ref Part 1 Begin',
    component: () => import('../views/9a-shallow-ref-begin.vue'),
  },
  {
    path: '/9a-shallow-ref-end',
    name: 'Shallow Ref Part 1 End',
    component: () => import('../views/9a-shallow-ref-end.vue'),
  },
  {
    path: '/9b-shallow-ref-begin',
    name: 'Shallow Ref Part 2 Begin',
    component: () => import('../views/9b-shallow-ref-begin.vue'),
  },
  {
    path: '/9b-shallow-ref-end',
    name: 'Shallow Ref Part 2 End',
    component: () => import('../views/9b-shallow-ref-end.vue'),
  },
  {
    path: '/10-memory-leak-begin',
    name: 'Memory Leak Begin',
    component: () => import('../views/10-memory-leak-begin.vue'),
  },
  {
    path: '/10-memory-leak-end',
    name: 'Memory Leak End',
    component: () => import('../views/10-memory-leak-end.vue'),
  },
  {
    path: '/11-unnecessary-abstractions-begin',
    name: 'Unnecessary Abstractions Begin',
    component: () => import('../views/11-unnecessary-abstractions-begin.vue'),
  },
  {
    path: '/11-unnecessary-abstractions-end',
    name: 'Unnecessary Abstractions End',
    component: () => import('../views/11-unnecessary-abstractions-end.vue'),
  },
  {
    path: '/12-images-begin',
    name: 'Images Begin',
    component: () => import('../views/12-images-begin.vue'),
  },
  {
    path: '/12-images-end',
    name: 'Images End',
    component: () => import('../views/12-images-end.vue'),
  },
  {
    path: '/13-prop-stability-begin',
    name: 'Prop Stability Begin',
    component: () => import('../views/13-prop-stability-begin.vue'),
  },
  {
    path: '/13-prop-stability-end',
    name: 'Prop Stability End',
    component: () => import('../views/13-prop-stability-end.vue'),
  },
  {
    path: '/14-v-once-begin',
    name: 'v-once Begin',
    component: () => import('../views/14-v-once-begin.vue'),
  },
  {
    path: '/14-v-once-end',
    name: 'v-once End',
    component: () => import('../views/14-v-once-end.vue'),
  },
  {
    path: '/15-v-memo-begin',
    name: 'v-memo Begin',
    component: () => import('../views/15-v-memo-begin.vue'),
  },
  {
    path: '/15-v-memo-end',
    name: 'v-memo End',
    component: () => import('../views/15-v-memo-end.vue'),
  },
  {
    path: '/16-computed-stability-begin',
    name: 'Computed Prop Begin',
    component: () => import('../views/16-computed-stability-begin.vue'),
  },
  {
    path: '/16-computed-stability-end',
    name: 'Computed Prop End',
    component: () => import('../views/16-computed-stability-end.vue'),
  },
  {
    path: '/17-data-basics-begin',
    name: 'Data Fetching Basics Begin',
    component: () => import('../views/17-data-basics-begin.vue'),
  },
  {
    path: '/17-data-basics-end',
    name: 'Data Fetching Basics End',
    component: () => import('../views/17-data-basics-end.vue'),
  },
  {
    path: '/18-parallel-data-fetching-begin',
    name: 'Parallel Data Fetching Begin',
    component: () => import('../views/18-parallel-data-fetching-begin.vue'),
  },
  {
    path: '/18-parallel-data-fetching-end',
    name: 'Parallel Data Fetching End',
    component: () => import('../views/18-parallel-data-fetching-end.vue'),
  },
  {
    path: '/19-data-caching-begin',
    name: 'Data Caching Begin',
    component: () => import('../views/19-data-caching-begin.vue'),
  },
  {
    path: '/19-data-caching-end',
    name: 'Data Caching End',
    component: () => import('../views/19-data-caching-end.vue'),
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
