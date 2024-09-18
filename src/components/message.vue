<template>
  <div class="blankslate blankslate-spacious">
    <h3 class="blankslate-heading">
      <span
        v-if="emoji"
        class="mr-2"
      >{{ emoji }}</span>
      <span>{{ title }}</span>
    </h3>
    <slot
      v-if="$slots.message"
      name="message"
    />
    <p
      v-else
      v-text="message"
    />
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
    default: 'Oops! Something went wrong!',
  },
  message: {
    type: String,
    default: 'Unexpected error occurred.',
  },
  emoji: {
    type: [String, Boolean],
    default: '😵',
  },
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'MessageSlate',
})
</script>
