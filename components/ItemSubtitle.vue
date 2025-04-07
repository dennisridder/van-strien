<template>
  <div v-editable="blok" class="item-SubTitle">
    <markdown
      :class="blok.serif_font ? 'typeSerifText' : 'typeTextCaps'"
      :input="blok.subtitle"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
