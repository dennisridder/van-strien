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
    <transition name="fade">
      <the-popup v-if="popupState" tabindex="0" />
    </transition>
  </main>
</template>

<script>
import { mapState } from "vuex"
import detectVisitorIsIdle from "@/mixins/detectVisitorIsIdle"

export default {
  mixins: [detectVisitorIsIdle],
  fetch({ store }) {
    store.commit("toggleThePopup")
  },
  data() {
    return {
      whichHeader: true,
      showFooter: true,
      showHeaderLarge: false,
      showHeaderSmall: true,
      showSlide: false,
      showPopup: true,
      lastScrollPosition: 0
    }
  },
  computed: {
    ...mapState({
      popupState: (state) => state.popupstate.popupState
    })
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
    document.addEventListener("mouseleave", this.mouseLeftDocument)
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleHeaderLarge)
    document.removeEventListener("mouseleave", this.mouseLeftDocument)
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
    toggleSlideOff() {
      this.showSlide = false
    },
    slideToFalse() {
      this.toggleSlide = false
    },
    togglePopup() {
      this.showPopup = !this.showPopup
    },
    togglePopupFalse() {
      this.showPopup = false
    },
    toggleFooter() {
      if (this.$route.path == "/moonlab" || this.$route.path == "/moonlab/") {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    },
    mouseLeftDocument() {
      this.$store.commit("popupstate/popupTrue")
    }
  }
}
</script>
