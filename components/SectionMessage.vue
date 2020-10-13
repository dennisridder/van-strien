<template>
  <section
    v-editable="blok"
    class="section section-Message"
    :style="`background:${blok.background_color}`"
  >
    <div class="section-Message_Content">
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
    // console.log("MESSAGE", this.blok)
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Message
    position: relative
    display: flex
    justify-content: space-around
    &_Content
        padding: var(--spacing-three) var(--spacing-sides)
        text-align: center
        .markdown, caption
            width: 100%
        > div
            margin-bottom: var(--spacing-one)
        > div:last-child
            margin-bottom: 0
        .button, button
          background: $purple !important
</style>
