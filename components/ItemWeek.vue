<template>
  <li class="section-BlogGrid_Item">
    <div class="section-BlogGrid_Item_Content">
      <blok-item-door :image="blok.image.filename" :alt="blok.image.name" />
      <h2 v-if="blok.title" class="typeTextCaps">{{ blok.title }}</h2>
      <markdown class="typeText" :input="blok.excerpt" />
      <div class="section-BlogGrid_Item_Number">
        <h2 class="typeTitleItalic">W{{ index + 1 }}</h2>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    blok: Object,
    index: Number
  }
}
</script>
