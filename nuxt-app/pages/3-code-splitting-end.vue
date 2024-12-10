<script setup lang="ts">
// Pages are code split and lazy loaded by default in Nuxt 3

const show = ref(false);
</script>
<template>
    <h1>Hello Code Splitting Page End</h1>
    <button @click="show = !show">Toggle Code Splitting Example</button>
    <LazyCodeSplitExampleComponent v-if="show">
        <template #loading>
            H
        </template>
    </LazyCodeSplitExampleComponent>
</template>