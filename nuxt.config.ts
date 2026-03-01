// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
  srcDir: 'src/',
  serverDir: 'src/server',
  css: [
    'assets/primer.scss',
  ],
  runtimeConfig: {
    public: {
      server: process.env.NODE_ENV === 'production'
        ? 'https://brownsugar.tw'
        : 'http://localhost:3000',
    },
  },
  modules: [
    '@nuxt/devtools',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-CT5MR0JQV9',
  },
  compatibilityDate: '2024-09-18',
})
