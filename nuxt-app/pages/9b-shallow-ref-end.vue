<script setup>
import users from "@/users.json";
console.time("timeToMountEnd")
const allUsers = shallowRef(users);

let id = null;
onBeforeUpdate(() => {
    id = id = crypto.randomUUID()
    console.time(id)
})

onUpdated(() => {
    console.timeEnd(id)
})

function addNewUser() {
    const newUser = { "id": crypto.randomUUID(), "firstName": "Added", "lastName": "User", "email": "adduser@gmail.com", "avatar": "https://avatars.githubusercontent.com/u/89713072", "birthdate": "1990-03-19T05:54:10.144Z", "registeredAt": "2024-07-26T07:43:58.823Z" };
    allUsers.value = [
        newUser,
        ...allUsers.value,
    ]
}

onMounted(() => {
    console.timeEnd("timeToMountEnd")
})
</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">Shallow Ref End</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <button class="btn" @click="addNewUser">Add New User</button>
        <ul>
            <li v-for="user in allUsers" :key="user">
                {{ user.email }}
            </li>
        </ul>
    </div>
</template>
