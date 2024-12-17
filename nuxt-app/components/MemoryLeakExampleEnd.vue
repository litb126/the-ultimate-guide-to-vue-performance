<script setup lang="ts">
function callback(e: KeyboardEvent) {
    console.log(e.key)
}
onMounted(() => {
    window.addEventListener("keydown", callback)
})

onUnmounted(() => {
    window.removeEventListener("keydown", callback)
})
</script>
<template>
    <div>
        <p>A little too obvious memory leak</p>
    </div>
</template>