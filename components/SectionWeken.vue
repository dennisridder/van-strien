<template>
  <section v-editable="blok" class="section section-BlogGrid">
    <ul class="section-BlogGrid_Wrapper">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("WEKEN", this.blok)
  }
}
</script>
