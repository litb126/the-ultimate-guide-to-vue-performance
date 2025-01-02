<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

// whoops, this Joke interface was from the last lesson
// and isn't needed here.
interface Joke { id: string; joke: string; status: number; }

const {
    data: post
} = useFetch<Joke>('https://dummyjson.com/posts/1', {
    ttl: 10_000, // 10 seconds
})

const {
    data: comment,
    execute: getComments
} = useFetch<Joke>('https://dummyjson.com/comments/post/6', {
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