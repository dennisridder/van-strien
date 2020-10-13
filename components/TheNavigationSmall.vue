<template>
  <transition name="fade">
    <div class="headerSmall">
      <div class="headerSmall-Item headerSmall-Toggle">
        <div class="headerSmall-Toggle" @click="emitToggleSlide">
          <div
            class="icon navIcon"
            v-html="require('~/assets/images/icon-hamburger.svg?include')"
          />
        </div>
      </div>
      <nuxt-link to="/" tag="div" class="headerSmall-Item headerSmall-Logo">
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
  &-Logo
    width: 4rem
    height: 4rem
    margin-top: calc(#{var(--spacing-header-vertical)} / 2)
    margin-left: 0.75rem
    transform: translateX(-50%)
    cursor: pointer
</style>
