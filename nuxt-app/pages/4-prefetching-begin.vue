<script setup lang="ts">
const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Prefetching Begin</h1>
    <button class="btn mb-3" @click="show = !show">Toggle Code Splitting
        Example</button>
    <LazyCodeSplitExampleComponent v-if="show" />
    <br>

    <NuxtLink to="/" class="link">Go Home</NuxtLink>
</template>