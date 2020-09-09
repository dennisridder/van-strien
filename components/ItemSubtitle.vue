<template>
  <div v-editable="blok" class="item-SubTitle">
    <markdown :input="blok.subtitle" />
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
@import '~/assets/styles/variables.sass'

.item-SubTitle
  text-transform: uppercase

.section-Landing
  .item-SubTitle
    font-size: 16px
    letter-spacing: 5.6px
    text-align: center

.section-Passage, .section-BlogHorizontal, .section-Footer, .section-Steps
  .item-SubTitle
    font-size: 18px
    letter-spacing: 6.3px

.section-Message
  .item-SubTitle
    font-size: 16px
    letter-spacing: 5.6px
    text-align: center
</style>
