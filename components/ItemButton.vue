<template>
  <div v-editable="blok" class="item-Button">
    <div
      v-if="blok.scroll_down_ipv_link"
      class="button typeLink"
      :class="blok.color"
    >
      <a v-scroll-to="'.section-Passage'">
        {{ blok.title }}
      </a>
    </div>
    <div
      v-if="blok.link.linktype === 'url'"
      class="button typeLink"
      :class="blok.color"
    >
      <a :href="blok.link.cached_url" target="_blank">
        {{ blok.title }}
      </a>
    </div>
    <div
      v-if="blok.link.linktype === 'story'"
      class="button typeLink"
      :class="blok.color"
    >
      <nuxt-link :to="blok.link.cached_url">
        {{ blok.title }}
      </nuxt-link>
    </div>
    <div v-if="blok.link.email" class="button typeLink" :class="blok.color">
      <a
        :href="`mailto:${blok.link.email}`"
        target="_blank"
        rel="noreferrer"
        title="email"
      >
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
  padding-left: calc(2.44rem - 2px) !important
  padding-top: calc(.833rem - 2px) !important
  padding-right: calc(2.44rem - 2px) !important
  padding-bottom: calc(.833rem - 2px) !important
  transition: background $transition-hover, color $transition-hover, border $transition-hover
  a
    vertical-align: sub
  &.offwhite
    border: 2px solid $offwhite
  &.yellow
    border: 2px solid $yellow
  &.purple
    border: 2px solid $purple
  &.darkbrown
    border: 2px solid $darkbrown
  &:hover
    background: rgba(0,0,0,0)
</style>
