import api from './../../assets/js/api'

export default {
  state: {
    archivesList: [],
    archivesTotal: 0
  },
  getters: {
    archivesList: state => state.archivesList,
    archivesTotal: state => state.archivesTotal
  },
  actions: {
    // 获取全部博客信息
    getArchivesList ({ commit }, key) {
      let URL = '/itemList.json'
      api.get(URL).then((res) => {
        commit('getArchivesList', res.data)
      })
    }
  },
  mutations: {
    // 获取全部博客信息
    getArchivesList (state, data) {
      state.archivesList = data.homeItemList
      state.archivesTotal = data.total
    }
  }
}
