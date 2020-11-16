<template>
  <div class="item-Graphic" :class="blok.show_graphic">
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
@import '~/assets/styles/variables.sass'

.item
  &-Graphic
    position: relative
    margin: 0
    padding: 0
    z-index: +1
    &.moons
      margin-bottom: 12.5rem
    &_Single
      position: absolute
      top: calc(0px - #{var(--spacing-section-vertical)})
      left: 50%
      svg
        width: 100%
        height: auto
    &_Leaf
      width: 15rem
      transform: translate(-50%, -50%)
      top: calc(0px - #{var(--spacing-section-vertical)})
      @media screen and (max-width: $breakpoint-mobile)
        margin-top: var(--spacing-item-vertical)
    &_Moons
      width: 22rem
      transform: translate(-50%, -50%)
      top: calc(0px - (#{var(--spacing-section-vertical)} / 2))
      @media screen and (max-width: $breakpoint-mobile)
        margin-top: var(--spacing-item-vertical)
    &_Moonlab
      width: 9rem
      transform: translate(-50%, -50%)
      top: calc(0px - #{var(--spacing-section-vertical)})
      // border: 1px solid blue
</style>
