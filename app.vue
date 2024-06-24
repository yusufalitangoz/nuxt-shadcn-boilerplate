<script setup lang="ts">
const route = useRoute();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() => route.meta.title || "nuxtSiteConfig.name");
const description = computed(
  () => route.meta.description || "nuxtSiteConfig.description"
);
defineOgImageComponent("NuxtSeo");
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ $t(title) }}</Title>
      <Meta :content="$t(description)" name="description" />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body class="font-[Rubik]">
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <main class="min-h-screen">
          <NuxtPage />
        </main>
      </NuxtLayout>
    </Body>
  </Html>
</template>
