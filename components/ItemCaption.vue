<template>
  <div class="item-Caption">
    <markdown :input="blok.caption" />
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
