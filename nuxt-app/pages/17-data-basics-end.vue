<script setup lang="ts">

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

const { data: user } = await useFetch<User>('https://dummyjson.com/users/1?select=firstName,lastName', {
    server: false,
})
</script>
<template>
    <h1 class="text-3xl mb-3">Data Fetching Basics End</h1>
    <p v-if="user">Hello my name is {{ user.firstName }} {{ user.lastName }}</p>
</template>