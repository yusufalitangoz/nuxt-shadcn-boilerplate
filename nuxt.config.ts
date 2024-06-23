export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/motion/nuxt",
  ],
  site: {
    url: "https://boilerplate.yali.dev",
    name: "Nuxt + Shadcn Boilerplate",
    description: "A Nuxt boilerplate with Shadcn",
  },
});
