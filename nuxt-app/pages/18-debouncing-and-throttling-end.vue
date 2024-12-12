<script setup lang="ts">
const searchTerm = ref('')
const searchTermDebounced = refDebounced(searchTerm, 500)

const { data: result, execute } = await useFetch<{
    products: any[]
}>(
    () => `https://dummyjson.com/products/search?q=${searchTermDebounced.value}`
)
</script>
<template>
    <div class="p-4">
        <input v-model="searchTerm" placeholder="Search products..." class="input input-bordered w-full mb-4" />
        <div v-if="result?.products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="product in result.products" :key="product.id" class="card bg-base-100 shadow-xl">
                <figure><img :src="product.thumbnail" alt="Product Image" class="w-full h-48 object-cover" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ product.title }}</h2>
                    <p>{{ product.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
