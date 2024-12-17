<script setup lang="ts">
const user = shallowRef({
    name: 'John Doe',
    age: 42,
    email: 'john.doe@example.com',
    address: {
        street: '1234 Elm Street',
        city: 'Faketown',
        zip: '12345'
    },
    hobbies: ['skydiving', 'chess', 'collecting stamps'],
    bio: 'Just a regular guy who loves adventure and a good cup of coffee.'
})
</script>

<template>
    <input type="text" :value="user.name" @input="user = {
        ...user, name: ($event?.target as HTMLInputElement).value || ''
    }" />
    <pre>{{ user }}</pre>
</template>