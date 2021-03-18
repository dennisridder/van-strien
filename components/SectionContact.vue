<template>
  <section v-editable="blok" class="section section-Passage section-Contact">
    <div class="section-Passage_Item section-Passage_Left"></div>
    <div class="section-Passage_Item section-Passage_Right section-Content">
      <form
        name="contact"
        method="POST"
        action="/succes"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" required name="name" placeholder="naam" />
        <input type="text" required name="email" placeholder="email adres" />
        <textarea
          type="textarea"
          required
          name="message"
          placeholder="bericht..."
        />
        <input class="button typeLink yellow" type="submit" value="verstuur" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Contact
  color: $brown
  form
    input, textarea
      margin-bottom: var(--spacing-section-vertical-small)
      &.button
        color: $darkbrown
</style>
