export default {
  state: {
    details: ''
  },
  getters: {
    details: state => state.details
  },
  actions: {
    getDetails ({commit}, key) {
      commit('getDetails', key)
    }
  },
  mutations: {
    getDetails (state, key) {
      state.details = key
    }
  }
}
