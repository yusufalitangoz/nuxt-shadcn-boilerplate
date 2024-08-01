const baseUrl = process.env.BASE_URL;

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
    "@zadigetvoltaire/nuxt-well-known",
  ],
  compatibilityDate: "2024-08-01",
  wellKnown: {
    devtools: false,
    securityTxt: {
      disabled: false,
      contacts: ["mailto:you@domain.com"],
      expires: new Date("2025-08-01"),
      preferredLanguages: ["tr", "en"],
      canonical: [`${baseUrl}/.well-known/security.txt`],
    },
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  i18n: {
    baseUrl,
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
