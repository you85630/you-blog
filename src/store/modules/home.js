import api from './../../assets/js/api'

export default {
  state: {
    homeItemList: [],
    homeTotal: 0
  },
  getters: {
    homeItemList: state => state.homeItemList,
    homeTotal: state => state.homeTotal
  },
  actions: {
    // 获取全部博客信息
    getItemList ({ commit }, key) {
      let URL = '/itemList.json'
      api.get(URL).then((res) => {
        commit('getItemList', res.data)
      })
    }
  },
  mutations: {
    // 获取全部博客信息
    getItemList (state, data) {
      state.homeItemList = data.homeItemList
      state.homeTotal = data.total
    }
  }
}
