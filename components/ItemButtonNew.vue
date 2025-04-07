<template>
  <div v-editable="blok" class="block-ButtonNew">
    <AppButton
      v-if="blok.link"
      :href="blok.link.url"
      :target="blok.link.target"
      :color="blok.color"
    >
      {{ blok.title }}
    </AppButton>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
