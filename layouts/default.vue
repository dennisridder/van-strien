<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation-slider :active="showSlide" @toggle-slide="toggleSlide" />
    <the-navigation-large
      v-if="whichHeader === true"
      :active="showHeaderLarge"
      @toggle-slide="toggleSlide"
    />
    <the-navigation-small
      v-if="whichHeader === false"
      @toggle-slide="toggleSlide"
    />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-footer v-if="showFooter" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      whichHeader: true,
      showFooter: true,
      showHeaderLarge: false,
      showHeaderSmall: true,
      showSlide: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route() {
      this.determineWhichHeader()
      this.toggleFooter()
      this.showSlide = false
    }
  },
  mounted() {
    this.determineWhichHeader()
    this.toggleFooter()
    window.addEventListener("scroll", this.toggleHeaderLarge)
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleHeaderLarge)
  },
  methods: {
    determineWhichHeader() {
      if (
        this.$route.name == "index" ||
        this.$route.path == "/moonlab" ||
        this.$route.path == "/moonlab/"
      ) {
        this.whichHeader = true
      } else {
        this.whichHeader = false
      }
    },
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
      this.lastScrollPosition = currentScrollPosition
    },
    toggleSlide() {
      this.showSlide = !this.showSlide
    },
    toggleFooter() {
      if (this.$route.path == "/moonlab" || this.$route.path == "/moonlab/") {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    }
  }
}
</script>
