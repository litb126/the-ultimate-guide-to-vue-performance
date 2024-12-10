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
    }

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
