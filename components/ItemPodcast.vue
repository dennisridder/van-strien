<template>
  <div v-if="blok" v-editable="blok" class="item-Podcast">
    <div class="item-Podcast_aspectRatioBox">
      <!-- prettier-ignore -->
      <img
      v-lazy="`${transformImage(blok.image.filename, '1440x0/filters:format(jpg):quality(80)')}`"
      :data-srcset="`
          ${transformImage(blok.image.filename, '2000x0/filters:quality(80)')} 2000w,
          ${transformImage(blok.image.filename, '1600x0/filters:quality(80)')} 1600w,
          ${transformImage(blok.image.filename, '140x0/filters:quality(80)')} 140w, 
          ${transformImage(blok.image.filename, '1200x0/filters:quality(80)')} 1200w,
          ${transformImage(blok.image.filename, '1000x0/filters:quality(80)')} 1000w, 
          ${transformImage(blok.image.filename, '800x0/filters:quality(80)')} 800w, 
          ${transformImage(blok.image.filename, '600x0/filters:quality(80)')} 600w, 
          ${transformImage(blok.image.filename, '400x0/filters:quality(80)')} 400w, 
          `"
      class="lazy scrollSlow-Podcast"
      sizes="(min-width: 800px) 33vw, (min-width: 1360px) 26vw, 100vw"
      :alt="blok.image.name" />
      <div class="item-Podcast_Content">
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok, "BLOK")
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

.item-Podcast
    position: relative
    width: 100%
    z-index: +1
    border-radius: 1000px 1000px 0 0
    overflow: hidden
    max-width: 350px
    .markdown
      color: white
      font-family: 'Artegra Sans Extended Medium'
      font-size: .75rem !important
      letter-spacing: 0.350em !important
      line-height: 1.5 !important
      text-transform: uppercase
      user-select: none
    // @media screen and (min-width: $breakpoint-mobile)
    //   max-width: 33vw
    // @media screen and (min-width: $breakpoint-laptop)
    //   max-width: 26vw
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
    &_Content
      position: absolute
      left: 0
      top: 0
      bottom: 0
      right: 0
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      > div:nth-child(n+2)
        margin-top: 1rem
</style>
