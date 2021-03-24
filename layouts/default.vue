<template>
  <!-- Change if needed -->
  <main lang="nl-NL" translate="no">
    <the-navigation-slider
      v-if="showHeader"
      :active="showSlide"
      :show-menu="showMenu"
      @toggle-slide="toggleSlide"
      @toggle-slide-off="toggleSlideOff"
    />
    <the-navigation-large
      v-if="showHeader && whichHeader === true"
      :active="showHeaderLarge"
      :show-menu="showMenu"
      @toggle-slide="toggleSlide"
    />
    <the-navigation-small
      v-if="showHeader && whichHeader === false"
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
      showHeader: true,
      showMenu: true,
      showHeaderLarge: false,
      showHeaderSmall: true,
      showSlide: false,
      lastScrollPosition: 0
    }
  },
  computed: {
    ...mapState({
      popupState: (state) => state.popupstate.popupState,
      popupCount: (state) => state.popupstate.popupCount
    })
  },
  watch: {
    $route() {
      this.toggleSlideOff()
      this.determineWhichHeader()
      this.toggleFooter()
      this.conditionalDisplayElements()
    }
  },
  mounted() {
    this.determineWhichHeader()
    this.toggleFooter()
    this.conditionalDisplayElements()
    window.addEventListener("scroll", this.toggleHeaderLarge)
    document.addEventListener("mouseleave", this.mouseLeftDocument)
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleHeaderLarge)
    document.removeEventListener("mouseleave", this.mouseLeftDocument)
  },
  methods: {
    conditionalDisplayElements() {
      if (document.querySelector(".section-Page").dataset.hideHeader) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }

      if (document.querySelector(".section-Page").dataset.hideFooter) {
        this.showFooter = false
      } else {
        this.showFooter = true
      }

      if (document.querySelector(".section-Page").dataset.hideMenu) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
    },
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
