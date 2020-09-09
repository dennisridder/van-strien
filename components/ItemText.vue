<template>
  <div class="item-Text">
    <markdown :input="blok.text" />
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
    console.log("TEXT", this.blok)
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.item-Button
  button
    background: $black
    color: white
    padding: 15px 17px
    font-size: 14px
    letter-spacing: 4.9px
    text-transform: uppercase
</style>
