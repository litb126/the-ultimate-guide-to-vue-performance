<script setup lang="ts">
import { ref } from "vue";

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

const user = ref<User>();
(async () => {
    const res = await fetch('https://dummyjson.com/users/1?select=firstName,lastName')
    const data = await res.json() as User;
    user.value = data;
})()
</script>
<template>
    <h1 class="text-3xl mb-3">Data Fetching Basics End</h1>
    <p v-if="user">Hello my name is {{ user.firstName }} {{ user.lastName }}</p>
</template>