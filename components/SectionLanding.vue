<template>
  <section
    class="section section-Landing"
    :class="{ autoHeight: blok.auto_height, autoColor: blok.auto_color }"
    :style="{
      backgroundColor: blok.background_color,
      color: blok.text_color,
      justifyContent: getVerticalAlign(blok.vertical_align)
    }"
  >
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
    <!-- prettier-ignore -->
    <div class="fade-In">
      <img
        v-if="blok.background_image"
        :srcset="
          `${transformImage(blok.background_image, '2880x0/filters:quality(50)')} 2880w,
          ${transformImage(blok.background_image, '2560x0/filters:quality(50)')} 2560w, 
          ${transformImage(blok.background_image, '1920x0/filters:quality(50)')} 1920w, 
          ${transformImage(blok.background_image, '1680x0/filters:quality(50)')} 1680w, 
          ${transformImage(blok.background_image, '1280x0/filters:quality(50)')} 1280w,
          ${transformImage(blok.background_image, '1024x0/filters:quality(50)')} 1024w, 
          ${transformImage(blok.background_image, '768x0/filters:quality(50)')} 768w`"
        class="lazy scrollSlow-Landing fade-In-Image"
        sizes="100w"
        :src="`${transformImage(blok.background_image, '1680x0/filters:format(jpg):quality(50)')}`"
        :alt="blok.background_image" />
    </div>
    <div class="section-Landing_Content section-Content">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  methods: {
    getVerticalAlign(verticalAlign) {
      if (verticalAlign == "top") return "flex-start"
      if (verticalAlign == "bottom") return "flex-end"
      if (verticalAlign == "center") return "middle"
      return "flex-end"
    },
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
  padding: var(--spacing-item-vertical) var(--spacing-section-horizontal)
  background: rgba(0,0,0,0)
  color: white

  &.autoHeight
    min-height: 25vh
    padding: var(--spacing-item-vertical) var(--spacing-section-horizontal)

  .fade-In-Image
    animation: fadeIn 1s ease-out;

  img
    position: absolute
    top: 0
    right: 0
    width: 100%
    height: 100%
    object-fit: cover
    // z-index: -1
  > div
    display: flex
    justify-content: space-around
    margin-bottom: var(--spacing-item-vertical)
  > div:last-child
    margin-bottom: 0
  &_Logo
    position: relative
    flex-grow: 1
    text-align: center
    z-index: 1
    .icon
      width: 10rem
      height: 10rem

  &_ContentWrapper
    display: flex
    flex-direction: row
    width: 100%
    max-width: 1280px
    margin-inline: auto
    gap: 5%

  &_Content
    position: relative
    flex-direction: column
    flex-shrink: 0
    text-align: center
    .item-Title
      margin-bottom: 0

    .item-Spacer
      margin-bottom: 0

    .item-Title,
    .item-SubTitle,
    .item-Text
      max-width: 1280px
      margin-inline: auto
    .item-Button
      color: $darkbrown

@keyframes fadeIn
  0%
    opacity: 0;
  100%
    opacity: 1;
</style>
