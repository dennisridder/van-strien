<template>
  <div v-if="image" v-editable="image" class="item-Door">
    <div class="item-Door_aspectRatioBox">
      <!-- prettier-ignore -->
      <img
      v-lazy="`${transformImage(image, '1440x0/filters:format(jpg):quality(80)')}`"
      :data-srcset="`
          ${transformImage(image, '2000x0/filters:quality(80)')} 2000w,
          ${transformImage(image, '1600x0/filters:quality(80)')} 1600w,
          ${transformImage(image, '140x0/filters:quality(80)')} 140w, 
          ${transformImage(image, '1200x0/filters:quality(80)')} 1200w,
          ${transformImage(image, '1000x0/filters:quality(80)')} 1000w, 
          ${transformImage(image, '800x0/filters:quality(80)')} 800w, 
          ${transformImage(image, '600x0/filters:quality(80)')} 600w, 
          ${transformImage(image, '400x0/filters:quality(80)')} 400w, 
          `"
      class="lazy scrollSlow-Door"
      sizes="(min-width: 800px) 33vw, (min-width: 1360px) 26vw, 100vw"
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
    border-radius: 1000px 1000px 0 0
    overflow: hidden
    @media screen and (min-width: $breakpoint-mobile)
      max-width: 33vw
    @media screen and (min-width: $breakpoint-laptop)
      max-width: 26vw
    &_aspectRatioBox
      position: relative
      width: 100%
      height: 0
      padding-top: 125%
      border-radius: 1000px 1000px 0 0
      overflow: hidden
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
  box-shadow: inset 1px 1px 4px 0px rgba(#000000, 0.5)
  -webkit-box-shadow: inset 1px 1px 4px 0px rgba(#000000, 0.5)
  border-radius: 1000px 1000px 0 0
  top: 0
  left: 0
  opacity: .2
  overflow: hidden

.section-BlogHorizontal, .section-BlogGrid
  .item-Door
    @media screen and (min-width: $breakpoint-mobile)
      max-width: 21vw

.section-BlogHorizontal
  .item-Door
    @media screen and (max-width: $breakpoint-mobile)
      max-width: 40vw
</style>
