<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const switchLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const localePath = useLocalePath();
const colorMode = useColorMode();

const availableLocales = computed<LocaleObject[]>(() => {
  return locales.value
    .filter((i) => i.code !== locale.value)
    .map((locale) => ({
      ...locale,
      code: switchLocalePath(locale.code),
    }));
});

const headerLinks = computed<Link[]>(() =>
  [
    { name: "linkGroups.0.links.0", to: "/" },
    { name: "linkGroups.0.links.1", to: "/error" },
  ].map(({ name, to }) => ({
    to: localePath(to),
    name: t(name),
  })),
);

const footerLinkGroups = computed<LinkGroup[]>(() =>
  [
    {
      name: "linkGroups.0.name",
      links: [
        { name: "linkGroups.0.links.0", to: "/" },
        { name: "linkGroups.0.links.1", to: "/error" },
      ],
    },
  ].map(({ name, links }) => ({
    name: t(name),
    links: links.map(({ name, to }) => ({
      name: t(name),
      to: localePath(to),
    })),
  })),
);

const footerSocials = computed<Link[]>(() =>
  [
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
  ].map((link) => ({
    ...link,
    to: localePath(link.to),
  })),
);
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
