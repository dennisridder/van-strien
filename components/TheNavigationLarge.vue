<template>
  <div v-if="active" class="headerLarge">
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

.navIcon
  width: 1.2222rem
  height: 1.2222rem
  cursor: pointer

.headerLarge
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  justify-content: space-between
  background: $lightgrey
  padding: 30px var(--spacing-sides)
  z-index: $zindex-header-large
  > div
    display: flex
    align-items: center
  &-Logo
    position: absolute
    top: 0
    left: 50%
    bottom: 0
    transform: translateX(-50%)
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
