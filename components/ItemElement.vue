<template>
  <div v-editable="blok" class="item-Element">
    <figure>
      <img :src="blok.image.filename" :alt="blok.image.meta_data.alt" />
    </figure>
    <h3>{{ blok.title }}</h3>
    <markdown class="typeElement" :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass" scoped>
figure
  display: flex
  align-items: center
  justify-content: center
  width: 64px
  height: 64px
  margin-inline: auto
  margin-bottom: 1rem

  @media screen and (min-width: 768px)
    width: 80px
    height: 80px
    margin-left: 0

  img
    width: 100%
    height: 100%
    object-fit: contain

h3
  text-transform: none
  font-size: 1.5rem
  margin-bottom: 0.875rem

.typeElement
  font-size: 16px
  line-height: 1.5
  margin-top: 0.5rem
  margin-bottom: 0
</style>
