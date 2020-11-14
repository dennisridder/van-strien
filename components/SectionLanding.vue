<template>
  <section class="section section-Landing">
    <div v-if="this.$route.name == 'index'" class="section-Landing_Logo">
      <div
        class="icon rotate"
        v-html="require('~/assets/images/logo-circle.svg?include')"
      />
    </div>
    <div v-if="this.$route.path == '/moonlab'" class="section-Landing_Logo">
      <div
        class="icon rotate"
        v-html="require('~/assets/images/logo-moonlab-circle.svg?include')"
      />
    </div>
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
      v-lazy="`${transformImage(blok.background_image, '1680x0/filters:format(jpg):quality(40)')}`"
      :data-srcset="
        `${transformImage(blok.background_image, '2880x0/filters:quality(40)')} 2880w,
        ${transformImage(blok.background_image, '2560x0/filters:quality(40)')} 2560w, 
        ${transformImage(blok.background_image, '1920x0/filters:quality(40)')} 1920w, 
        ${transformImage(blok.background_image, '1680x0/filters:quality(40)')} 1680w, 
        ${transformImage(blok.background_image, '1280x0/filters:quality(40)')} 1280w,
        ${transformImage(blok.background_image, '1024x0/filters:quality(40)')} 1024w, 
        ${transformImage(blok.background_image, '768x0/filters:quality(40)')} 768w`"
      class="lazy scrollSlow-Landing"
      sizes="100w"
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
    .icon
      width: 12rem
      height: 12rem
  &_Content
    flex-direction: column
    flex-shrink: 0
    text-align: center
    .item-Button
      color: $darkbrown
</style>
