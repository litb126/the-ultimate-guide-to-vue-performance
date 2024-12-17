<script setup lang="ts">
import MainNav from './_internal/components/MainNav/MainNav.vue';
import TopAlertVueApp from './_internal/components/TopAlertVueApp.vue';
</script>

<template>
  <TopAlertVueApp />
  <MainNav>
    <RouterView />
  </MainNav>
</template>
