import api from './../../assets/js/api'

export default {
  state: {
    details: ''
  },
  getters: {
    details: state => state.details
  },
  actions: {
    getDetails ({ commit }, key) {
      let URL = '/itemList.json'
      api.get(URL).then((res) => {
        let data = {
          list: res.data,
          key: key
        }
        commit('getDetails', data)
      })
    }
  },
  mutations: {
    getDetails (state, key) {
      let list = key.list.homeItemList
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        if (element.link === key.key) {
          state.details = element
        }
      }
    }
  }
}
