<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';

interface Joke { id: string; joke: string; status: number; }

const { data, loading, refresh } = useFetch<Joke>('https://icanhazdadjoke.com/', {
    ttl: 10_000
})
</script>
<template>
    <h1 class="text-3xl mb-3">Data Caching Begin</h1>
    <p class="mb-3">{{ data?.joke }}</p>

    <RouterLink class="link block mb-3" to="/19-data-caching-end">
        Go To Data Cache End Page
    </RouterLink>

    <button class="btn" @click="refresh">
        {{ loading ? 'Loading...' : 'Fetch Joke' }}
    </button>
</template>