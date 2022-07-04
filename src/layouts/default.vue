<template>
  <div class="layout-default color-bg-subtle">
    <div class="container-lg px-3 px-md-4 py-3 py-md-4 py-lg-6">
      <div class="Box">
        <div class="Box-header">
          <nav aria-label="Breadcrumb">
            <ol>
              <li class="breadcrumb-item">
                <h1 class="Box-title m-0 d-inline">
                  <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                  <NuxtLink to="/">Brownsugar Works</NuxtLink>
                </h1>
              </li>
              <li class="breadcrumb-item breadcrumb-item-selected ml-0">
                <del v-if="error">{{ currentPath }}</del>
                <a
                  v-else
                  aria-current="page"
                  href="https://github.com/brownsugar/home"
                >Home</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="Box-body">
          <slot />
        </div>
      </div>
      <footer class="color-fg-muted text-center border-top mt-6 pt-4">
        Brownsugar Works © 2009-{{ currentYear }}
        <a
          class="ml-1"
          href="https://github.com/brownsugar/home"
        >
          <span class="Label">Source code</span>
        </a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const currentPath = computed(() => {
  const path = route.path
  return path === '/' ? 'Home' : path.slice(1)
})
const currentYear = new Date().getFullYear()

const { public: { server } } = useRuntimeConfig()
const title = 'Brownsugar Works'
const description = 'Brownsugar Works is a concept project created by Lay since 2009 and it\'s also a personal profolio website.'
const favicon = server + '/favicon.ico'
const touchIcon = server + '/images/icon.png'
const coverImage = server + '/images/cover.png'
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title}` : title
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'apple-touch-icon', href: touchIcon },
    { rel: 'image_src', href: coverImage }
  ],
  meta: [
    { name: 'theme-color', content: '#F6F8FA' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#F6F8FA' },
    { name: 'description', content: description },
    { property: 'og:site_name', content: title },
    { property: 'og:title', content: title },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:url', content: server },
    { property: 'og:description', content: description },
    { property: 'og:image', content: coverImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: 1200 },
    { property: 'og:image:height', content: 630 }
  ]
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'LayoutDefault'
})
</script>

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;
}
</style>
