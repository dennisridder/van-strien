<template>
  <div v-editable="blok" class="item-Quote">
    <markdown :input="blok.quote" />
  </div>
</template>

<script>
import Markdown from "~/components/Markdown.vue"

export default {
  components: {
    markdown: Markdown
  },
  props: {
    blok: Object
  }
}
</script>
