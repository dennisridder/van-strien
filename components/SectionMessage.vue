<template>
  <section
    v-editable="blok"
    class="section section-Message"
    :class="blok.background_color"
  >
    <div class="section-Message_Content">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
  </section>
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

.section-Message
  position: relative
  display: flex
  justify-content: space-around
  padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
  &_Content
    text-align: center
    .markdown, caption
      width: 100%
    > div
      margin-bottom: var(--spacing-item-vertical)
    .item-Quote
      margin-bottom: calc(#{var(--spacing-item-vertical)} + 1.5em)
    > div:last-child
      margin-bottom: 0
    // IF QUESTION BLOK THEN
    > div:nth-child(3).item-Question
      margin-top: var(--spacing-section-vertical)
  &.backgroundWhite
    background: $white
  &.backgroundOffwhite
    background: $offwhite
  &.backgroundLightgrey
    background: $lightgrey
  &.backgroundYellow
    background: $yellow
  &.backgroundDarkbrown
    background: $darkbrown
    color: $white
</style>
