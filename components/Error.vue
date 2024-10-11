<script setup lang="ts">
defineProps<{ statusCode: number }>();

const localePath = useLocalePath();
</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-extrabold mb-5">{{ statusCode }}</h1>
    <Button as-child>
      <NuxtLink :to="localePath('/')">
        {{ $t("error.button") }}
      </NuxtLink>
    </Button>
  </main>
</template>
