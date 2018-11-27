import api from './../../assets/js/api'

export default {
  state: {
    tagItem: [],
    tagItemNum: []
  },
  getters: {
    tagItem: state => state.tagItem,
    tagItemNum: state => state.tagItemNum
  },
  actions: {
    // 获取包含当前标签博客
    getTageItem ({commit}, key) {
      let URL = '/itemList.json'
      let data = {
        key: key
      }
      api.get(URL, data).then((res) => {
        commit('getTageItem', res.data)
      })
    }
  },
  mutations: {
    // 获取包含当前标签博客
    getTageItem (state, data) {
      state.tagItem = data.homeItemList
      state.tagItemNum = data.total
    }
  }
}
