<template>
  <div v-editable="blok" class="item-Spacer" :style="blockStyles"></div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  computed: {
    blockStyles() {
      const height = isNaN(this.blok.height)
        ? this.blok.height
        : `${this.blok.height}px`

      return {
        height
      }
    }
  }
}
</script>
