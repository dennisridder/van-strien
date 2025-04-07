<template>
  <section
    v-editable="blok"
    class="section section-Hero"
    :style="{
      backgroundColor: blok.background_color,
      color: blok.text_color
    }"
  >
    <div
      class="section-Hero_Background"
      :style="{
        backgroundImage: `url(${blok.background_image})`
      }"
    />
    <div class="section-Hero_Content">
      <h1 class="section-Hero_Title">
        <figure>
          <img
            v-if="blok.logo"
            :src="blok.logo.filename"
            :alt="blok.logo.meta_data.alt"
          />
          <figcaption v-html="blok.title"></figcaption>
        </figure>
      </h1>
      <p v-html="blok.text" />

      <AppButton
        class="section-Hero_Button"
        :href="blok.button_link.url"
        :style="buttonStyles"
      >
        {{ blok.button_label }}
      </AppButton>
    </div>
  </section>
</template>

<script>
import { invertColorBW } from "~/helpers/color"

export default {
  props: {
    blok: Object
  },
  computed: {
    buttonStyles() {
      return {
        backgroundColor: this.blok.button_color,
        color: invertColorBW(this.blok.button_color)
      }
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Hero
  padding-block: 0
  position: relative

  &_Background
    position: absolute
    inset: 0
    background-size: cover
    background-position: center
    background-repeat: repeat
    opacity: 0.5

  &_Content
    position: relative
    width: 100%
    overflow: hidden
    font-family: 'Artegra Sans Extended Medium'
    text-align: center
    letter-spacing: 0.1em
    padding-top: var(--spacing-section-vertical)
    padding-bottom: var(--spacing-section-vertical-small)
    padding-inline: var(--spacing-three)

    p
      font-size: 1.05rem
      letter-spacing: 0.1em
      margin-bottom: 2.5em
      max-width: 1120px
      margin-inline: auto

  &_Title
    padding: 0 25% 2.5rem

    figure
      max-width: 538px
      margin-inline: auto

    figcaption
      display: none
</style>
