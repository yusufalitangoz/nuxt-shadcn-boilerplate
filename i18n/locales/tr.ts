export default {
  nuxtSiteConfig: {
    name: "Nuxt + Shadcn Başlangıç Şablonu",
    description: "Shadcn ile bir Nuxt başlangıç şablonu",
  },
  meta: {
    home: {
      title: "Ana Sayfa",
    },
  },
  error: {
    button: "Ana sayfaya dön",
  },
  colorMode: {
    light: "Açık",
    dark: "Koyu",
    system: "Sistem",
  },
  linkGroups: [
    {
      name: "Genel",
      links: ["Ana Sayfa", "Hata Sayfası"],
    },
    {
      name: "Sosyal Medya",
    },
  ],
};
