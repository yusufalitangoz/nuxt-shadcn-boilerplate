<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath('/')">
    <NuxtImg
      src="https://nuxt.com/assets/design-kit/icon-green.svg"
      class="w-10"
      alt="Logo"
    />
  </NuxtLink>
</template>
