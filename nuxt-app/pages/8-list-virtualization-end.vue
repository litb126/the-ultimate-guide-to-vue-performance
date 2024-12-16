<script setup>
import users from "@/users.json";
const allUsers = ref(users);
const {
    list: userList,
    containerProps,
    wrapperProps,
} = useVirtualList(allUsers, {
    // Keep `itemHeight` in sync with the item's row.
    itemHeight: 112,
});
</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">List Virtualization End</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <div v-bind="containerProps" style="height: calc(100vh - 300px)">
            <ul v-bind="wrapperProps">
                <UserListItem v-for="user in userList" :key="user.id" :user="user.data" />
            </ul>
        </div>
    </div>
</template>
