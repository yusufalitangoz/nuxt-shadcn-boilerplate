<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

defineProps<{
  availableLocales: LocaleObject[];
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="outline">
        <Icon name="iconoir:language" size="18" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        v-for="{ code, name } in availableLocales"
        :key="code"
        as-child
      >
        <NuxtLink :to="code">
          {{ name }}
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
