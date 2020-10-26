<template>
  <div class="item-Graphic">
    <div
      v-if="blok.show_graphic === 'leaf'"
      class="item-Graphic_Single item-Graphic_Leaf"
      v-html="require('~/assets/images/leaf.svg?include')"
    />
    <div
      v-if="blok.show_graphic === 'moons'"
      class="item-Graphic_Single item-Graphic_Moons"
      v-html="require('~/assets/images/moons.svg?include')"
    />
    <div
      v-if="blok.show_graphic === 'moonlab'"
      class="item-Graphic_Single item-Graphic_Moonlab"
      v-html="require('~/assets/images/moonlab.svg?include')"
    />
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
.item
  &-Graphic
    position: relative
    margin-bottom: var(--spacing-section-vertical) !important
    &_Single
      position: absolute
      top: 0
      left: 50%
      svg
        width: 100%
        height: auto
    &_Leaf
      width: 9rem
      transform: translate(-50%, -50%)
    &_Moons
      width: 18rem
      transform: translate(-50%, -75%)
    &_Moonlab
      width: 9rem
      transform: translate(-50%, -50%)
</style>
