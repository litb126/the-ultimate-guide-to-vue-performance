<script setup lang="ts">
const count = ref(0)
const isEven = computed((oldValue) => {
    const obj = {
        data: count.value % 2 === 0
    }

    if (oldValue && oldValue.data === obj.data) {
        return oldValue;
    }
    return obj;
})

watch(isEven, () => console.log("isEven Changed"))
</script>
<template>
    <h1 class="text-3xl mb-3">Computed Prop Stability Begin</h1>
    <div>{{ count }} is {{ isEven.data ? 'even' : 'odd' }}</div>
    <div class="flex gap-2">
        <button class="btn btn-sm" v-for="n in 5" @click="count = n">
            {{ n }}
        </button>
    </div>
</template>