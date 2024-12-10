<script setup lang="ts">
import _ from "lodash";

const items = [...Array(10).keys()];
const shuffledItems = _.shuffle(items);

</script>
<template>
    <div>
        {{ shuffledItems }}
    </div>
</template>