<template>
  <section v-editable="blok" class="section section-BlogGrid section-Weken">
    <ul class="section-BlogGrid_Wrapper">
      <component
        :is="blok.component | dashify"
        v-for="(blok, index) in blok.body"
        :key="blok._uid"
        :blok="blok"
        :index="index"
      ></component>
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
.section-Weken
  .section-BlogGrid_Item
    .markdown
      width: calc(100% + #{var(--spacing-section-horizontal)})
</style>
