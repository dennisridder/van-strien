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
.item-Quote
  display: flex
  justify-content: space-around
  text-align: center
  .markdown
    max-width: 20em
</style>
