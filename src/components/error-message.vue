<template>
  <div class="blankslate blankslate-spacious">
    <h3 class="blankslate-heading">
      <span class="mr-2">😵</span>
      {{ title }}
    </h3>
    <p>{{ message }}</p>
    <div
      v-if="$slots.action"
      class="blankslate-action"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Oops! Something went wrong!'
  },
  message: {
    type: String,
    default: 'Unexpected error occurred.'
  }
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'ErrorMessage'
})
</script>
