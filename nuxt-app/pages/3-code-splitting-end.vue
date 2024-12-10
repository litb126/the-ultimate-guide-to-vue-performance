<script setup lang="ts">
// Pages are code split and lazy loaded by default in Nuxt 3

const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Code Splitting End</h1>
    <p>Hello Code Splitting Page End</p>
    <button class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <LazyCodeSplitExampleComponent v-if="show" />
</template>