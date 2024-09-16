// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", '@fontsource/quicksand/400.css', '@fontsource/quicksand/700.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  runtimeConfig: {
    public: {
      stripeBeta100Link: process.env.VITE_STRIPE_BETA100_LINK,
    }
  }
});
