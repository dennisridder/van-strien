<template>
  <div v-editable="blok" class="item-Title">
    <markdown
      class="typeDisplay"
      :class="{ sizeSmall: blok.size_small }"
      :input="blok.title"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.item-Title
  text-transform: uppercase

.section-Landing
  .item-Title
    text-align: center
    font-size: 92px
    font-family: 'Canela Light'
    letter-spacing: 4.6px
    font-style: italic

.section-Passage, .section-BlogHorizontal, .section-Footer, .section-Steps
  .item-Title
    font-size: 18px
    letter-spacing: 6.3px

.section-Message
  .item-Title
    font-size: 16px
    letter-spacing: 5.6px
    text-align: center

  .item-SubTitle + .item-Title
    margin-top: -1.5rem
</style>
