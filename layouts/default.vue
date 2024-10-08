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
      name: "linkGroups.0.title",
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
      icon: "prime:twitter",
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
  <section>
    <Header :links="headerLinks">
      <HeaderLangSwitcher :available-locales="availableLocales" />
      <HeaderColorModeSwitcher
        :color-mode="colorMode.preference"
        @update:color-mode="colorMode.preference = $event"
      />
    </Header>
    <main class="pt-[65px]">
      <slot />
    </main>
    <Footer :link-groups="footerLinkGroups" :socials="footerSocials" />
  </section>
</template>
