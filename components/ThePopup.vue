<template>
  <div v-if="popup[0].content.display" class="section-Popup">
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
    console.log(this.popup[0].content.display)
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
  height: 100%
  width: 100%
  display: inline-flex
  flex-direction: column
  justify-content: safe space-around
  align-items: safe center
  overflow: hidden
  overflow-y: auto
  z-index: $zindex-header-popup
  padding: var(--spacing-item-vertical) var(--spacing-section-horizontal)
  background: rgba(0,0,0,0.5)
  @media screen and (max-width: $breakpoint-mobile)
    padding-left: 1rem
    padding-right: 1rem
  // Resets
  .section
    background: rgba(0,0,0,0)
  .section-Feature
    margin-top: auto
  .section-Feature_Item
    padding: var(--spacing-item-vertical) var(--spacing-section-horizontal)
    max-width: 100%
  .section-Feature_Item_Content > div
    margin-bottom: calc(#{var(--spacing-item-vertical)} / 2)
  .item-Door
    max-width: calc(33vh / 1.25)
    margin-top: 1rem
  .typeDisplay
    font-size: 2rem
  // Actual
  &_Container
    position: relative
    margin-top: auto
    margin-bottom: auto
  &_Close
    position: absolute
    top: 0
    left: 0
    padding: var(--spacing-one)
    display: flex
    justify-content: flex-start
    .icon
      cursor: pointer
</style>
