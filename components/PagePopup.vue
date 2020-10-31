<template>
  <div class="section-Popup_Container">
    <div class="section-Popup_Close" @click="emitTogglePopupFalse">
      <div
        class="icon navIcon"
        v-html="require('~/assets/images/icon-close.svg?include')"
      />
    </div>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  props: {
    blok: Object
  },
  fetch({ store }) {
    store.commit("toggleThePopup")
  },
  computed: {
    ...mapState({
      popup: (state) => state.popup.list,
      popupState: (state) => state.popupstate.popupState
    })
  },
  mounted() {
    document.addEventListener("keydown", this.emitTogglePopupFalse)
  },
  destroyed() {
    document.removeEventListener("keydown", this.emitTogglePopupFalse)
  },
  methods: {
    emitTogglePopupFalse() {
      this.$store.commit("popupstate/popupFalse")
    }
  }
}
</script>
