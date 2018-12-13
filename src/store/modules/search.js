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
        let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]")
        for (let i = 0; i < data.homeItemList.length; i++) {
          const element = data.homeItemList[i]
          let msg = element.info.slice(0, 100)
          let text = ''
          for (let i = 0; i < msg.length; i++) {
            text = text + msg.substr(i, 1).replace(pattern, '')
          }
          element.info = text + '……'
        }
        state.searchList = data.homeItemList
      } else {
        state.searchList = []
      }
    }
  }
}
