<template>
  <transition name="fade">
    <div v-if="active" class="headerSlider">
      <div class="headerSlider-Toggle" @click="emitToggleSlide">
        <div
          class="icon navIcon"
          v-html="require('~/assets/images/icon-close.svg?include')"
        />
      </div>
      <ul class="headerSlider-List typeSlider">
        <nuxt-link to="/" tag="li">HOME</nuxt-link>
        <nuxt-link to="/moonlab" tag="li">MOON LAB PROGRAMMA</nuxt-link>
        <nuxt-link to="/herinneringen" tag="li">HERINNERINGEN</nuxt-link>
        <nuxt-link to="/over-anne" tag="li">OVER ANNE</nuxt-link>
        <nuxt-link to="/contact" tag="li">CONTACT</nuxt-link>
      </ul>
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
  padding: var(--spacing-three) var(--spacing-five) var(--spacing-five) var(--spacing-three)
  background: $lightgrey
  color: $black
  &-Toggle
    margin-bottom: var(--spacing-three)
  li
    cursor: pointer
    &.nuxt-link-exact-active
      color: $brown
      font-weight: bold
</style>
