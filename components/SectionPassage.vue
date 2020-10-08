<template>
  <section v-editable="blok" class="section section-Passage">
    <div class="section-Passage_Item section-Passage_Left">
      <div v-if="blok.passage_image" class="section-Passage_Item_Door">
        <blok-item-door :image="blok.passage_image" :alt="blok.title" />
      </div>
    </div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <div class="section-Passage_Item_Title item-Title">
        <div class="section-Passage_Item_Title_Top">
          <h2 class="typeTitleItalic" v-if="blok.title_voor">
            {{ blok.title_voor }}
          </h2>
          <span class="spanOne"></span>
          <span class="spanTwo"></span>
        </div>
        <div class="section-Passage_Item_Title_Bottom">
          <h2 class="typeTitle" v-if="blok.title_na">{{ blok.title_na }}</h2>
        </div>
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
    // console.log("PASSAGE", this.blok)
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
        &_Title
          flex-shrink: 1
          align-self: flex-start
          &_Top
            margin-left: -3.75vw
            display: flex
            h2
              display: inline
            .spanOne
              width: 1em
            .spanTwo
              border-bottom: $black solid 2px
              flex-grow: 1
              transform: translateY(-50%)
    &_Left
        padding: var(--spacing-four)
        background: $yellow
    &_Right
        padding: var(--spacing-three)
        padding-right: var(--spacing-five)
</style>
