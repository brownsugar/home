<template>
  <NuxtLayout>
    <Message
      v-if="pending"
      title="Please wait"
      emoji="⏳"
    >
      <template #message>
        <p><span>The content is now loading</span><span class="AnimatedEllipsis" /></p>
      </template>
    </Message>
    <Message
      v-else-if="error || !data.length"
      message="The content could not be loaded. Please visit my GitHub profile page directly or try again later."
    >
      <template #action>
        <a
          class="btn btn-primary"
          href="https://github.com/brownsugar"
          target="_blank"
          rel="noopener noreferrer"
        >View on GitHub</a>
      </template>
    </Message>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-else
      class="markdown-body"
      v-html="data"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useAsyncData<string>(
  'readme',
  async () => useMarkdown(
    await $fetch('/api', {
      params: {
        target: 'https://raw.githubusercontent.com/brownsugar/brownsugar/main/README.md'
      }
    })
  ),
  {
    lazy: true
  }
)
</script>
