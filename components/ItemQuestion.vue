<template>
  <div v-editable="blok" class="item-Question" @click="toggleTheState">
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
      this.toggleState = !this.toggleState
    }
  }
}
</script>

<style lang="sass">
.item
  &-Question
    .plusminus
      position: relative
      transform: translateY(-2px)
      width: 1.5rem
      span
        position: absolute
        left: 0
        top: 0
    &_Question
      display: inline-flex
      cursor: pointer
    &_Answer
      max-height: 0
      transition: max-height .33s ease .165s
      overflow: hidden
      max-width: 42em
      .markdown
        padding-top: 0.5rem
        opacity: 0
        transition: all .33s ease
      &.active
        max-height: 500px
        transition: max-height .33s ease
        .markdown
          opacity: 1
          transition: all .33s ease
</style>
