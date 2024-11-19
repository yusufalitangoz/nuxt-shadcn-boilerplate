import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  presetTypography,
  presetWebFonts,
  defineConfig,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTypography(),
    presetWebFonts(),
    presetIcons(),
    presetUno(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
