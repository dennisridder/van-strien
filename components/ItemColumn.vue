<template>
  <div
    v-editable="blok"
    class="item-Column"
    :class="`textAlign-${blok.text_align}`"
    :style="blockStyles"
  >
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  computed: {
    blockStyles() {
      let styles = {
        textAlign: this.blok.text_align
      }

      if (this.blok.background_color) {
        styles.backgroundColor = this.blok.background_color
        styles.borderRadius = "0.5rem"
        styles.padding = "4rem 3rem"
      }

      if (this.blok.text_color) {
        styles.color = this.blok.text_color
      }

      return styles
    }
  }
}
</script>

<style lang="sass">
.item-Column
  > *
    margin-bottom: 2rem
    &:last-child
      margin-bottom: 0

  &.textAlign-left
    .item-Title
      text-align: left !important

  &.textAlign-right
    .item-Title
      text-align: right !important
</style>
