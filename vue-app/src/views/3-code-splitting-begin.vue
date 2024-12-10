<script setup lang="ts">
import { ref } from 'vue';
import CodeSplitExampleComponent from '@/components/CodeSplitExampleComponent.vue';

const show = ref(false);
</script>
<template>
    <h1>Hello Code Splitting Page Begin</h1>
    <button @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
</template>