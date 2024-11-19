import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  presetTypography,
  defineConfig,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
