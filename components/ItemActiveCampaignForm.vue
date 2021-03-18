<template>
  <validation-observer
    v-slot="{ invalid }"
    ref="subscribe"
    tag="form"
    class="activecampaign"
    @submit.prevent="!invalid && subscribe()"
  >
    <div :class="'activecampaign-Container ' + (blok.color || '')">
      <div class="activecampaign-Input">
        <validation-provider
          v-slot="{ errors }"
          :bails="false"
          tag="div"
          name="Email"
        >
          <input
            type="text"
            v-model="form.firstName"
            v-if="blok.show_first_name"
            :class="'activecampaign-Input ' + (blok.color || '')"
            placeholder="voornaam"
          />
          <input
            type="text"
            v-model="form.lastName"
            v-if="blok.show_last_name"
            :class="'activecampaign-Input ' + (blok.color || '')"
            placeholder="achternaam"
          />
          <input
            id="grid-email"
            v-model="form.email"
            required
            :class="'activecampaign-Input ' + (blok.color || '')"
            type="email"
            placeholder="email"
          />
          <ul v-if="errors.length" class="activecampaign-Notification hide">
            <li v-for="(error, i) in errors" :key="i">
              <small>{{ error }}</small>
            </li>
          </ul>
        </validation-provider>
      </div>
      <div class="activecampaign-Submit">
        <button type="submit" :class="buttonClass" :disabled="invalid">
          <span>{{ blok.button_label }}</span>
        </button>
      </div>
    </div>
  </validation-observer>
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
        email: ""
      },
      response: {
        status: null,
        message: ""
      },
      submitLabel: "Subscribe",
      cachedForm: {}
    }
  },
  computed: {
    buttonClass() {
      let classList = { button: true, typeLink: true, disabled: this.invalid }

      if (this.blok.button_color) {
        classList[this.blok.button_color] = true
      } else if (this.blok.color) {
        classList[this.blok.color] = true
      }

      return classList
    }
  },
  mounted() {
    this.cachedForm = { ...this.form }
  },
  methods: {
    async subscribe() {
      const formData = { ...this.form }
      try {
        const { data, status } = await axios.post("/api/subscribe-ac", formData)
        this.response.status = status
        this.response.message = `Thanks, ${data.email_address} is subscribed!`
        this.form = { ...this.cachedForm }
        this.$refs.subscribe.reset()
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
</style>
