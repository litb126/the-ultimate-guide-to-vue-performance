<script setup lang="ts">
const links = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'Tree Shaking Begin',
        to: '/2-tree-shaking-begin',
    },
    {
        title: 'Tree Shaking End',
        to: '/2-tree-shaking-end',
    },
    {
        title: 'Code Splitting Begin',
        to: '/3-code-splitting-begin',
    },
    {
        title: 'Code Splitting End',
        to: '/3-code-splitting-end',
    },
    {
        title: 'Prefetching Begin',
        to: '/4-prefetching-begin',
    },
    {
        title: 'Prefetching End',
        to: '/4-prefetching-end',
    },
    {
        title: 'Architecture Begin',
        to: '/5-architecture-begin',
    },
    {
        title: 'Architecture End',
        to: '/5-architecture-end',
    },
    {
        title: 'Lazy Hydrate Begin',
        to: '/6-lazy-hydrate-begin',
    },
    {
        title: 'Lazy Hydrate End',
        to: '/6-lazy-hydrate-end',
    },
    {
        title: 'Vapor Mode Begin',
        to: '/7-vue-vapor-mode-begin',
    },
    {
        title: 'Vapor Mode End',
        to: '/7-vue-vapor-mode-end',
    },
    {
        title: 'List Virtualization Begin',
        to: '/8-list-virtualization-begin',
    },
    {
        title: 'List Virtualization End',
        to: '/8-list-virtualization-end',
    },
    {
        title: 'Shallow Ref Part 1 Begin',
        to: '/9a-shallow-ref-begin',
    },
    {
        title: 'Shallow Ref Part 1 End',
        to: '/9a-shallow-ref-end',
    },
    {
        title: 'Shallow Ref Part 2 Begin',
        to: '/9b-shallow-ref-begin',
    },
    {
        title: 'Shallow Ref Part 2 End',
        to: '/9b-shallow-ref-end',
    },
    {
        title: 'Memory Leak Begin',
        to: '/10-memory-leak-begin',
    },
    {
        title: 'Memory Leak End',
        to: '/10-memory-leak-end',
    },
    {
        title: 'Unnecessary Abstractions Begin',
        to: '/11-unnecessary-abstractions-begin',
    },
    {
        title: 'Unnecessary Abstractions End',
        to: '/11-unnecessary-abstractions-end',
    },
    {
        title: 'Images Begin',
        to: '/12-images-begin',
    },
    {
        title: 'Images End',
        to: '/12-images-end',
    },
    {
        title: 'Prop Stability Begin',
        to: '/13-prop-stability-begin',
    },
    {
        title: 'Prop Stability End',
        to: '/13-prop-stability-end',
    },

];
</script>
<template>

    <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</template>
