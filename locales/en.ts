export default {
  nuxtSiteConfig: {
    name: "Nuxt + Shadcn Boilerplate",
    description: "A Nuxt boilerplate with Shadcn",
  },
  colorMode: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  errorPage: {
    button: "Go back to home",
  },
  meta: {
    home: {
      title: "Home",
    },
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
