<template>
  <header class="header">
    <div class="header-Item header-Toggle">
      <div class="header-Toggle_Item" @click="toggleSlide">
        <div
          class="icon"
          v-html="require('~/assets/images/icon-hamburger.svg?include')"
        />
      </div>
    </div>
    <div class="header-Item header-Logo">
      <nuxt-link class="header-Logo_Item" to="/">
        <div
          class="icon"
          v-html="require('~/assets/images/logo-circle.svg?include')"
        />
      </nuxt-link>
    </div>
    <div class="header-Item header-Button item-Button">
      <button class="button typeLink">Plan free deep call</button>
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
  padding: 30px var(--spacing-sides)
  z-index: 900
  > div
    display: flex
    align-items: center
  &-Item
    flex-basis: 33.333%
  &-Toggle
    &_Item
      width: 25px
      height: 25px
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
      color: $blacktype
  .button
    background: $black
    color: $lightyellow
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
