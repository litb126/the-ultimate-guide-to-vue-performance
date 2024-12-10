<script setup lang="ts">
// Pages are code split and lazy loaded by default in Nuxt 3

const show = ref(false);
</script>
<template>
    <h1>Hello Code Splitting Page Begin</h1>
    <button @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
</template>