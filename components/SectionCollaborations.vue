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
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Collaborations
  padding: var(--spacing-two-vertical) var(--spacing-sides)
  background: $lightgrey
  .markdown
    margin-bottom: var(--spacing-one-vertical)
  ul
    display: flex
    justify-content: space-between
    li
      margin-left: var(--spacing-sides)
      margin-right: var(--spacing-sides)
    li:first-child
      margin-left: 0
    li:last-child
      margin-right: 0
</style>
