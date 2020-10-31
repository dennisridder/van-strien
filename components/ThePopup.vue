<template>
  <div class="section-Popup">
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
    // console.log("POPUP", this.popup)
  },
  methods: {
    emitTogglePopup() {
      this.$emit("toggle-popup")
    },
    emitTogglePopupFalse() {
      this.$emit("toggle-popup-false")
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
  display: flex
  justify-content: space-around
  align-items: center
  z-index: $zindex-header-popup
  background: rgba(0,0,0,0.5)
  // Resets
  .section
    background: rgba(0,0,0,0)
  .section-Feature
    // pointer-events: none
  .section-Feature_Item
    padding: var(--spacing-item-vertical)
    max-width: 100%
  .section-Feature_Item_Content > div
    margin-bottom: calc(#{var(--spacing-item-vertical)} / 2)
  .item-Door
    max-width: calc(33vh / 1.25)
  .typeDisplay
    font-size: 2rem
  // Actual
  &_Container
    // pointer-events: none
</style>
