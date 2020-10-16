<template>
  <section v-editable="blok" class="section section-Passage section-Contact">
    <div class="section-Passage_Item section-Passage_Left"></div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <form action="">
        <input type="text" placeholder="jouw naam" />
        <input type="text" placeholder="jouw mailadres" />
        <textarea type="textarea" placeholder="je bericht..." />
        <div class="button typeLink yellow">
          <a>Verstuur</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("CONTACT", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Contact
  color: $brown
</style>
