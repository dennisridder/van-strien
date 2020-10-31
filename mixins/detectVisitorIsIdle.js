import { mapState } from "vuex"

export default {
  data() {
    return {
      timeoutInMiliseconds: 30000,
      timeoutId: ""
    }
  },
  fetch({ store }) {
    store.commit("toggleThePopup")
  },
  computed: {
    ...mapState({
      popupState: (state) => state.popupstate.popupState
    })
  },
  mounted() {
    this.startTimer()
    document.addEventListener("mousemove", this.resetTimer)
    document.addEventListener("mousedown", this.resetTimer)
    document.addEventListener("keypress", this.resetTimer)
    document.addEventListener("touchmove", this.resetTimer)
  },
  destroyed() {
    document.removeEventListener("mousemove", this.resetTimer)
    document.removeEventListener("mousedown", this.resetTimer)
    document.removeEventListener("keypress", this.resetTimer)
    document.removeEventListener("touchmove", this.resetTimer)
  },
  methods: {
    startTimer() {
      this.timeoutId = window.setTimeout(
        this.doInactive,
        this.timeoutInMiliseconds
      )
    },
    resetTimer() {
      window.clearTimeout(this.timeoutId)
      this.startTimer()
    },
    doInactive() {
      this.$store.commit("popupstate/popupTrue")
    }
  }
}
