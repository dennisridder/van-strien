export const state = () => ({
  popupState: false
})

export const mutations = {
  toggleThePopup(state) {
    state.popupState = !state.popupState
  },
  popupTrue(state) {
    state.popupState = true
  },
  popupFalse(state) {
    state.popupState = false
  }
}
