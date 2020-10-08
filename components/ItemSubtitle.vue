<template>
  <div v-editable="blok" class="item-SubTitle">
    <markdown class="typeTextCaps" :input="blok.subtitle" />
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
