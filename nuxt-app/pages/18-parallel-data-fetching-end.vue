<script setup lang="ts">

const postId = 1;

console.time('fetchTime')

const { data } = await useAsyncData(async () => {
    return Promise.all([
        $fetch(`https://dummyjson.com/posts/${postId}`),
        $fetch(`https://dummyjson.com/comments/post/${postId}`)
    ])
})

console.timeEnd('fetchTime')

const post = computed(() => data.value?.at(0));
const comments = computed(() => data.value?.at(1));



</script>
<template>
    <h1 class="text-3xl mb-3">Parallel Data Fetching End</h1>
    <pre>{{ post }}</pre>
    <pre>{{ comments }}</pre>
</template>