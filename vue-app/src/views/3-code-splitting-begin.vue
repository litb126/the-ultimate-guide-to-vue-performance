<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
const loadComponent = () => import('@/components/CodeSplitExampleComponent.vue');
const CodeSplitExampleComponent = defineAsyncComponent(loadComponent);

const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Code Splitting Begin</h1>
    <p>Hello Code Splitting Page Begin</p>
    <button @mouseenter="loadComponent" class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
</template>
