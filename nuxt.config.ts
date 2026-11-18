// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image'],
  css: ['~/assets/style.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'dodgeroll-gold': '#f79f1a',
            'apple-green': '#046e1b',
            'dire-wolf': '#292727',
          },
        },
        container: {
          center: true,
          padding: "2rem",
        },
      },
    },
  },
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', global: true },
    ],
  },
})
