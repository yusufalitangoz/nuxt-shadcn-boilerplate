<script setup lang="ts">
const colorMode = useColorMode();

const icon = new Map([
  ["system", "eva:monitor-outline"],
  ["dark", "akar-icons:moon"],
  ["light", "ph:sun"],
]);
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button size="icon" variant="outline">
          <Icon :name="icon.get(colorMode.preference)!" size="18" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem @click="colorMode.preference = 'light'">
          {{ $t("colorMode.light") }}
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'">
          {{ $t("colorMode.dark") }}
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'">
          {{ $t("colorMode.system") }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ClientOnly>
</template>
