<template>
  <transition name="fade">
    <div class="headerSmall">
      <div class="headerSmall-Item headerSmall-Toggle">
        <transition-group name="fadegroup" mode="out-in">
          <nuxt-link
            v-if="this.$route.name === 'herinneringen-slug'"
            key="one"
            class="headerSmall-Toggle_Item"
            to="/herinneringen/"
            tag="div"
            title="Terug"
          >
            <div
              v-if="showMenu"
              class="icon navIcon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
          </nuxt-link>
          <div
            v-else
            key="two"
            class="headerSmall-Toggle_Item"
            @click="emitToggleSlide"
          >
            <div
              v-if="showMenu"
              class="icon navIcon"
              v-html="require('~/assets/images/icon-hamburger.svg?include')"
            />
          </div>
        </transition-group>
      </div>
      <nuxt-link
        to="/"
        tag="div"
        class="headerSmall-Item headerSmall-Logo"
        title="Homepage"
      >
        <div
          class="rotate"
          v-html="require('~/assets/images/logo-circle.svg?include')"
        />
      </nuxt-link>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: true
    }
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

.headerSmall
  position: fixed
  left: 0
  top: 0
  right: 0
  padding-left: var(--spacing-header-horizontal)
  padding-top: var(--spacing-header-vertical)
  display: flex
  flex-direction: column
  z-index: $zindex-header-small
  pointer-events: none
  &-Logo
    width: 4rem
    height: 4rem
    margin-top: calc(#{var(--spacing-header-vertical)} / 2)
    margin-left: 0.75rem
    transform: translateX(-50%)
    cursor: pointer
    pointer-events: initial
  &-Toggle
    position: relative
    height: calc(#{var(--spacing-header-vertical)} / 2)
    &_Item
      position: absolute
      left: 0
      top: 0
      pointer-events: initial
</style>
