<template>
  <div v-if="image" v-editable="image" class="item-Door">
    <img :src="image" :alt="alt" class="scrollSlow-Door" />
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  props: { image: String, alt: String }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Door
    position: relative
    width: 100%
    height: 0
    padding-top: 125%
    border-radius: 1000px 1000px 0 0
    overflow: hidden
    z-index: +1
    img
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      object-fit: cover
      transform: scale(1.1)
      z-index: -1

.shadow
  position: absolute
  width: 100%
  height: 100%
  box-shadow: inset 2px 2px 5px 0px #000000
  border-radius: 1000px 1000px 0 0
  top: 0
  left: 0
  opacity: .2
</style>
