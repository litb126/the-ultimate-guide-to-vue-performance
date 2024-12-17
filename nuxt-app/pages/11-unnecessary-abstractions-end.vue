<script setup>
import users from "@/users.json";
console.time("unnecessary-abstractions-end");

const allUsers = ref(users.slice(0, 1000));

const birthdateFormatted = ((birthdate) => {
    return new Date(birthdate).toLocaleDateString();
});

onMounted(() => {
    console.timeEnd("unnecessary-abstractions-end");
})
</script>

<template>
    <div>
        <h1 class="text-3xl mb-3">Unnecessary Abstractions End</h1>
        <h1 class="mb-4 text-3xl font-bold">
            User List ({{ allUsers.length }} users)
        </h1>
        <div>
            <ul>
                <div v-for="user in allUsers" :key="user.id" class="p-4 my-2 shadow-xl card card-side bg-base-100">
                    <figure class="w-14">
                        <img :src="user.avatar" :alt="user.firstName" class="w-12 h-12 rounded-full" loading="lazy" />
                    </figure>
                    <div class="flex-row items-center justify-between p-4 card-body">
                        <div>
                            <h2 class="card-title">{{ user.firstName }} {{ user.lastName }}</h2>
                            <p class="text-sm">{{ user.email }}</p>
                        </div>
                        <div class="flex flex-col items-end">
                            <div class="mb-2 badge badge-primary text-xs">
                                <Icon name="mingcute:birthday-2-fill" class="mr-1" />
                                {{ birthdateFormatted(user.birthdate) }}
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>
