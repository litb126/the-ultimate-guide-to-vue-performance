<script setup lang="ts">
import _ from "lodash";

const items = [...Array(10).keys()];
const shuffledItems = _.shuffle(items);

</script>
<template>
    <h1 class="text-3xl mb-3">TreeShaking Begin</h1>
    <div>
        {{ shuffledItems }}
    </div>
</template>