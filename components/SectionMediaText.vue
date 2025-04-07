<template>
  <section
    v-editable="blok"
    class="section section-MediaText"
    :style="`background-color: ${blok.background_color}`"
  >
    <div
      class="section-MediaText_Item section-MediaText_Media"
      :class="{ backgroundActive: blok.media_image }"
      :style="`background-color: ${blok.background_color}; background-image: url(${blok.media_image.filename})`"
    >
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.left_column"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <div class="section-MediaText_Item section-MediaText_Text section-Content">
      <div class="section-MediaText_Item_Title item-Title" :style="titleStyles">
        <h2 v-if="blok.title" :style="{ textAlign: blok.title_align }">
          <markdown :skip-tags="['p']" :input="blok.title" />
        </h2>
      </div>
      <markdown :input="blok.text" class="section-MediaText_Description" />
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
  computed: {
    titleStyles() {
      return {
        alignSelf:
          this.blok.title_align === "left"
            ? "flex-start"
            : this.blok.title_align === "center"
            ? "center"
            : "flex-end"
      }
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-MediaText
    position: relative
    display: flex
    width: 100%
    box-sizing: border-box
    min-height: 56.25vw

    @media screen and (max-width: $breakpoint-mobile)
      flex-direction: column

    &_Item
        display: flex
        flex-direction: column
        flex-basis: 50%
        flex-shrink: 0
        &_Title
          flex-shrink: 1
          align-self: flex-end

    &_Media
      background-size: cover !important
      background-position: 50% 50% !important
      background-repeat: no-repeat !important
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      padding-inline: 8%

      > *
        max-width: 450px !important
        width: 100%
        margin-bottom: var(--spacing-item-vertical)

      @media screen and (max-width: 767px)
        min-height: 112.5vw

    &_Text
        justify-content: center
        padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)

        h2
          margin-bottom: 1em

          &:before
            content: ''
            display: inline-block
            width: 1.5em
            height: 1px
            background: #000
            margin-right: 0.75em
            vertical-align: middle

        @media screen and (min-width: $breakpoint-laptop)
          padding-right: var(--spacing-five)

    &_Description
      font-size: 1.25rem
      margin-bottom: 1.25em

      strong
        font-family: 'Canela Light'
        font-size: 1.375em
        letter-spacing: 0.1em
</style>
