<template>
  <div v-if="image" v-editable="image" class="item-Door">
    <img :src="image" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: { image: String, alt: String }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Door
    position: relative
    width: 100%
    height: 0
    padding-top: 125%
    img
      border-radius: 1000px 1000px 0 0
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      object-fit: cover
</style>
