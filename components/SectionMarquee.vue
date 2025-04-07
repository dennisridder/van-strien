<template>
  <section
    v-editable="blok"
    class="section section-Marquee"
    :style="{
      backgroundColor: blok.background_color,
      color: blok.text_color
    }"
  >
    <div class="section-Marquee_Content">
      <div class="section-Marquee_Content_Track">
        <span v-for="i in 25" :key="i">{{ blok.text }} / </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Marquee
  position: relative
  background: $yellow
  text-transform: uppercase

  &_Content
    width: 100%
    overflow: hidden
    font-family: 'Artegra Sans Extended Medium'
    letter-spacing: 0.166em

    &_Track
      padding: 2rem 0
      position: relative
      white-space: nowrap
      will-change: transform
      animation: marquee 10s linear infinite

      @media screen and (min-width: 768px)
        animation-duration: 32s

@keyframes marquee
  0%
    transform: translateX(0)
  100%
    transform: translateX(-50%)
</style>
