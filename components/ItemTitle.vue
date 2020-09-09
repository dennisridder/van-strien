<template>
  <div v-editable="blok" class="item-Title">
    <h1>{{ blok.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("ITEM TITLE", this.blok)
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.item-Title
  text-transform: uppercase

.section-Landing
  .item-Title
    text-align: center
    font-size: 92px
    font-family: 'Canela Light Italic'
    letter-spacing: 4.6px

.section-Passage, .section-BlogHorizontal, .section-Footer, .section-Steps
  .item-Title
    font-size: 18px
    letter-spacing: 6.3px

.section-Message
  .item-Title
    font-size: 16px
    letter-spacing: 5.6px
    text-align: center
</style>
