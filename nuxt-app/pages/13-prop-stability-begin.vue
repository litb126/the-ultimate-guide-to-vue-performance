<script setup>
import users from "@/users.json";

const allUsers = ref(users.slice(0, 100));
// const allUsers = ref(users);

const selectedId = ref(null);

const id = crypto.randomUUID();
onBeforeUpdate(() => {
    console.time(id);
});
onUpdated(() => {
    console.timeEnd(id);
});

</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">Prop Stability Begin</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <div style="height: calc(100vh - 300px)">
            <ul>
                <SelectableUserListItem v-for="user in allUsers" :key="user.id" :user="user" :selectedId="selectedId"
                    @select="selectedId = $event" />
            </ul>
        </div>
    </div>
</template>
