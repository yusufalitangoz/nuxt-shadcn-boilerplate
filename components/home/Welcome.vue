<script setup lang="ts">
defineProps<{ package: object }>();
</script>

<template>
  <section class="container my-16 grid place-items-center">
    <section class="grid text-center">
      <h1 class="text-5xl font-bold mb-3">
        {{ $t("nuxtSiteConfig.name") }}
      </h1>
      <p class="text-3xl text-muted-foreground">
        {{ $t("nuxtSiteConfig.description") }}
      </p>
      <div class="flex flex-wrap justify-center gap-3 my-10">
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
            <Icon name="simple-icons:github" class="mr-2" size="18" />
            GitHub
          </NuxtLink>
        </Button>
      </div>
    </section>
    <pre class="text-xs border p-5 rounded-lg overflow-auto w-full max-w-max">{{
      package
    }}</pre>
  </section>
</template>
