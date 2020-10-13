<template>
  <section v-editable="blok" class="section section-Feature">
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
  },
  mounted() {
    console.log("FEATURE", this.blok)
  }
}
</script>

<style lang="sass">
.section-Feature
  display: flex
  &_Item
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: var(--spacing-three-vertical) var(--spacing-sides)
    &_Content
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center
      text-align: center
      > div
        margin-bottom: var(--spacing-one-vertical)
      > div:last-child
        margin-bottom: 0
</style>
