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
        to: '/3-tree-shaking-end',
    },
    {
        title: 'Tree Shaking End Nuxt',
        to: '/4-tree-shaking-end-nuxt',
    }

];
</script>
<template>

    <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li v-for="link in links">
            <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</template>
