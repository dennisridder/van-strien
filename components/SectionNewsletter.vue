<template>
  <section
    v-editable="blok"
    class="section section-Newsletter"
    :class="blok.background_color"
  >
    <div class="section-Newsletter_Content">
      <div class="section-Newsletter_Community">
        <div class="typeTextCaps">{{ blok.title }}</div>
        <div class="typeTitle">{{ blok.subtitle }}</div>
        <div class="typeTitleItalic">{{ blok.subtitle_italic }}</div>
      </div>
      <div class="section-Newsletter_Mail">
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.form"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
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

.section-Newsletter
  background: $yellow
  padding: var(--spacing-section-vertical-small) var(--spacing-section-horizontal)
  &.backgroundWhite
    background: $white
  &.backgroundOffwhite
    background: $offwhite
  &.backgroundLightgrey
    background: $lightgrey
  &.backgroundYellow
    background: $yellow
    color: $white
  &.backgroundDarkbrown
    background: $darkbrown
    color: $white
  &_Content
    display: flex
    justify-content: center
    align-items: center
    @media screen and (max-width: $breakpoint-mobile)
      align-items: flex-start
    @media screen and (max-width: $breakpoint-mobile)
      flex-direction: column
      > div
        margin-bottom: var(--spacing-item-vertical)
      > div:last-child
        margin-bottom: 0
  &_Mail, &_Community
    display: flex
    flex-direction: column
    max-width: 100%
  &_Community
    @media screen and (min-width: $breakpoint-mobile)
      padding-right: var(--spacing-three)
    > div
      max-width: 100%
    > div:first-child
      margin-bottom: 1em
    > div:last-child
      align-self: flex-end
      hyphens: auto
      text-align: right
  &_Mail
    width: 100%
    max-width: 400px
    align-items: flex-start

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
