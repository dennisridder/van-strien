<template>
  <div v-editable="blok" class="item-Caption">
    <markdown class="typeCaption" :input="blok.caption" />
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
