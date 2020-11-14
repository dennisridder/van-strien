<template>
  <div v-editable="blok" class="item-Vertical">
    <div class="item-Vertical_Left item-Vertical_Item">
      <p class="typeLink">{{ blok.text_left_side }}</p>
    </div>
    <div class="item-Vertical_Item item-Vertical_Right">
      <p class="typeLink">{{ blok.text_right_side }}</p>
    </div>
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

.item
  &-Vertical
    display: none
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    pointer-events: none
    @media screen and (min-width: $breakpoint-laptop)
      display: block
    &_Item
      position: absolute
      top: 50%
    &_Left
      left: 0
      transform: rotate(-90deg) translate(-50%, 3vw)
      transform-origin: center left
    &_Right
      right: 0
      transform: rotate(90deg) translate(50%, 3vw)
      transform-origin: center right
</style>
