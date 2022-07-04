import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },
  srcDir: 'src/',
  app: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://brownsugar.tw/'
      : '/'
  },
  css: [
    '@primer/css/index.scss'
  ],
  runtimeConfig: {
    public: {
      gaMeasurementId: 'G-CT5MR0JQV9'
    }
  }
})
