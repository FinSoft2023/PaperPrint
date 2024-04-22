// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  extends: ["@nuxt/ui-pro"],
  ui: { icons: [ "mdi" ]}
});
