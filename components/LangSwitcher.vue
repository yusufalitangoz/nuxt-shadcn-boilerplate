<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button size="icon" variant="outline">
          <Icon name="iconoir:language" size="18" />
        </Button>
      </DropdownMenuTrigger>
      <ClientOnly>
        <DropdownMenuContent>
          <DropdownMenuItem
            v-for="{ code, name } in availableLocales"
            :key="code"
            as-child
          >
            <NuxtLink :to="switchLocalePath(code)">
              {{ name }}
            </NuxtLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </ClientOnly>
    </DropdownMenu>
  </ClientOnly>
</template>
