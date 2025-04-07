<template>
  <a class="AppButton" :href="href" :target="target" :style="buttonStyles">
    <slot />
  </a>
</template>

<script>
import { invertColorBW } from "~/helpers/color"

export default {
  props: {
    href: String,
    target: {
      type: String,
      default: "_self"
    },
    color: {
      type: String,
      default: ""
    }
  },
  computed: {
    buttonStyles() {
      return this.color
        ? {
          backgroundColor: this.color,
          color: invertColorBW(this.color)
        }
        : {}
    }
  },
  mounted() {}
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.AppButton
  display: inline-block
  background-color: $landing-brown
  color: $white
  padding: 1em 1.25em
  border-radius: 0.25em
  cursor: pointer
  font-family: 'Canela Light'
  font-size: 1.25rem
  letter-spacing: 0.1em
  transition: all 0.2s ease

  &:hover
    opacity: 0.88
</style>
