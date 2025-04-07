<template>
  <blockquote v-editable="blok" class="item-Testimonial">
    <markdown class="typeText" :input="blok.text" />
    <cite>{{ blok.name }}</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
.item-Testimonial
  text-align: left
  padding-bottom: 1.25rem

  cite
    display: inline-block
    font-family: 'Artegra Sans Extended Medium'
    text-transform: uppercase
    font-size: 0.925rem
    letter-spacing: 0.125em
    padding-top: 1rem

    &:before
      content: '— '
</style>
