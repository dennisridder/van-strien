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
    // console.log(this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Collaborations
  padding: var(--spacing-section-vertical-small) var(--spacing-section-horizontal)
  background: $lightgrey
  .markdown
    margin-bottom: var(--spacing-item-vertical)
  ul
    display: flex
    justify-content: space-between
    li
      margin-left: var(--spacing-section-horizontal)
      margin-right: var(--spacing-section-horizontal)
    li:first-child
      margin-left: 0
    li:last-child
      margin-right: 0
</style>
