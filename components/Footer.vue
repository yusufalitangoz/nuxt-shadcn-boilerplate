<script setup lang="ts">
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const linkGroups = [
  {
    title: "linkGroups.0.title",
    links: [
      { name: "linkGroups.0.links.0", href: "/" },
      { name: "linkGroups.0.links.1", href: "/not-exist-page" },
    ],
  },
];
const socials = [
  {
    icon: "prime:twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: "bi:instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: "bi:linkedin",
    href: "https://www.linkedin.com",
  },
];
const localePath = useLocalePath();
</script>

<template>
  <footer class="border-t w-full text-sm">
    <section class="container py-10 grid md:grid-cols-2 gap-10">
      <section class="grid place-items-start gap-3">
        <Logo />
        <p class="text-zinc-500 dark:text-zinc-400">
          {{ $t("footer.description") }}
        </p>
        <section class="flex flex-wrap gap-2">
          <Button
            v-for="{ icon, href } in socials"
            :key="icon"
            class="w-8 h-8"
            variant="outline"
            size="icon"
            as-child
          >
            <NuxtLink target="_blank" :to="href">
              <Icon :name="icon" size="17" />
            </NuxtLink>
          </Button>
        </section>
      </section>
      <section class="flex flex-wrap gap-10 md:justify-end">
        <section
          v-for="{ title, links } in linkGroups"
          :key="title"
          class="space-y-3"
        >
          <h1 class="font-semibold">{{ $t(title) }}</h1>
          <NavigationMenu>
            <NavigationMenuList class="grid -ml-4">
              <NavigationMenuItem v-for="{ name, href } in links" :key="href">
                <NuxtLink
                  :class="navigationMenuTriggerStyle()"
                  :href="localePath(href)"
                >
                  {{ $t(name) }}
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </section>
    </section>
  </footer>
</template>
