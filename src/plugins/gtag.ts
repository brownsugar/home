import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const { public: { gaMeasurementId } } = useRuntimeConfig()

  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: gaMeasurementId,
      pageTrackerScreenviewEnabled: true
    }
  }, useRouter())
})
