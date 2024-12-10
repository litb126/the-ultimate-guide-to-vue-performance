<script setup lang="ts">
// Pages are code split and lazy loaded by default in Nuxt 3

const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Hello Code Splitting Page Begin</h1>
    <button class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <LazyCodeSplitExampleComponent v-if="show" />
</template>