<script setup lang="ts">
defineProps<{
  description: string;
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col w-full h-full p-20">
    <h1 class="text-7xl">
      {{ title }}
    </h1>
    <p class="text-4xl">
      {{ description }}
    </p>
  </div>
</template>
