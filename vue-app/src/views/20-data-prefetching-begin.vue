<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';

// whoops, this Joke interface was from the last lesson
// and isn't needed here.
interface Joke { id: string; joke: string; status: number; }

const { execute: getPost } = useFetch<Joke>('https://dummyjson.com/posts/1', {
    ttl: 10_000, // 10 seconds
    immediate: false,
})
</script>
<template>
    <h1 class="text-3xl mb-3">Data Prefetching Begin</h1>

    <RouterLink @mouseover="getPost" class="link block mb-3" to="/20-data-prefetching-end">
        Go To Data Prefetching End Page
    </RouterLink>
</template>
