<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation-slider
      :active="showSlide"
      @toggle-slide="toggleSlide"
      @slide-to-false="slideToFalse"
    />
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
    <the-popup v-if="showPopup" @toggle-popup="togglePopup" />
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
      showPopup: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route() {
      this.showSlide = false
      this.determineWhichHeader()
      this.toggleFooter()
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
      const windowHeight = window.innerHeight
      if (currentScrollPosition < windowHeight) {
        return (this.showHeaderLarge = false)
      } else {
        this.showHeaderLarge = true
      }
    },
    toggleSlide() {
      this.showSlide = !this.showSlide
    },
    slideToFalse() {
      this.toggleSlide = false
    },
    togglePopup() {
      this.showPopup = !this.showPopup
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
