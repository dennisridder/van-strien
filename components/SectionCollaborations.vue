<template>
  <section class="section section-Collaborations">
    <markdown class="typeTextCaps" :input="blok.text" />
    <ul class="section-Collaborations_Logos">
      <li v-for="(image, i) in blok.logos" :key="i">
        <img :src="image.filename" :alt="image.name" />
      </li>
    </ul>
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

.section-Collaborations
  padding-top: var(--spacing-section-vertical-small)
  background: $lightgrey
  .markdown
    margin-bottom: var(--spacing-item-vertical)
    padding: 0 var(--spacing-section-horizontal)
  ul
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media screen and (max-width: $breakpoint-mobile)
      justify-content: flex-start
    li
      margin-left: var(--spacing-section-horizontal)
      margin-right: var(--spacing-section-horizontal)
      margin-bottom: var(--spacing-section-vertical-small)
      display: inline-block
      width: auto
      img
        height: 100%
        width: auto
        height: 5.5rem
        @media screen and (min-width: $breakpoint-laptop)
          height: 8vw
</style>
