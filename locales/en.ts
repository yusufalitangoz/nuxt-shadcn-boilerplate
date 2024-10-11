export default {
  nuxtSiteConfig: {
    name: "Nuxt + Shadcn Boilerplate",
    description: "A Nuxt boilerplate with Shadcn",
  },
  meta: {
    home: {
      title: "Home",
    },
  },
  error: {
    button: "Go back to home",
  },
  colorMode: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  linkGroups: [
    {
      name: "Navigation",
      links: ["Home", "Error Page"],
    },
  ],
  footer: {
    description: "This is a footer description",
  },
};
