<template>
  <div v-editable="blok" class="item-Message">
    <markdown class="typeTextMessage" :input="blok.message" />
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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Message
    color: $brown
</style>
