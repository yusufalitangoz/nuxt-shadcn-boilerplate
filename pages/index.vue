<script setup>
import packageJson from "@/package.json";
definePageMeta({
  title: "meta.home.title",
});
</script>

<template>
  <section class="container my-16 grid place-items-center">
    <section class="grid text-center">
      <h1 class="text-5xl font-bold mb-3">
        {{ $t("nuxtSiteConfig.name") }}
      </h1>
      <p class="text-3xl text-zinc-500 dark:text-zinc-400">
        {{ $t("nuxtSiteConfig.description") }}
      </p>
      <section class="space-x-3 my-10">
        <Button as-child>
          <NuxtLink target="_blank" to="https://nuxt.com">
            <Icon name="logos:nuxt-icon" class="mr-2" />
            Nuxt
          </NuxtLink>
        </Button>
        <Button as-child>
          <NuxtLink target="_blank" to="https://www.shadcn-vue.com">
            <Icon name="simple-icons:shadcnui" class="mr-2 text-green-500" />
            Shadcn
          </NuxtLink>
        </Button>
        <Button as-child>
          <NuxtLink
            to="https://github.com/yusufalitangoz/nuxt-shadcn-boilerplate"
            target="_blank"
          >
            <Icon name="bi:github" class="mr-2" />
            GitHub
          </NuxtLink>
        </Button>
      </section>
    </section>
    <pre
      class="text-xs ring-1 ring-border p-5 rounded-lg bg-zinc-100 dark:bg-black overflow-auto w-full max-w-max"
      >{{ packageJson }}</pre
    >
  </section>
</template>
