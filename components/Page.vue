<template>
  <div
    class="section-Wrapper section-Page"
    :data-hide-header="blok.hide_header"
    :data-hide-footer="blok.hide_footer"
    :data-hide-menu="blok.hide_menu"
  >
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
