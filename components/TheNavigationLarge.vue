<template>
  <transition name="fade">
    <div class="headerLarge" :class="{ active: active }">
      <div class="headerLarge-Item headerLarge-Toggle">
        <div class="headerLarge-Toggle" @click="emitToggleSlide">
          <div
            class="icon navIcon"
            v-html="require('~/assets/images/icon-hamburger.svg?include')"
          />
        </div>
      </div>
      <div v-if="headerIcon === true" class="headerLarge-Item headerLarge-Logo">
        <nuxt-link class="headerLarge-Logo_Item" to="/" title="Homepage">
          <div
            class="icon rotate"
            v-html="require('~/assets/images/logo-circle.svg?include')"
          />
        </nuxt-link>
      </div>
      <div
        v-if="headerIcon === false"
        class="headerLarge-Item headerLarge-Logo"
      >
        <nuxt-link class="headerLarge-Logo_Item" to="/moonlab" title="Homepage">
          <div
            class="icon rotate"
            v-html="require('~/assets/images/logo-moonlab-circle.svg?include')"
          />
        </nuxt-link>
      </div>
      <div class="headerLarge-Item headerLarge-Button item-Button">
        <div class="button typeLink darkbrown">
          <a
            rel="noreferrer"
            href="https://calendly.com/annevanstrien/deepcall"
            target="_blank"
            >Plan free deep call</a
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: Boolean
  },
  data() {
    return {
      headerIcon: true
    }
  },
  watch: {
    $route() {
      this.determineHeaderIcon()
    }
  },
  mounted() {
    this.determineHeaderIcon()
    document.addEventListener("scroll", this.checkIfFirstViewport)
  },
  destroyed() {
    document.removeEventListener("scroll", this.checkIfFirstViewport)
  },
  methods: {
    emitToggleSlide() {
      this.$emit("toggle-slide")
    },
    determineHeaderIcon() {
      if (this.$route.name == "index") {
        this.headerIcon = true
      } else {
        this.headerIcon = false
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.navIcon
  width: 1.5rem
  height: 1.5rem
  cursor: pointer

.headerLarge
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  justify-content: space-between
  background: rgba(0,0,0,0)
  padding: 2.2rem var(--spacing-header-horizontal)
  z-index: $zindex-header-large
  transition: background $transition-nav-change
  @media screen and (max-width: $breakpoint-mobile)
    padding: 2rem var(--spacing-header-horizontal)
  > div
    display: flex
    align-items: center
  &-Toggle
    opacity: 0
    transition: opacity $transition-nav-change
  &-Logo
    opacity: 0
    position: absolute
    top: 0
    left: 50%
    bottom: 0
    transform: translateX(-50%)
    justify-content: space-around
    transition: opacity $transition-nav-change
    cursor: pointer
    @media screen and (max-width: $breakpoint-mobile)
      position: relative
      left: auto
      transform: translateX(0)
    &_Item
      width: 4rem
      height: 4rem
      @media screen and (min-width: $breakpoint-mobile)
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
      @media screen and (max-width: $breakpoint-mobile)
        width: 3rem
        height: 3rem
    .icon
      position: relative
      height: 100%
      width: 100%
      color: $darkbrown
    svg
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      object-fit: cover
  &-Button
    opacity: 0
    transition: opacity $transition-nav-change
    .button:hover
      color: $darkbrown
    @media screen and (max-width: $breakpoint-mobile)
      display: none !important
    .button
      background: $darkbrown
      color: $lightyellow

  &.active
    background: $lightgrey
    .headerLarge
      &-Toggle
        opacity: 1
      &-Logo
        opacity: 1
      &-Button
        opacity: 1
</style>
