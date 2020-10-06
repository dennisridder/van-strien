<template>
  <div v-editable="blok" class="item-Button">
    <button class="button typeLink">{{ blok.title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
