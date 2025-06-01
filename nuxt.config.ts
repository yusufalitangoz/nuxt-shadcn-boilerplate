import tailwindcss from "@tailwindcss/vite";

const baseUrl = process.env.BASE_URL;

export default defineNuxtConfig({
  modules: [
    "@zadigetvoltaire/nuxt-well-known",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "@vee-validate/nuxt",
    "@nuxtjs/fontaine",
    "nuxt-vitalizer",
    "nuxt-security",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxt/icon",
    "nuxt-svgo",
  ],
  i18n: {
    locales: [
      {
        language: "tr-TR",
        name: "Türkçe",
        file: "tr.ts",
        code: "tr",
      },
      {
        language: "en-US",
        name: "English",
        file: "en.ts",
        code: "en",
      },
    ],
    defaultLocale: "tr",
    baseUrl,
  },
  wellKnown: {
    securityTxt: {
      canonical: [`${baseUrl}/.well-known/security.txt`],
      expires: new Date("2025-03-30").toISOString(),
      contacts: ["mailto:you@domain.com"],
      preferredLanguages: ["tr", "en"],
      disabled: false,
    },
    devtools: true,
  },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  robots: {
    blockNonSeoBots: true,
  },
  svgo: {
    autoImportPath: false,
  },
  security: {
    rateLimiter: false,
  },
  sitemap: {
    autoLastmod: true,
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

  compatibilityDate: "2025-03-30",
});
