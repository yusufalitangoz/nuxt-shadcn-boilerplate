<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  key: "id",
});

const description = computed(() =>
  t((route.meta.description as string) ?? "nuxtSiteConfig.description"),
);
const title = computed(() =>
  t((route.meta.title as string) ?? "nuxtSiteConfig.name"),
);
const siteName = computed(() => t("nuxtSiteConfig.name"));

defineOgImageComponent("Default", {
  description,
  title,
});

useHead({
  titleTemplate: `%s %separator ${siteName.value}`,
});
</script>

<template>
  <Html
    :lang="head.htmlAttrs?.lang ?? 'en'"
    :dir="head.htmlAttrs?.dir ?? 'ltr'"
  >
    <Head>
      <Title>{{ title }}</Title>
      <Meta :content="description" name="description" />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :hreflang="link.hreflang"
          :href="link.href"
          :rel="link.rel"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
