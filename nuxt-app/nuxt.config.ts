// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    "@vueuse/nuxt",
    '@nuxt/image'
  ],
  ssr: false,
  app: {
    head: {
      title: "Nuxt App"
    }
  }
})