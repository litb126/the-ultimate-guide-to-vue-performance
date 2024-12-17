<script setup lang="ts">
const show = ref(false);
</script>
<template>
    <div>
        <h1 class="text-3xl mb-3">Memory Leak Begin</h1>
        <button class="btn" @click="show = !show">
            {{ show ? 'Hide' : 'Show' }}
        </button>
        <MemoryLeakExample v-if="show" />
    </div>
</template>