<script setup lang="ts">
import { ref } from "vue";
import { shuffle } from "lodash-es";

// create an array of 10 numbers
const numbers = ref([...Array(10).keys()]);

function shuffleNums() {
    numbers.value = shuffle([...numbers.value]);
}

</script>
<template>
    <div>
        <PageHeading :number="1">Branching Component Pattern</PageHeading>
        <div class="flex gap-3">
            <pre class="text-3xl">{{ numbers }}</pre>
        </div>
        <button @click="shuffleNums">Shuffle</button>
    </div>
</template>