<script setup lang="ts">
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

defineProps<{
  linkGroups: LinkGroup[];
  socials: Link[];
}>();
</script>

<template>
  <footer class="border-t w-full text-sm">
    <section class="container py-10 grid md:grid-cols-2 gap-10">
      <section class="grid place-items-start gap-3">
        <Logo />
        <p class="text-muted-foreground">
          {{ $t("footer.description") }}
        </p>
        <section class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="{ icon, to } in socials"
            :key="icon"
            target="_blank"
            :to="to"
          >
            <Button variant="outline" class="size-8" size="icon">
              <Icon :name="icon!" size="17" />
            </Button>
          </NuxtLink>
        </section>
      </section>
      <section class="flex flex-wrap gap-10 md:justify-end">
        <section
          v-for="{ name, links } in linkGroups"
          :key="name"
          class="space-y-3"
        >
          <h1 class="font-semibold">{{ name }}</h1>
          <NavigationMenu>
            <NavigationMenuList class="grid -ml-4">
              <NavigationMenuItem
                v-for="{ name: linkName, to } in links"
                :key="to"
              >
                <NuxtLink :class="navigationMenuTriggerStyle()" :to="to">
                  {{ linkName }}
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </section>
    </section>
  </footer>
</template>
