<template>
  <div class="index">
    <Layout>
      <Header>
          <div class="menu-box width-min">
            <div class="logo-box">
              <router-link to="/home">You's Blog</router-link>
              <div class="open" @click="showMenu=!showMenu" v-if="modeType==='vertical'"><Icon size="32" type="md-menu" /></div>
            </div>
            <div class="nav-box" v-if="showMenu">
              <Menu :mode="modeType" theme="dark" :class="{'menu-lang':modeType==='vertical'}" :active-name="activeName" @on-select="activeItem">
                <MenuItem class="center" :name="li.id" v-for="li in menuList" :key="li.id">
                  <Icon size="18" :type="li.icon" />{{li.title}}
                </MenuItem>
              </Menu>
            </div>
          </div>
      </Header>
      <Content class="centent width-min">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
      </Content>
      <Footer class="footer">2018<span v-if="time!==2018">&nbsp;-&nbsp;{{time===2018?'':time}}</span>&nbsp;&copy;&nbsp;You</Footer>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      searchKey: '',
      modeType: 'horizontal',
      showMenu: true,
      visible: false,
      activeName: 1
    }
  },
  computed: {
    ...mapGetters([
      'menuList',
      'searchList'
    ]),
    time: function () {
      let time = new Date().getFullYear()
      return time
    }
  },
  methods: {
    // 页面布局响应
    init () {
      if (document.body.clientWidth <= 644) {
        this.modeType = 'vertical'
        this.showMenu = false
      } else {
        this.modeType = 'horizontal'
        this.showMenu = true
      }
    },
    // 导航跳转
    activeItem (name) {
      this.activeName = name
      let list = this.menuList
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const e = list[key]
          if (e.id === name) {
            this.$router.push(e.link)
          }
        }
      }
      if (this.modeType === 'vertical') {
        this.showMenu = false
      }
    },
    // 跳转到定位页面
    linkTo (key) {
      this.$router.push('/archives/' + key)
      // 重置搜搜条件
      this.visible = false
    }
  },
  mounted () {
    window.onresize = () => {
      this.init()
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.width-min{
  margin: 0 auto;
  width: 60%;
}
.menu-box{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  user-select: none;
  .logo-box{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-between;
    a{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      padding: 0 10px;
      height: 30px;
      border-radius: 3px;
      background: #5b6270;
      color: #fff;
      white-space: nowrap;
      font-weight: bold;
      font-size: 18px;
      font-family:"Hiragino Sans GB";
      cursor: pointer;
    }
  }
  .nav-box{
    display: flex;
    align-items: center;
    flex-direction: row;
    .center{
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    .menu-lang{
      width: 100% !important;
    }
  }
  .open{
    margin-left: 20px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
}
.footer{
  background-color: #fff;
  text-align: center;
}
.centent{
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
    min-height: 77vh;
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s ease-in-out;
  }

  .slide-fade-enter,
  .slide-fade-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
}
.ivu-menu-item-active,
.ivu-menu-item-selected {
  font-size: 16px;
}
@media (max-width: 1200px) {
  .width-min{
    min-width: 75%;
  }
}
@media (max-width: 1100px) {
  .width-min{
    min-width: 80%;
  }
}
@media (max-width: 960px) {
  .width-min{
    min-width: 90%;
  }
  .ivu-layout-header{
    padding: 0 20px;
  }
}
@media (max-width: 720px) {
  .width-min{
    min-width: 95%;
  }
  .ivu-layout-header{
    padding: 0 20px;
  }
}
@media (max-width: 650px) {
  .width-min{
    min-width: 100%;
  }
  .menu-box{
    display: block;
    .search{
      padding: 14px 2px;
    }
  }
  .logo-box{
    box-sizing: border-box;
    width: 100%;
  }
  .nav-box{
    align-items: flex-start !important;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ccc;
  }
  .ivu-layout-header{
    padding: 20px;
    height: auto;
    line-height: 1;
  }
}
</style>
