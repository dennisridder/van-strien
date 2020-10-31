<template>
  <section class="section section-Landing">
    <div class="section-Landing_Content section-Content">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
    <!-- prettier-ignore -->
    <img
      v-lazy="`${transformImage(blok.background_image, '1440x0')}`"
      :data-srcset="
        `${transformImage(blok.background_image, '400x0')} 400w, 
          ${transformImage(blok.background_image, '800x0')} 800w, 
          ${transformImage(blok.background_image, '1200x0')} 1200w,
          ${transformImage(blok.background_image, '1600x0')} 1600w,
          ${transformImage(blok.background_image, '2000x0')} 2000w`"
      class="lazy scrollSlow-Landing"
      :alt="blok.background_image" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
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

.section-Landing
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-end
  width: 100%
  min-height: 100vh
  padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
  background: rgba(0,0,0,0)
  color: white
  box-shadow: inset 0px -2px 5px 0px rgba(0,0,0,.2)
  img
    position: absolute
    top: 0
    right: 0
    width: 100%
    height: 100%
    object-fit: cover
    z-index: -1
  > div
    display: flex
    justify-content: space-around
    margin-bottom: var(--spacing-item-vertical)
  > div:last-child
    margin-bottom: 0
  &_Logo
    flex-grow: 1
    text-align: center
    &_Item
      width: 220px
      height: 220px
      background: $darkbrown
  &_Content
    flex-direction: column
    flex-shrink: 0
    text-align: center
    .item-Button
      color: $darkbrown
</style>
