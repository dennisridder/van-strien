<template>
  <div class="section-Wrapper section-Page section-PageContact">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <div class="item-Graphic">
      <div
        class="item-Graphic_MoonCircle"
        v-html="require('~/assets/images/moons.svg?include')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    this.positionMoon()
  },
  methods: {
    positionMoon() {
      setTimeout(function () {
        var graphic = document.querySelector(".item-Graphic_MoonCircle")
        var passage = document.querySelector(".section-Passage_Left")
        var passageHeight = passage.clientHeight
        var passageWidth = passage.clientWidth
        graphic.style.top = passageHeight + "px"
        graphic.style.left = passageWidth / 2 + "px"
        graphic.style.opacity = 1
      }, 25)
    }
  }
}
</script>

<style lang="sass">
.section
  &-PageContact
    .item-Graphic, .item-Graphic_MoonCircle
      position: absolute
      top: 0
      left: 0
    .item-Graphic_MoonCircle
      opacity: 0
      width: 18rem
      transform: translate(-50%, -1rem)
</style>
