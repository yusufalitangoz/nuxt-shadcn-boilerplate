<script setup lang="ts">
defineProps<{
  colorMode: string;
}>();

defineEmits<{
  (e: "update:colorMode", value: string): void;
}>();

const icons = new Map<string, string>([
  ["system", "eva:monitor-outline"],
  ["dark", "akar-icons:moon"],
  ["light", "ph:sun"],
]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="outline">
        <Icon :name="icons.get(colorMode)!" size="18" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem @click="$emit('update:colorMode', 'light')">
        {{ $t("colorMode.light") }}
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('update:colorMode', 'dark')">
        {{ $t("colorMode.dark") }}
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('update:colorMode', 'system')">
        {{ $t("colorMode.system") }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
