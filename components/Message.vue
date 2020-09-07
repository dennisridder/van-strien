<template>
  <section class="section section-Message">
    <div class="section-Message_Content">
      <markdown v-if="blok.text" :input="blok.text" />
      <div v-if="blok.caption" class="caption section-Message_Caption">
        {{ blok.caption }}
      </div>
      <div v-if="blok.body[0]" class="section-Message_Button">
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.columns"
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
  mounted() {
    // console.log(this.blok)
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
        padding: var(--spacing-two) var(--spacing-sides)
        width: 560px
        .markdown, caption
            text-align: center
            width: 100%
        > div
            margin-bottom: var(--spacing-one)
        > div:last-child
            margin-bottom: 0
</style>
