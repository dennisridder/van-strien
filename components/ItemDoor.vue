<template>
  <div v-if="image" v-editable="image" class="item-Door">
    <div class="item-Door_aspectRatioBox">
      <!-- prettier-ignore -->
      <img
      v-lazy="`${transformImage(image, '1440x0')}`"
      :data-srcset="
        `${transformImage(image, '400x0')} 400w, 
          ${transformImage(image, '800x0')} 800w, 
          ${transformImage(image, '1200x0')} 1200w,
          ${transformImage(image, '1600x0')} 1600w,
          ${transformImage(image, '2000x0')} 2000w`"
      class="lazy scrollSlow-Door"
      :alt="alt" />
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { image: String, alt: String },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Door
    position: relative
    width: 100%
    z-index: +1
    &_aspectRatioBox
      position: relative
      width: 100%
      height: 0
      padding-top: 125%
      overflow: hidden
      border-radius: 1000px 1000px 0 0
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
