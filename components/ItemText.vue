<template>
  <div v-editable="blok" class="item-Text">
    <markdown class="typeText" :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("TEXT", this.blok)
  }
}
</script>
