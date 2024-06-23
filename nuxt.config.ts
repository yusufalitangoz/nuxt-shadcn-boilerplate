export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
  ],
  site: {
    url: "https://boilerplate.yali.dev",
    name: "Nuxt + Shadcn Boilerplate",
    description: "A Nuxt boilerplate with Shadcn",
  },
});
