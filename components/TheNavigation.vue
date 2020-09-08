<template>
  <header class="header">
    <div class="header-Item header-Toggle">
      <div class="header-Toggle_Item" @click="toggleSlide"></div>
    </div>
    <div class="header-Item header-Logo">
      <nuxt-link class="header-Logo_Item" to="/"></nuxt-link>
    </div>
    <div class="header-Item header-Button">
      <button>Plan free deep call</button>
    </div>
    <div v-if="slideActive === true" class="header-Slide">
      <div class="header-Toggle_Item" @click="toggleSlide"></div>
      <ul class="header-Slide_Content">
        <nuxt-link to="/" tag="li">HOME</nuxt-link>
        <nuxt-link to="/moonlab" tag="li">MOON LAB PROGRAMMA</nuxt-link>
        <nuxt-link to="/herinneringen" tag="li">HERINNERINGEN</nuxt-link>
        <nuxt-link to="/over-anne" tag="li">OVER ANNE</nuxt-link>
        <nuxt-link to="/contact" tag="li">CONTACT</nuxt-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      slideActive: false
    }
  },
  watch: {
    $route() {
      this.slideActive = false
    }
  },
  methods: {
    toggleSlide() {
      this.slideActive = !this.slideActive
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.header
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  background: $lightgrey
  padding: var(--spacing-one) var(--spacing-sides)
  z-index: 900
  > div
    display: flex
    align-items: center
  &-Item
    flex-basis: 33.333%
    border: $testborder
  &-Toggle
    &_Item
      width: 30px
      height: 25px
      background: $black
      cursor: pointer
  &-Logo
    position: relative
    justify-content: space-around
    cursor: pointer
    &_Item
      position: absolute
      left: 50%
      top: 50%
      width: 75px
      height: 75px
      transform: translate(-50%, -50%)
      background: $black
      color: $blacktype
  &-Button
    justify-content: flex-end
    button
      background: $black
      color: $blacktype
  &-Slide
    position: absolute
    left: 0
    top: 0
    display: flex
    flex-direction: column
    background: $lightgrey
    padding: var(--spacing-two)
    z-index: 950
    &_Content
      display: flex
      flex-direction: column
</style>
