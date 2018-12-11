import api from './../../assets/js/api'
import router from './../../router/'

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
      let tagList = []
      let list = data.homeItemList
      let key = router.currentRoute.params.id
      for (var i = 0; i < list.length; i++) {
        const element = list[i]
        const tag = element.tag
        for (var j = 0; j < tag.length; j++) {
          let e = tag[j]
          if (e === key) {
            tagList.push(element)
          }
        }
      }

      state.tagItem = tagList
      state.tagItemNum = tagList.length
    }
  }
}
