<template>
  <div v-editable="blok" class="item-Caption">
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

<style lang="sass" scoped>
.item-Caption
  font-size: 14px
  letter-spacing: 0.95px

.section-Message
  .item-Caption
    text-align: center
</style>
