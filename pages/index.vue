<script setup lang="ts">
import packageJson from "@/package.json";

definePageMeta({
  title: "meta.home.title",
});
</script>

<template>
  <HomeWelcome :package="packageJson" />
</template>
