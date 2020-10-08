<template>
  <section v-editable="blok" class="section section-BlogContent">
    <div class="section-BlogContent_Content">
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
  },
  mounted() {
    // console.log("SECTION BLOG CONTENT", this.blok)
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-BlogContent
    position: relative
    display: flex
    justify-content: space-around
    &_Content
        padding: var(--spacing-two) var(--spacing-sides)
        width: 100%
        max-width: 1100px
</style>
