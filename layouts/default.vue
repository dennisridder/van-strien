<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation-slider :active="showSlide" @toggle-slide="toggleSlide" />
    <the-navigation-large @toggle-slide="toggleSlide" />
    <the-navigation-small @toggle-slide="toggleSlide" />
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
      showFooter: true,
      showSlide: false
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
  },
  methods: {
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
