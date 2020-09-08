<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-footer v-if="footerActive" />
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import TheFooter from "~/components/TheFooter.vue"

export default {
  components: {
    "the-navigation": TheNavigation,
    "the-footer": TheFooter
  },
  data() {
    return {
      footerActive: true
    }
  },
  watch: {
    $route() {
      this.checkFooterActive()
    }
  },
  mounted() {
    this.checkFooterActive()
  },
  methods: {
    checkFooterActive() {
      if (this.$route.path === "/moonlab") {
        this.footerActive = false
      } else {
        this.footerActive = true
      }
    }
  }
}
</script>
