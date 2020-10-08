<template>
  <div v-editable="blok" class="item-Text">
    <markdown class="typeText" :input="blok.text" />
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
  },
  mounted() {
    // console.log("TEXT", this.blok)
  }
}
</script>
