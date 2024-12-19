<script setup lang="ts">
import { ref } from "vue";
const postId = 1;

const post = ref(null);
const comments = ref(null);

const fetchPost = async () => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    return await res.json();
}
const fetchComments = async () => {
    const res = await fetch(`https://dummyjson.com/comments/post/${postId}`)
    return await res.json();
}

(async () => {
    console.time('fetchTime')
    const allData = await Promise.all([
        fetchPost(),
        fetchComments()
    ])
    post.value = allData[0];
    comments.value = allData[1];
    console.timeEnd('fetchTime')
})()
</script>
<template>
    <h1 class="text-3xl mb-3">Parallel Data Fetching End</h1>
    <pre>{{ post }}</pre>
    <pre>{{ comments }}</pre>
</template>