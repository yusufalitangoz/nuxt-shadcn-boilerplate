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
  errorPage: {
    button: "Go back to home",
  },
  colorMode: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  linkGroups: [
    {
      title: "Navigation",
      links: ["Home", "Error Page"],
    },
  ],
  footer: {
    description: "This is a footer description",
  },
};
