<script setup lang="ts">
const sweet = ref(true)
</script>
<template>
    <h1 class="text-3xl mb-3">v-once Begin</h1>
    <label class="label">
        <input class="checkbox" type="checkbox" v-model="sweet">
    </label>

    <div id="div-1">
        <p>Is Sweet? {{ sweet ? 'Yes' : 'No' }}</p>
    </div>

    <div id="div-2" v-once>
        <p>Is Sweet? {{ sweet ? 'Yes' : 'No' }}</p>
    </div>
</template>