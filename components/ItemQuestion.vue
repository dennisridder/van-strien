<template>
  <div @click="toggleTheState" v-editable="blok" class="item-Question">
    <div class="item-Question_Question">
      <div class="plusminus">
        <transition-group name="fadegroup">
          <span v-if="!toggleState" key="plus" class="plus">+</span>
          <span v-if="toggleState" key="minus" class="minus">-</span>
        </transition-group>
      </div>
      <markdown class="typeQuestion" :input="blok.question" />
    </div>
    <div class="item-Question_Answer" :class="{ active: toggleState }">
      <markdown class="typeLink" :input="blok.answer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      toggleState: false
    }
  },
  updated() {
    console.log(this.toggleState)
  },
  methods: {
    toggleTheState() {
      console.log(this.toggleState)
      this.toggleState = !this.toggleState
    }
  }
}
</script>

<style lang="sass">
.item
  &-Question
    .plusminus
      transform: translateY(-2px)
    &_Question
      cursor: pointer
      display: inline-flex
      .markdown
        margin-left: .5rem
    &_Answer
      max-height: 0
      transition: max-height .33s ease-in-out
      overflow: hidden
      &.active
        max-height: 1000px
</style>
