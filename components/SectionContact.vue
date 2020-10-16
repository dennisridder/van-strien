<template>
  <section v-editable="blok" class="section section-Passage section-Contact">
    <div class="section-Passage_Item section-Passage_Left"></div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" placeholder="jouw naam" />
        <input type="text" placeholder="jouw mailadres" />
        <textarea type="textarea" placeholder="je bericht..." />
        <input class="button typeLink yellow" type="submit" value="verstuur" />
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
    // console.log("CONTACT", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Contact
  color: $brown
</style>
