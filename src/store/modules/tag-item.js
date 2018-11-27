export default {
  state: {
    tagItem: {
      title: 'vue',
      list: [
        {
          id: 1,
          time: '2018-11-27',
          title: '学习vuex',
          link: 'learn-vue'
        }, {
          id: 2,
          time: '2018-11-28',
          title: '学习vuex学习vuex学习vuex学习vuex学习vuex学习vuex学习vuex',
          link: 'learn-vue'
        }
      ]
    }
  },
  getters: {
    tagItem: state => state.tagItem
  },
  actions: {
    // 异步事件
    getName ({commit}, key) {
      commit('getName')
    }
  },
  mutations: {
    // 同步事件，可修改state中的数据
    getName (state, data) {
      console.log(data)
    }
  }
}
