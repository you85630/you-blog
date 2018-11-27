import api from './../../assets/js/api'

export default {
  state: {
    menuList: [
      {
        id: 1,
        icon: 'md-home',
        title: '首页',
        link: '/home'
      }, {
        id: 2,
        icon: 'md-cube',
        title: '归档',
        link: '/archives'
      }, {
        id: 3,
        icon: 'md-bookmark',
        title: '标签',
        link: '/tags'
      }, {
        id: 4,
        icon: 'md-contact',
        title: '关于',
        link: '/about'
      }
    ],
    homeItemList: [],
    homeTotal: 0
  },
  getters: {
    menuList: state => state.menuList,
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
