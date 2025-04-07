<template>
  <span>
    <div
      v-if="props.text.type && props.text.type === 'doc'"
      class="inline-rich-text"
    >
      <div v-html="content" />
    </div>
  </span>
</template>

<script>
export default {
  props: {
    text: Object
  },
  computed: {
    content() {
      if (!props.text.content) return ""

      let content = ""

      return props.text.content.map("").implode("<br />")
    }
  }
}
</script>
