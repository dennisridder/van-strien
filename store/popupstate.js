export const state = () => ({
  popupState: false,
  popupCount: 0
})

export const mutations = {
  toggleThePopup(state) {
    state.popupState = !state.popupState
  },
  popupTrue(state) {
    if (state.popupCount < 1) {
      state.popupState = true
      state.popupCount = state.popupCount + 1
    } else {
      return
    }
  },
  popupFalse(state) {
    state.popupState = false
  }
}
