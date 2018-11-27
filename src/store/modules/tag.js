import api from './../../assets/js/api'

export default {
  state: {
    tagList: [],
    tagNum: 0
  },
  getters: {
    tagList: state => state.tagList,
    tagNum: state => state.tagNum
  },
  actions: {
    // 获取全部标签信息
    getTagList ({ commit }, key) {
      let URL = '/tagList.json'
      api.get(URL).then((res) => {
        commit('getTagList', res.data)
      })
    }
  },
  mutations: {
    // 获取全部标签信息
    getTagList (state, data) {
      state.tagList = data.tagList
      state.tagNum = data.total
    }
  }
}
