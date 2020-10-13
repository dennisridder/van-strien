<template>
  <div v-editable="blok" class="item-Button">
    <div class="button typeLink" :style="`background:${blok.color}`">
      <a>
        {{ blok.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
.button
  display: inline-block
  cursor: pointer
  padding: .833rem 2.44rem
  color: currentColor
  a
    vertical-align: sub
</style>
