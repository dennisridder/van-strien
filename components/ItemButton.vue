<template>
  <div v-editable="blok" class="item-Button">
    <a
      v-if="blok.scroll_down_ipv_link"
      v-scroll-to="'.section-Passage'"
      class="button typeLink"
      :class="blok.color"
      :title="blok.title"
    >
      {{ blok.title }}
    </a>
    <a
      v-else-if="blok.link.linktype === 'url'"
      :href="blok.link.cached_url"
      target="_blank"
      class="button typeLink"
      :class="blok.color"
      :title="blok.title"
      rel="noreferrer"
    >
      {{ blok.title }}
    </a>
    <nuxt-link
      v-else-if="blok.link.linktype === 'story'"
      class="button typeLink"
      :class="blok.color"
      tag="a"
      :to="blok.link.cached_url"
      :title="blok.title"
    >
      {{ blok.title }}
    </nuxt-link>
    <a
      v-else-if="blok.link.email"
      class="button typeLink"
      :class="blok.color"
      :href="`mailto:${blok.link.email}`"
      target="_blank"
      rel="noreferrer"
      title="email"
    >
      {{ blok.title }}
    </a>
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
