<script setup lang="ts">

// whoops, this Joke interface was from the last lesson
// and isn't needed here.
interface Joke { id: string; joke: string; status: number; }


const { data: post } = await useFetch<Joke>('https://dummyjson.com/posts/1', {
    key: 'post-1',
    getCachedData(key, nuxtApp) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        return data;
    },
})

const { data: comment, execute: getComments } = await useFetch<Joke>('https://dummyjson.com/comments/post/6', {
    immediate: false
});


const commentsRef = useTemplateRef('comments')

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        getComments()
        observer.disconnect();
    }
}, {
    threshold: 0.5
})

onMounted(() => {
    if (!commentsRef.value) return;
    observer.observe(commentsRef.value)
})

onUnmounted(() => observer.disconnect())
</script>
<template>
    <h1 class="text-3xl mb-3">Data Prefetching End</h1>
    <pre class="mb-[800px]">{{ post }}</pre>
    <div ref="comments">
        {{ comment }}
    </div>

</template>