<template>
  <div v-editable="blok" class="item-Button">
    <div class="button typeLink" :class="blok.color">
      <a>
        {{ blok.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.button
  display: inline-block
  cursor: pointer
  padding-left: calc(2.44rem - 2px)
  padding-top: calc(.833rem - 2px)
  padding-right: calc(2.44rem - 2px)
  padding-bottom: calc(.833rem - 2px)
  transition: background $transition-hover, color $transition-hover, border $transition-hover
  a
    vertical-align: sub
  &.offwhite
    border: 2px solid $offwhite
  &.yellow
    border: 2px solid $yellow
  &.purple
    border: 2px solid $purple
  &:hover
    background: rgba(0,0,0,0)
</style>
