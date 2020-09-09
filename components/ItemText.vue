<template>
  <div v-editable="blok" class="item-Text">
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

.item-Text
  font-family: 'Artegra Sans Alt Medium'
  font-size: 19px
  letter-spacing: 0.95px
  line-height: 42px
</style>
