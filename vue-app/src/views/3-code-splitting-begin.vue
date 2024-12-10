<script setup lang="ts">
import { ref } from 'vue';
import CodeSplitExampleComponent from '@/components/CodeSplitExampleComponent.vue';

const show = ref(false);
</script>
<template>
    <h1 class="text-3xl mb-3">Hello Code Splitting Page Begin</h1>
    <button class="btn mb-3" @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
</template>
