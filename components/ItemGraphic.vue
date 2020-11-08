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
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style lang="sass">
.item
  &-Graphic
    position: relative
    margin-bottom: var(--spacing-section-vertical) !important
    z-index: +1
    // border: 1px solid orange
    &_Single
      position: absolute
      top: 0
      left: 50%
      svg
        width: 100%
        height: auto
    &_Leaf
      width: 15rem
      transform: translate(-50%, -50%)
      // border: 1px solid purple
    &_Moons
      width: 22rem
      transform: translate(-50%, -75%)
      // border: 1px solid red
    &_Moonlab
      width: 9rem
      transform: translate(-50%, -50%)
      // border: 1px solid blue
</style>
