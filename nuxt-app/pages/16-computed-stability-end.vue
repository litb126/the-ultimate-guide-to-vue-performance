<script setup lang="ts">
const short = ref(true);
const sweet = ref(true)
const simple = ref(true);

</script>
<template>
    <h1 class="text-3xl mb-3">Computed Stability End</h1>
    <label class="label">
        <input class="checkbox" type="checkbox" v-model="short">
        Short
    </label>
    <label class="label">
        <input class="checkbox" type="checkbox" v-model="sweet">
        Sweet
    </label>
    <label class="label">
        <input class="checkbox" type="checkbox" v-model="simple">
        Simple
    </label>

    <div id="div-2" v-memo="[short, sweet]">
        <p>{{ Math.random() }}</p>
    </div>
</template>