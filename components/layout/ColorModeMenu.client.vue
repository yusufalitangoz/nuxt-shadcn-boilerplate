<script setup lang="ts">
defineProps<{
  colorMode: string;
}>();

defineEmits<{
  (e: "update:colorMode", value: string): void;
}>();

const colorModeIcons = new Map<string, string>([
  ["system", "lucide:monitor"],
  ["dark", "lucide:moon"],
  ["light", "lucide:sun"],
]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="outline" aria-label="Color Mode Menu">
        <Icon :name="colorModeIcons.get(colorMode)!" size="18" />
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
