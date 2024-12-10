<script setup lang="ts">
import { routes } from '@/router';
</script>
<template>

    <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li v-for="link in routes" :key="link.path">
            <RouterLink :to="link.path">{{ link.name }}</RouterLink>
        </li>
    </ul>
</template>
