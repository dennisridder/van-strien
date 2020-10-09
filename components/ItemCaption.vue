<template>
  <div v-editable="blok" class="item-Caption">
    <markdown class="typeCaption" :input="blok.caption" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
