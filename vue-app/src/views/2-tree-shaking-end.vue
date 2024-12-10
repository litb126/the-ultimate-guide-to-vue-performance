<script setup lang="ts">
import { shuffle } from "lodash-es";

const items = [...Array(10).keys()];
const shuffledItems = shuffle(items);
</script>
<template>
    <h1 class="text-3xl mb-3">TreeShaking End</h1>
    <div>
        {{ shuffledItems }}
    </div>
</template>