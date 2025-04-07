<template>
  <div v-editable="blok" class="item-Columns">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
.item-Columns
  display: grid
  grid-template-columns: 1fr
  gap: 4rem
  margin-inline: auto
  max-width: 1600px

  @media screen and (min-width: 768px)
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
</style>
