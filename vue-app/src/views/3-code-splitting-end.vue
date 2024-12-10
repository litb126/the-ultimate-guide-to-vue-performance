<script setup lang="ts">
import { ref, h, defineAsyncComponent } from 'vue';
const CodeSplitExampleComponent = defineAsyncComponent(() =>
    import('@/components/CodeSplitExampleComponent.vue')
)

// const CodeSplitExampleComponent = defineAsyncComponent({
//     loader: () => import('@/components/CodeSplitExampleComponent.vue'),
//     loadingComponent: h('Loading...') /* shows while loading */,
//     errorComponent: h('Error!') /* shows if there's an error */,
//     delay: 1000 /* delay in ms before showing loading component */,
//     timeout: 3000 /* timeout after this many ms */,
// })

const show = ref(false);
</script>
<template>
    <h1>Hello Code Splitting Page Begin</h1>
    <button @click="show = !show">Toggle Code Splitting Example</button>
    <CodeSplitExampleComponent v-if="show" />
</template>