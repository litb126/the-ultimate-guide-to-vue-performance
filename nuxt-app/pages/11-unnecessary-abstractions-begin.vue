<script setup>
import users from "@/users.json";
console.time("unnecessary-abstractions-begin");

const allUsers = ref(users.slice(0, 1000));
onMounted(() => {
    console.timeEnd("unnecessary-abstractions-begin");
})
</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">Unnecessary Abstractions Begin</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <div>
            <ul>
                <UserListItem v-for="user in allUsers" :key="user.id" :user="user" />
            </ul>
        </div>
    </div>
</template>
