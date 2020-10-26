<template>
  <section
    v-editable="blok"
    class="section section-Feature"
    :class="blok.background_color"
  >
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
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

.section-Feature
  display: flex
  justify-content: center
  @media screen and (max-width: $breakpoint-mobile)
    flex-direction: column
  &_Item
    display: flex
    flex-direction: column
    justify-content: flex-end
    max-width: 50vw
    padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
    &_Content
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center
      text-align: center
      > div
        margin-bottom: var(--spacing-item-vertical)
      > div:last-child
        margin-bottom: 0
</style>
