<template>
  <div class="section-Popup" @click="emitTogglePopup">
    <component
      :is="popup[0].content.component | dashify"
      v-if="popup[0].content.component"
      :key="popup[0].content._uid"
      :blok="popup[0].content"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      popup: (state) => state.popup.list
    })
  },
  mounted() {
    console.log("POPUP", this.popup)
  },
  methods: {
    emitTogglePopup() {
      console.log("CLICKED")
      this.$emit("toggle-popup")
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Popup
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  z-index: $zindex-header-popup
  .section
    background: rgba(0,0,0,0.5)
</style>
