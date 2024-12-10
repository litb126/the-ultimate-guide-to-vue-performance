<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
const loadComponent = () => import('@/components/CodeSplitExampleComponent.vue')
const loadRoute = () => import('@/views/HomeView.vue')


const CodeSplitExampleComponent = defineAsyncComponent(loadComponent)

const show = ref(false);

</script>
<template>
    <h1 class="text-3xl mb-3">Prefetching End</h1>
    <button @mouseenter="loadComponent" class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
    <br>
    <router-link @mouseenter="loadRoute" to="/" class="link">Go Home</router-link>
</template>