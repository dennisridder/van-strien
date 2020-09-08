<template>
  <div v-if="image" class="Item-Door">
    <img :src="image" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: { image: String, alt: String }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Door
    position: relative
    width: 400px
    height: 0
    padding-top: 125%
    background: $black
    img
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        object-fit: cover
</style>
