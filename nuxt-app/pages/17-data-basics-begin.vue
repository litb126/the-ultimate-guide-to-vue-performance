<script setup lang="ts">
interface User {
    id: number;
    firstName: string;
    lastName: string;
}

const user = ref<User>();
onMounted(async () => {
    const data = await $fetch<User>('https://dummyjson.com/users/1')
    user.value = data;
})
</script>
<template>
    <h1 class="text-3xl mb-3">Data Fetching Basics Begin</h1>
    <p v-if="user">Hello my name is {{ user.firstName }} {{ user.lastName }}</p>
</template>