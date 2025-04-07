<template>
  <div
    v-editable="blok"
    class="item-Faq"
    :style="{
      backgroundColor: blok.background_color,
      color: blok.text_color
    }"
  >
    <h2 class="typeTextCaps">
      {{ blok.title }}
    </h2>

    <div class="item-Faq_Items">
      <template v-for="blok in blok.body">
        <details :key="blok._uid" :blok="blok" class="item-Faq_Item">
          <summary class="item-Faq_Question">
            <h3>{{ blok.question }}</h3>
            <span>&gt;</span>
          </summary>
          <markdown :input="blok.answer" class="item-Faq_Answer" />
        </details>
      </template>
    </div>
  </div>
</template>

<script>
import Markdown from "./Markdown.vue"
export default {
  components: { Markdown },
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Faq
  text-align: center
  border-radius: 0.625rem
  padding: var(--spacing-three)
  text-align: left
  margin-inline: auto
  width: 100%
  max-width: 1280px

  @media screen and (min-width: 768px)
    padding: var(--spacing-two) var(--spacing-three)

  h2
    margin-bottom: 3rem

  &_Items
    display: flex
    flex-direction: column
    gap: 1rem

  &_Item
    border-bottom: 1px solid $landing-dark

    &:last-child
      margin-bottom: 0
      border-bottom: 0

  &_Question
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    margin-bottom: 1rem
    user-select: none
    padding: 0.5rem 0

    h3
      text-transform: none
      font-size: 1.5rem

      &:before
        content: '●'
        font-size: 50%
        vertical-align: middle
        margin-right: 1.25rem

    span
      display: block
      position: relative
      border-radius: 100%
      width: 2.33rem
      height: 2.33rem
      display: flex
      align-items: center
      justify-content: center
      background: $landing-secondary
      color: $landing-dark
      transition: all 0.2s ease

      [open] &
        transform: rotate(90deg)

  &_Answer
    display: block
    margin-bottom: 2rem
    opacity: 0
    visibility: hidden
    transition: all 0.2s ease 0.1s

    [open] &
      opacity: 1
      visibility: visible

details > summary
  list-style: none

details > summary::-webkit-details-marker
  display: none
</style>
