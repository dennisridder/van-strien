<template>
  <form
    ref="subscribe"
    name="subscribe-ac"
    method="POST"
    action="/succes"
    class="activecampaign"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="subscribe"
  >
    <div :class="'activecampaign-Container ' + (blok.color || '')">
      <input type="hidden" name="form-name" value="subscribe-ac" />
      <input type="hidden" name="listId" :value="blok.list_id" />
      <div class="activecampaign-Input">
        <input
          v-if="blok.show_first_name"
          v-model="form.firstName"
          type="text"
          name="firstName"
          :class="'activecampaign-Input ' + (blok.color || '')"
          placeholder="voornaam"
        />
        <input
          v-if="blok.show_last_name"
          v-model="form.lastName"
          type="text"
          name="lastName"
          :class="'activecampaign-Input ' + (blok.color || '')"
          placeholder="achternaam"
        />
        <input
          id="grid-email"
          v-model="form.email"
          name="email"
          required
          :class="'activecampaign-Input ' + (blok.color || '')"
          type="email"
          placeholder="e-mailadres"
        />
        <ul v-if="errors.length" class="activecampaign-Notification hide">
          <li v-for="(error, i) in errors" :key="i">
            <small>{{ error }}</small>
          </li>
        </ul>
      </div>
      <div class="activecampaign-Submit">
        <button type="submit" :class="buttonClass" :disabled="invalid">
          <span>{{ blok.button_label }}</span>
        </button>
      </div>
      <p
        v-if="blok.additional_text"
        class="activecampaign-addText"
        v-html="blok.additional_text"
      ></p>
      <div v-if="response.status >= 400" class="activecampaign-errorMessage">
        {{ response.message }}
      </div>
      <div v-if="response.status == 201" class="activecampaign-successMessage">
        {{ response.message }}
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios"

export default {
  props: {
    blok: Object,
    invalid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        listId: 1
      },
      response: {
        status: null,
        message: ""
      },
      submitLabel: "Subscribe",
      cachedForm: {},
      errors: []
    }
  },
  computed: {
    buttonClass() {
      let classList = { button: true, typeLink: true, disabled: this.invalid }

      if (this.blok.button_color) {
        classList[this.blok.button_color] = true
      } else if (this.blok.color) {
        classList[this.blok.color] = true
      } else {
        // Default color = offwhite
        classList["offwhite"] = true
      }

      return classList
    }
  },
  mounted() {
    this.cachedForm = { ...this.form }
  },
  methods: {
    async subscribe() {
      const formData = { ...this.form, listId: this.blok.list_id }
      try {
        const { status } = await axios.post("/api/ac/subscribe", formData, {
          headers: {
            "Content-Type": "application/json",
            "X-Form-Data": JSON.stringify(formData)
          }
        })
        this.response.status = status
        this.response.message = this.blok.success_message
        this.form = { ...this.cachedForm }
        this.$refs.subscribe.reset()

        if (status == 201 && this.blok.success_redirect) {
          window.location =
            this.blok.success_redirect.url ||
            (this.blok.success_redirect.cached_url
              ? `/${this.blok.success_redirect.cached_url}`
              : "/succes")
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.activecampaign-Input
  &.white
    color: $white
  &.offwhite
    color: $offwhite
  &.lightgrey
    color: $lightgrey
  &.yellow
    color: $yellow
  &.purple
    color: $purple
  &.darkbrown
    color: $darkbrown

  input
    color: inherit

  .activecampaign-Notification
    display: none

p.activecampaign-addText
    font-size: 0.75em
    line-height: 1.8em
    padding-top: 1em

.activecampaign-errorMessage
    font-family: 'Artegra Sans Extended Medium'
    font-size: 0.75em
    line-height: 1.8em
    padding-top: 1em
    color: red

.activecampaign-successMessage
    font-family: 'Artegra Sans Extended Medium'
    font-size: 0.875em
    font-weight: bold
    line-height: 1.8em
    padding-top: 1em
</style>
