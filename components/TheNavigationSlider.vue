<template>
  <transition name="fade">
    <div v-if="active" class="headerSlider">
      <div class="headerSlider-Background"></div>
      <div class="headerSlider-Content" @mouseleave="emitToggleSlideOff">
        <div class="headerSlider-Toggle" @click="emitToggleSlideOff">
          <div
            class="icon navIcon"
            v-html="require('~/assets/images/icon-close.svg?include')"
          />
        </div>
        <ul v-if="mainMenu" class="headerSlider-List typeSlider">
          <nuxt-link
            v-for="(item, index) in mainMenu.items"
            :key="index"
            :to="
              item.link.cached_url === 'home'
                ? '/'
                : item.link.linktype === 'url'
                ? item.link.url
                : `/${item.link.cached_url}`
            "
            tag="li"
            :title="item.title"
            @click="emitSlideToFalse"
            v-html="item.title"
          ></nuxt-link>
        </ul>
        <ul v-else class="headerSlider-List typeSlider">
          <nuxt-link to="/" tag="li" @click="emitSlideToFalse">HOME</nuxt-link>
          <!-- <nuxt-link to="/moonlab" tag="li" @click="emitSlideToFalse"
            >MOON LAB PROGRAMMA</nuxt-link
          > -->
          <nuxt-link
            to="/herinneringen"
            tag="li"
            title="Herinneringen"
            @click="emitSlideToFalse"
            >HERINNERINGEN</nuxt-link
          >
          <nuxt-link
            to="/over-anne"
            tag="li"
            title="Over Anne"
            @click="emitSlideToFalse"
            >OVER ANNE</nuxt-link
          >
          <nuxt-link
            to="/contact"
            tag="li"
            title="Contact"
            @click="emitSlideToFalse"
            >CONTACT</nuxt-link
          >
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      menus: (state) => state.menus,
      mainMenu: (state) =>
        state.menus
          ? state.menus.list.find((menu) => menu.slug == "main-menu")
          : false
    })
  },
  props: {
    active: Boolean,
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    emitToggleSlide() {
      this.$emit("toggle-slide")
    },
    emitToggleSlideOff() {
      this.$emit("toggle-slide-off")
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
  &-Background
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: black
    opacity: .5
    z-index: -1
  &-Content
    position: fixed
    left: 0
    top: 0
    padding: var(--spacing-header-vertical) var(--spacing-five) var(--spacing-five) var(--spacing-header-horizontal)
    background: $lightgrey
    color: $darkbrown
  &-Toggle
    margin-bottom: var(--spacing-three)
  li
    cursor: pointer
    transition: color $transition-hover, font-weight $transition-hover
    &.nuxt-link-exact-active
      color: $brown
    &:hover
      @media screen and ( hover: hover)
        color: $brown
</style>
