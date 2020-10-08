<template>
  <div class="headerLarge">
    <div class="headerLarge-Item headerLarge-Toggle">
      <div class="headerLarge-Toggle" @click="emitToggleSlide">
        <div
          class="icon navIcon"
          v-html="require('~/assets/images/icon-hamburger.svg?include')"
        />
      </div>
    </div>
    <div class="headerLarge-Item headerLarge-Logo">
      <nuxt-link class="headerLarge-Logo_Item" to="/">
        <div
          class="icon"
          v-html="require('~/assets/images/logo-circle.svg?include')"
        />
      </nuxt-link>
    </div>
    <div class="headerLarge-Item headerLarge-Button item-Button">
      <button class="button typeLink">Plan free deep call</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitToggleSlide() {
      this.$emit("toggle-slide")
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.headerLarge
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  background: $lightgrey
  padding: 30px var(--spacing-sides)
  z-index: $zindex-header-large
  > div
    display: flex
    align-items: center
  &-Item
    flex-basis: 33.333%
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
</style>
