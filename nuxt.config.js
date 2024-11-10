// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable SSR to create a static site
  generate: {
    fallback: true, // Optional: for SPA behavior (404.html)
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    ['@vee-validate/nuxt', { autoImports: true }],
    'dayjs-nuxt',
    ['@vueuse/nuxt', { ssr: false }],
    ['@nuxtjs/sitemap'],
  ],

  css: ['~/assets/scss/index.scss'],

  runtimeConfig: {
    public: {
      appBaseUrl: process.env.APP_BASE_URL,
      appSiteUrl: process.env.APP_SITE_URL,
      serverBaseUrl: process.env.SERVER_BASE_URL,
      serverApiUrl: process.env.SERVER_API_URL,
      apiVersion: process.env.API_VERSION,
    },
  },

  app: {
    head: {
      title: 'ITE',
    },
  },
  sitemap: {
    hostname: process.env.APP_SITE_URL || 'https://yourwebsite.com',
    routes: async () => {
      return [
        '/page-1',
        '/page-2',
        '/products/product-1',
        '/products/product-2',
      ]
    },
    gzip: true,
    exclude: ['/admin/**'],
  },

  compatibilityDate: '2024-11-10',
})
