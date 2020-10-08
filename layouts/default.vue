<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation-slider :active="showSlide" @toggle-slide="toggleSlide" />
    <the-navigation-large
      :active="showHeaderLarge"
      @toggle-slide="toggleSlide"
    />
    <the-navigation-small
      :active="showHeaderSmall"
      @toggle-slide="toggleSlide"
    />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-footer v-if="showFooter" />
  </main>
</template>

<script>
import rotateElement from "@/mixins/rotateElement"

export default {
  mixins: [rotateElement],
  data() {
    return {
      showFooter: true,
      showHeaderLarge: false,
      showHeaderSmall: true,
      showSlide: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route() {
      this.toggleFooter()
      this.showSlide = false
    }
  },
  mounted() {
    this.toggleFooter()
    window.addEventListener("scroll", this.toggleHeaderLarge)
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleHeaderLarge)
  },
  methods: {
    toggleHeaderLarge() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showHeaderLarge = currentScrollPosition < this.lastScrollPosition
      this.showHeaderSmall = currentScrollPosition > this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    toggleSlide() {
      this.showSlide = !this.showSlide
    },
    toggleFooter() {
      if (this.$route.path === "/moonlab") {
        this.footerActive = false
      } else {
        this.footerActive = true
      }
    }
  }
}
</script>
