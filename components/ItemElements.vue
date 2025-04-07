<template>
  <div v-editable="blok" class="item-Elements">
    <div class="item-Elements_Grid">
      <ItemElement
        v-for="blok in blok.elements"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
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
.item-Elements
  text-align: center
  @media screen and (min-width: 768px)
    text-align: left

  &_Grid
    display: flex
    flex-direction: column
    flex-wrap: wrap
    gap: 3rem
    margin: 0 auto
    max-width: 1600px
    margin-block: var(--section-margin)

    @media screen and (min-width: 768px)
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
      gap: 5%
</style>
