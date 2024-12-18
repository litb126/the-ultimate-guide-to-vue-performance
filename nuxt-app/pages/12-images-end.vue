<script setup lang="ts">

</script>
<template>
    <h1 class="text-3xl mb-[2000px]">Images Begin</h1>

    <!--For above the fold use fetchpriority="high"-->

    <NuxtImg width="1496" height="1032" src="/hummingbird.jpg" sizes="100vw sm:768px md:1024px lg:1280px xl:1536"
        alt="A hummingbird" loading="lazy" />
    <p>Hello world</p>
</template>