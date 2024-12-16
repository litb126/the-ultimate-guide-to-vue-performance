<script setup>
import { computed } from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const birthdateFormatted = computed(() => {
  return new Date(props.user.birthdate).toLocaleDateString();
});

const registeredAtFormatted = computed(() => {
  return new Date(props.user.registeredAt).toLocaleDateString();
});
</script>
<template>
  <div class="p-4 my-2 shadow-xl card card-side bg-base-100">
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
          {{ birthdateFormatted }}
        </div>
      </div>
    </div>
  </div>
</template>
