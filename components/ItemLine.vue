<template>
  <div class="item-Line">
    <div class="item-Line_Line"></div>
  </div>
</template>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Line
  position: relative
  display: flex
  justify-content: space-around
  text-align: center
  &_Line
    width: 6em
    height: 1px
    background: $brown
</style>
