<script setup>
import users from "@/users.json";

const allUsers = ref(users.slice(0, 50000));
// const allUsers = ref(users);
</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">List Virtualization Begin</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <div style="height: calc(100vh - 300px)">
            <ul>
                <UserListItem v-for="user in allUsers" :key="user.id" :user="user" />
            </ul>
        </div>
    </div>
</template>
