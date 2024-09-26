<script setup lang="ts">
defineProps<{
  icon: string;
}>();

defineEmits<{
  (e: "update:colorMode", value: string): void;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="outline">
        <Icon :name="icon" size="18" />
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
