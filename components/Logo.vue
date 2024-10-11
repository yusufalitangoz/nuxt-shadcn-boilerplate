<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath('/')">
    <NuxtImg src="/logo.png" class="w-10" alt="Logo" />
  </NuxtLink>
</template>
