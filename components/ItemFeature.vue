<template>
  <div class="section-Feature_Item" :class="blok.background_color">
    <div class="section-Feature_Item_Content section-Content">
      <blok-item-door :image="blok.image.filename" :alt="blok.image.name" />
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
