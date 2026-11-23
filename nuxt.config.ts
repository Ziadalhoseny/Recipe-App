// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image'],
  css: ['@/assets/style.css'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },

  tailwindcss: {
    config: './tailwind.config.cjs',
  },

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', global: true },
    ],
  },

  image: {
    domains: ['cdn.dummyjson.com'],
  },
})
