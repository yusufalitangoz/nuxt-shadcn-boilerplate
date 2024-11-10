<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const { locale, locales } = useI18n();
const colorMode = useColorMode();

const availableLocales = computed<LocaleObject[]>(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const headerLinks: Link[] = [
  { name: "linkGroups.0.links.0", to: "/" },
  { name: "linkGroups.0.links.1", to: "/error" },
];

const footerLinkGroups: LinkGroup[] = [
  {
    name: "linkGroups.0.name",
    links: [
      { name: "linkGroups.0.links.0", to: "/" },
      { name: "linkGroups.0.links.1", to: "/error" },
    ],
  },
];

const footerSocials: Link[] = [
  {
    icon: "bi:twitter-x",
    to: "https://www.twitter.com",
  },
  {
    icon: "bi:instagram",
    to: "https://www.instagram.com",
  },
  {
    icon: "bi:linkedin",
    to: "https://www.linkedin.com",
  },
];
</script>

<template>
  <div>
    <LayoutHeader
      :available-locales="availableLocales"
      :color-mode="colorMode.preference"
      :links="headerLinks"
      @update:color-mode="colorMode.preference = $event"
    />
    <main class="pt-[65px] min-h-screen">
      <slot />
    </main>
    <LayoutFooter :link-groups="footerLinkGroups" :socials="footerSocials" />
  </div>
</template>
