<template>
  <section v-editable="blok" class="section section-Passage">
    <div class="section-Passage_Item section-Passage_Left">
      <div v-if="blok.passage_image" class="section-Passage_Item_Door">
        <blok-item-door :image="blok.passage_image" :alt="blok.title" />
      </div>
    </div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <div class="section-Passage_Item_Title item-Title">
        <h1 v-if="blok.title_voor">{{ blok.title_voor }}</h1>
        <h1 v-if="blok.title_na">{{ blok.title_na }}</h1>
      </div>
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
    console.log("PASSAGE", this.blok)
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Passage
    position: relative
    display: flex
    width: 100%
    min-height: 100vh
    box-sizing: border-box
    .item-Title
      h1
        line-height: 1
      h1:first-child
        font-family: 'Canela Light Italic'
    &_Item
        display: flex
        flex-direction: column
        justify-content: flex-end
        flex-basis: 50%
        flex-shrink: 0
        &_Text
            // flex-shrink: 1
    &_Left
        padding: var(--spacing-four)
        background: $yellow
    &_Right
        padding: var(--spacing-two)
        padding-right: var(--spacing-two)
</style>
