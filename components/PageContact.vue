<template>
  <div class="section-Wrapper section-Page section-PageContact">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
