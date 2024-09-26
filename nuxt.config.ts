const baseUrl = process.env.BASE_URL;

export default defineNuxtConfig({
  modules: [
    "@zadigetvoltaire/nuxt-well-known",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/icon",
  ],
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
  wellKnown: {
    devtools: true,
    securityTxt: {
      canonical: [`${baseUrl}/.well-known/security.txt`],
      contacts: ["mailto:you@domain.com"],
      preferredLanguages: ["tr", "en"],
      expires: new Date("2025-09-25"),
      disabled: false,
    },
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  imports: {
    dirs: ["types"],
  },
  typescript: {
    typeCheck: true,
  },
  colorMode: {
    classSuffix: "",
  },
  devtools: {
    enabled: true,
  },
  compatibilityDate: "2024-09-25",
});
