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
      let URL = '/itemList.json'
      api.get(URL).then((res) => {
        commit('getTagList', res.data)
      })
    }
  },
  mutations: {
    // 获取全部标签信息
    getTagList (state, data) {
      let n = 1
      let arr = []
      let tagList = []
      let list = data.homeItemList
      for (const k in list) {
        if (list.hasOwnProperty(k)) {
          const e = list[k].tag
          for (let i = 0; i < e.length; i++) {
            let tag = e[i]
            arr.push(tag)
          }
        }
      }
      arr.sort()
      for (let i = 0; i < arr.length;) {
        let count = 0
        for (let j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++
          }
        }
        tagList.push({
          id: n++,
          name: arr[i],
          count: count
        })
        i += count
      }
      state.tagList = tagList
      state.tagNum = tagList.length
    }
  }
}
