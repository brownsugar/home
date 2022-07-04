<template>
  <NuxtLayout>
    <ErrorMessage
      v-if="error"
      message="This profile could not be loaded. Please try again later or visit my GitHub profile page directly."
    >
      <template #action>
        <a
          class="btn btn-primary"
          href="https://github.com/brownsugar"
          target="_blank"
          rel="noopener noreferrer"
        >View on GitHub</a>
      </template>
    </ErrorMessage>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-else
      class="markdown-body"
      v-html="output"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, error } = await useFetch<string>(
  'https://raw.githubusercontent.com/brownsugar/brownsugar/main/README.md'
)
const output = await useMarkdown(data.value)
</script>
