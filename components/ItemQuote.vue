<template>
  <div v-editable="blok" class="item-Quote">
    <markdown class="typeQuote" :input="blok.quote" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Quote
  position: relative
  display: flex
  justify-content: space-around
  text-align: center
  .markdown
    max-width: 20em
  &::before
    content: ''
    position: absolute
    bottom: -1.5em
    width: 6em
    height: 1px
    background: $darkbrown
</style>
