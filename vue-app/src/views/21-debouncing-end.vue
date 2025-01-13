<script setup lang="ts">
import { ref } from "vue";
import { watchDebounced } from "@vueuse/core"

const data = ref();
const query = ref("");

async function searchProducts() {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query.value}`);
    data.value = await res.json();
}


watchDebounced(query, searchProducts, { debounce: 500 })

searchProducts()

</script>
<template>
    <h1 class="text-3xl mb-3">Debouncing End</h1>
    <input type="text" v-model="query" class="w-full p-2 border rounded mb-3" placeholder="Search products...">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div v-for="product in data.products" :key="product.id" class="border p-4 rounded">
            <img :src="product.images.at(0)" alt="product" class="w-full h-40 object-cover mb-2">
            <h2 class="text-xl font-bold">{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <p class="font-semibold">Price: ${{ product.price }}</p>
        </div>
    </div>
</template>
