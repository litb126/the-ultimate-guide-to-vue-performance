<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
const CodeSplitExampleComponent = defineAsyncComponent(() =>
    import('@/components/CodeSplitExampleComponent.vue')
)

const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Prefetching Begin</h1>
    <button class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
    <br>
    <router-link to="/" class="link">Go Home</router-link>
</template>