import api from './../../assets/js/api'

export default {
  state: {
    name: ''
  },
  getters: {
    name: state => state.name
  },
  actions: {
    // 异步事件
    getName ({commit}, key) {
      let URL = ''
      let data = {}
      api.post(URL, data).then((res) => {
        commit('getName', res.data)
      })
    }
  },
  mutations: {
    // 同步事件，可修改state中的数据
    getName (state, data) {
      console.log(data)
    }
  }
}
