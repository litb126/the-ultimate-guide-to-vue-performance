<script setup lang="ts">
const show = ref();
</script>
<template>
    <div>
        <h1 class="text-3xl mb-3">Memory Leak End</h1>
        <button class="btn" @click="show = !show">Show</button>
        <MemoryLeakExampleEnd v-if="show" />
    </div>
</template>