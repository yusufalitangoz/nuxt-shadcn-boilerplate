<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
const { statusCode } = error;

useHead({
  title: statusCode.toString(),
});
</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-extrabold mb-5">{{ statusCode }}</h1>
    <Button as-child>
      <NuxtLinkLocale to="/">
        {{ $t("error.button") }}
      </NuxtLinkLocale>
    </Button>
  </main>
  <DevOnly>
    {{ error }}
  </DevOnly>
</template>
