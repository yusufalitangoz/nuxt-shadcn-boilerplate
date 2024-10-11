<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();

useHead({
  title: error.statusCode.toString(),
});
</script>

<template>
  <Error :status-code="error.statusCode" />
</template>
