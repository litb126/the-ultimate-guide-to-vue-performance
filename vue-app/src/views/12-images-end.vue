<script setup lang="ts">

</script>
<template>
    <h1 class="text-3xl mb-[2000px]">Images End</h1>

    <!--For above the fold use fetchpriority="high"-->

    <img width="1496" height="1032" src="@/assets/hummingbird@1496x1032.jpg"
        srcset="@/assets/hummingbird@768x530.jpg 768w, @/assets/hummingbird@1496x1032.jpg 1496w"
        sizes="100%, (min-width: 1496px) 1496px" alt="A hummingbird" loading="lazy" />
    <p>Hello world</p>
</template>