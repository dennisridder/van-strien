<template>
  <section
    v-editable="blok"
    class="section section-Passage"
    :class="[{ reverse: blok.reverse }, { nodoor: blok.verwijder_deur_omtrek }]"
  >
    <div
      class="section-Passage_Item section-Passage_Left"
      :class="{ backgroundActive: blok.background_graphic }"
      :style="`background:${blok.background_color}`"
    >
      <div v-if="blok.passage_image" class="section-Passage_Item_Door">
        <blok-item-door
          :class="{ nodoor: blok.verwijder_deur_omtrek }"
          :image="blok.passage_image"
          :alt="blok.title"
        />
      </div>
    </div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <div class="section-Passage_Item_Title item-Title">
        <div class="section-Passage_Item_Title_Top">
          <h2 v-if="blok.title_voor" class="typeTitleItalic">
            {{ blok.title_voor }}
          </h2>
          <span class="spanOne"></span>
          <span class="spanTwo"></span>
        </div>
        <div class="section-Passage_Item_Title_Bottom">
          <h2 v-if="blok.title_na" class="typeTitle">{{ blok.title_na }}</h2>
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
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Passage
    position: relative
    display: flex
    width: 100%
    box-sizing: border-box
    @media screen and (max-width: $breakpoint-mobile)
      flex-direction: column
    &_Item
        display: flex
        flex-direction: column
        flex-basis: 50%
        flex-shrink: 0
        &_Door
          display: flex
          justify-content: space-around
        @media screen and (max-width: $breakpoint-mobile)
          flex-basis: 100%
        &_Title
          flex-shrink: 1
          align-self: flex-start
          &_Top
            display: flex
            @media screen and (min-width: $breakpoint-mobile)
              margin-left: -2.5em
            h2
              display: inline
            .spanOne
              width: 1em
            .spanTwo
              border-bottom: $darkbrown solid 1px
              flex-grow: 1
              transform: translateY(-50%)
          &_Bottom
            @media screen and (max-width: $breakpoint-mobile)
              margin-left: 2.5em
    &_Left
        justify-content: space-around
        padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
        @media screen and (max-width: $breakpoint-mobile)
          padding-left: calc(2 * #{var(--spacing-section-horizontal)})
          padding-right: calc(2 * #{var(--spacing-section-horizontal)})
        &.backgroundActive
          background-image: url('~assets/images/background-doors.svg') !important
          background-size: 100% !important
          background-position: 3.75vw 50% !important
          background-repeat: no-repeat !important
    &_Right
        justify-content: flex-end
        padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
        @media screen and (min-width: $breakpoint-laptop)
          padding-right: var(--spacing-five)
</style>
