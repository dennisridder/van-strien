<template>
  <div v-editable="blok" class="item-Button">
    <button>{{ blok.title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.item-Button
  button
    background: $black
    color: white
    padding: 15px 30px
    font-size: 14px
    letter-spacing: 4.9px
    text-transform: uppercase
    margin-bottom: var(--spacing-item-one)
    &:last-child
      margin-bottom: 0
</style>
