<template>
  <header class="header">
    <div class="header-Item header-Toggle">
      <div class="header-Toggle_Item"></div>
    </div>
    <div class="header-Item header-Logo">
      <nuxt-link class="header-Logo_Item" to="/"></nuxt-link>
    </div>
    <div class="header-Item header-Button">
      <button>Plan free deep call</button>
    </div>
    <!-- <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/blog" tag="li">Blog</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
      </ul>
    </nav> -->
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
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
</style>
