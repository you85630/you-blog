import api from './../../assets/js/api'

export default {
  state: {
    searchList: []
  },
  getters: {
    searchList: state => state.searchList
  },
  actions: {
    // 搜索
    getSearchList ({ commit }, key) {
      let URL = '/itemList.json'
      if (key) {
        let data = {
          key: key
        }
        api.get(URL, data).then((res) => {
          commit('getSearchList', res.data)
        })
      } else {
        commit('getSearchList')
      }
    }
  },
  mutations: {
    // 搜索
    getSearchList (state, data) {
      if (data) {
        state.searchList = data.homeItemList
      } else {
        state.searchList = []
      }
    }
  }
}
