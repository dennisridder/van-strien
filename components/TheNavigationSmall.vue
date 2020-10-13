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
      <div class="headerSmall-Item headerSmall-Logo">
        <div
          class="rotate"
          v-html="require('~/assets/images/logo-circle.svg?include')"
        />
      </div>
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
    width: 3.1111rem
    height: 3.1111rem
    margin-top: 1.5rem
    transform: translateX(-25%)
</style>
