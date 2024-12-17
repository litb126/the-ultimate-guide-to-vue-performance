<script setup lang="ts">
const handleKeyDown = (e) => {
    console.log(e.key)
}
onMounted(() => {
    window.addEventListener("keydown", handleKeyDown)
})
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>
<template>
    <div>
        <p>A little too obvious memory leak</p>
    </div>
</template>