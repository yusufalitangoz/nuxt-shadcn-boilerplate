export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
  ],
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  i18n: {
    baseUrl: "https://boilerplate.yali.dev",
    defaultLocale: "tr",
    langDir: "locales/",
    locales: [
      {
        code: "tr",
        name: "Türkçe",
        iso: "tr-TR",
        file: "tr.ts",
      },
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.ts",
      },
    ],
  },
  colorMode: {
    classSuffix: "",
  },
});
