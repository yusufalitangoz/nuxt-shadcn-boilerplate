<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const switchLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const localePath = useLocalePath();
const colorMode = useColorMode();

const availableLocales = computed<LocaleObject[]>(() =>
  locales.value
    .filter(({ code }) => code !== locale.value)
    .map((locale) => ({
      ...locale,
      code: switchLocalePath(locale.code),
    })),
);

const linkGroups = computed<LinkGroup[]>(() => [
  {
    name: t("linkGroups.0.name"),
    links: [
      { name: t("linkGroups.0.links.0"), to: localePath("/") },
      { name: t("linkGroups.0.links.1"), to: localePath("/error") },
    ],
  },
]);

const socials: Link[] = [
  {
    to: "https://www.x.com",
    icon: "bi:twitter-x",
    name: "X",
  },
  {
    to: "https://www.instagram.com",
    icon: "bi:instagram",
    name: "Instagram",
  },
  {
    to: "https://www.linkedin.com",
    icon: "bi:linkedin",
    name: "LinkedIn",
  },
];
</script>

<template>
  <div>
    <LayoutHeader :links="linkGroups[0].links">
      <LayoutColorModeMenu
        :color-mode="colorMode.preference"
        @update:color-mode="colorMode.preference = $event"
      />
      <LayoutLanguageMenu :available-locales />
    </LayoutHeader>
    <main class="pt-[65px] min-h-screen">
      <slot />
    </main>
    <LayoutFooter :link-groups :socials />
  </div>
</template>
