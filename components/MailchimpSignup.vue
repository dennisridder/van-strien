<template>
  <validation-observer
    v-slot="{ invalid }"
    ref="subscribe"
    tag="form"
    class="mailchimp"
    @submit.prevent="!invalid && subscribe()"
  >
    <div class="mailchimp-Container">
      <div class="mailchimp-Input">
        <validation-provider
          v-slot="{ errors }"
          rules="required|email"
          :bails="false"
          tag="div"
          name="Email"
        >
          <input
            id="grid-email"
            v-model="form.email"
            class=""
            type="email"
            placeholder="Email"
          />
          <ul v-if="errors.length" class="mailchimp-Notification">
            <li v-for="(error, i) in errors" :key="i">
              <small>{{ error }}</small>
            </li>
          </ul>
        </validation-provider>
      </div>
      <div class="mailchimp-Submit">
        <button
          type="submit"
          :class="{ disabled: invalid }"
          :disabled="invalid"
        >
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      form: {
        email: ""
      },
      response: {
        status: null,
        message: ""
      },
      cachedForm: {}
    }
  },
  mounted() {
    this.cachedForm = { ...this.form }
  },
  methods: {
    async subscribe() {
      const formData = { ...this.form }
      try {
        const { data, status } = await axios.post("/api/subscribe", formData)
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
