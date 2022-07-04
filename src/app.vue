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
                  target="_blank"
                  rel="noopener noreferrer"
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
        Brownsugar Works. © 2009-2022
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = await useFetch<string>(
  'https://raw.githubusercontent.com/brownsugar/brownsugar/main/README.md'
)
const output = await useMarkdown(data.value)
</script>

<style lang="scss" scoped>
.profile {
  min-height: 100vh;
}
</style>
