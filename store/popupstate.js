export const state = () => ({
  popupState: false
})

export const mutations = {
  toggleThePopup(state) {
    state.popupState = !state.popupState
  }
}
