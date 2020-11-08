<template>
  <transition name="fade">
    <div v-if="active" class="headerSlider">
      <div class="headerSlider-Background"></div>
      <div class="headerSlider-Content" @mouseleave="emitToggleSlideOff">
        <div class="headerSlider-Toggle" @click="emitToggleSlideOff">
          <div
            class="icon navIcon"
            v-html="require('~/assets/images/icon-close.svg?include')"
          />
        </div>
        <ul class="headerSlider-List typeSlider">
          <nuxt-link to="/" tag="li" @click="emitSlideToFalse">HOME</nuxt-link>
          <!-- <nuxt-link to="/moonlab" tag="li" @click="emitSlideToFalse"
            >MOON LAB PROGRAMMA</nuxt-link
          > -->
          <nuxt-link to="/herinneringen" tag="li" @click="emitSlideToFalse"
            >HERINNERINGEN</nuxt-link
          >
          <nuxt-link to="/over-anne" tag="li" @click="emitSlideToFalse"
            >OVER ANNE</nuxt-link
          >
          <nuxt-link to="/contact" tag="li" @click="emitSlideToFalse"
            >CONTACT</nuxt-link
          >
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: Boolean
  },
  methods: {
    emitToggleSlide() {
      this.$emit("toggle-slide")
    },
    emitToggleSlideOff() {
      this.$emit("toggle-slide-off")
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.headerSlider
  position: fixed
  z-index: $zindex-header-slider
  left: 0
  top: 0
  &-Background
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: black
    opacity: .5
    z-index: -1
  &-Content
    position: fixed
    left: 0
    top: 0
    padding: var(--spacing-header-vertical) var(--spacing-five) var(--spacing-five) var(--spacing-header-horizontal)
    background: $lightgrey
    color: $darkbrown
  &-Toggle
    margin-bottom: var(--spacing-three)
  li
    cursor: pointer
    transition: color $transition-hover, font-weight $transition-hover
    &.nuxt-link-exact-active
      color: $brown
      font-weight: bold
    &:hover
      @media screen and ( hover: hover)
        color: $brown
        font-weight: bold
</style>
