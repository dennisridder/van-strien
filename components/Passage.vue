<template>
  <section class="section section-Passage">
    <div class="section-Passage_Item section-Passage_Left">
      <div v-if="blok.passage_image" class="section-Passage_Item_Door"></div>
    </div>
    <div class="section-Passage_Item section-Passage_Right">
      <div class="section-Passage_Item_Text">
        <h1 v-if="blok.title">{{ blok.title }}</h1>
        <h2 v-if="blok.subtitle">{{ blok.subtitle }}</h2>
        <markdown :input="blok.text" />
        <div v-if="blok.body[0]">
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.columns"
            :key="blok._uid"
            :blok="blok"
          ></component>
        </div>
      </div>
    </div>
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

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Passage
    position: relative
    display: flex
    width: 100%
    min-height: 100vh
    box-sizing: border-box
    &_Item
        display: flex
        flex-direction: column
        justify-content: flex-end
        flex-basis: 50%
        flex-shrink: 0
        &_Door
            width: 100%
            height: 0
            padding-top: 125%
            background: $black
        &_Text
            // padding: var(--spacing-three)
            // padding-right: var(--spacing-three)
            flex-shrink: 1
    &_Left
        padding: var(--spacing-four)
        background: $yellow
</style>
