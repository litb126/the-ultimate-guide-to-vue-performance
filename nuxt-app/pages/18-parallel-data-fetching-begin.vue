<script setup lang="ts">

const postId = 1;

console.time('fetchTime')

const { data: post } = await useFetch(`https://dummyjson.com/posts/${postId}`);
const { data: comments } = await useFetch(`https://dummyjson.com/comments/post/${postId}`);

console.timeEnd('fetchTime')

</script>
<template>
    <h1 class="text-3xl mb-3">Parallel Data Fetching Begin</h1>
    <pre>{{ post }}</pre>
    <pre>{{ comments }}</pre>
</template>