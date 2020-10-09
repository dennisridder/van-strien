<template>
  <div v-editable="blok" class="item-Quote">
    <markdown :input="blok.quote" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
