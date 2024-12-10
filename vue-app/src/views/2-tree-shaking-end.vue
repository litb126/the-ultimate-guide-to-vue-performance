<script setup lang="ts">
import { shuffle } from "lodash-es";

const items = [...Array(10).keys()];
const shuffledItems = shuffle(items);
</script>
<template>
    <div>
        {{ shuffledItems }}
    </div>
</template>