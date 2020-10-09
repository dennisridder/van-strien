<template>
  <div v-editable="blok" class="item-Message">
    <markdown class="typeTextMessage" :input="blok.message" />
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
@import '~/assets/styles/variables.sass'

.item-Message
    color: $brown
    max-width: 32em
</style>
