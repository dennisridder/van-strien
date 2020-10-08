<template>
  <section
    class="section section-Landing"
    :style="{ backgroundImage: `url(${blok.background_image})` }"
  >
    <div class="section-Landing_Content section-Content">
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
    // console.log("LANDING", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Landing
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-end
  width: 100%
  min-height: 100vh
  padding: 0 var(--spacing-sides)
  background-size: cover
  color: white
  > div
    display: flex
    justify-content: space-around
    margin-bottom: var(--spacing-two)
  > div:first-child
    margin-top: var(--spacing-two)
  &_Logo
    flex-grow: 1
    text-align: center
    &_Item
      width: 220px
      height: 220px
      background: $black
  &_Content
    flex-direction: column
    flex-shrink: 0
    text-align: center
    h1
      margin-bottom: 1rem
    .item-Button
      color: $black
</style>
