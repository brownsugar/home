<template>
  <NuxtLayout error>
    <Message
      :title="title"
      :message="message"
    >
      <template #action>
        <a
          class="btn btn-primary"
          @click="backToHome"
        >Back to Home</a>
      </template>
    </Message>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  error: {
    type: Object as PropType<ReturnType<typeof showError>>,
    default: () => ({}),
  },
})

const error = toRef(props, 'error')
const statusCode = computed(() => Number(error.value.statusCode || 500))
const title = computed(() => `Error ${statusCode.value}`)
const message = computed(() =>
  error.value.statusMessage as string
  ?? (statusCode.value === 404 ? 'Page Not Found' : 'Internal Server Error'),
)

const backToHome = async () => {
  const route = useRoute()

  if (route.path === '/')
    window.location.reload()
  else
    await clearError({ redirect: '/' })
}

useHead({
  title: title.value,
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'ErrorPage',
})
</script>
