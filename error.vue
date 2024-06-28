<script setup lang="ts">
import type { NuxtError } from "#app";
defineProps({
  error: Object as () => NuxtError,
});
const localePath = useLocalePath();
</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-extrabold mb-5">{{ error.statusCode }}</h1>
    <Button as-child>
      <NuxtLink :to="localePath('/')">
        {{ $t("errorPage.button") }}
      </NuxtLink>
    </Button>
  </main>
</template>
