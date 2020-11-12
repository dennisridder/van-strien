<template>
  <div v-editable="blok" class="item-Title">
    <!-- <h1 class="typeDisplay">{{ blok.title }}</h1> -->
    <markdown class="typeDisplay" :input="blok.title" />
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
</style>
