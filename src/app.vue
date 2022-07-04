<template>
  <div class="profile color-bg-subtle">
    <div class="container-lg px-3 px-md-4 py-3 py-md-4 py-lg-6">
      <div class="Box">
        <div class="Box-header">
          <nav aria-label="Breadcrumb">
            <ol>
              <li class="breadcrumb-item">
                <h1 class="Box-title m-0 d-inline">
                  <a href="https://brownsugar.tw">brownsugar</a>
                </h1>
              </li>
              <li class="breadcrumb-item breadcrumb-item-selected ml-0">
                <a
                  aria-current="page"
                  href="https://github.com/brownsugar/home"
                >Home</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="Box-body">
          <div
            v-if="error"
            class="blankslate blankslate-spacious"
          >
            <h3 class="blankslate-heading">
              <span class="mr-2">😵</span>
              Oops! Something went wrong!
            </h3>
            <p>This profile could not be loaded. Please try again later or visit my GitHub profile page directly.</p>
            <div class="blankslate-action">
              <a
                class="btn btn-primary"
                href="https://github.com/brownsugar"
                target="_blank"
                rel="noopener noreferrer"
              >View on GitHub</a>
            </div>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-else
            class="markdown-body"
            v-html="output"
          />
        </div>
      </div>
      <footer class="color-fg-muted text-center border-top mt-6 pt-4">
        Brownsugar Works © 2009-2022
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = await useFetch<string>(
  'https://raw.githubusercontent.com/brownsugar/brownsugar/main/README.md'
)
const output = await useMarkdown(data.value)

const { app: { baseURL } } = useRuntimeConfig()
const title = 'Brownsugar Works'
const description = 'Brownsugar Works is a concept project created by Lay since 2009 and it\'s also a personal profolio website.'
const favicon = baseURL + 'favicon.ico'
const touchIcon = baseURL + 'images/icon.png'
const coverImage = baseURL + 'images/cover.png'
useHead({
  title,
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
    { property: 'og:url', content: baseURL },
    { property: 'og:description', content: description },
    { property: 'og:image', content: coverImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: 1200 },
    { property: 'og:image:height', content: 630 }
  ]
})
</script>

<style lang="scss" scoped>
.profile {
  min-height: 100vh;
}
</style>
