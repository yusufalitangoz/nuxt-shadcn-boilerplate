import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
  },
});
