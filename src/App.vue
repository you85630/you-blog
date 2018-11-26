<template>
  <div id="app">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="activeItem">
          <div class="menu-box">
            <div class="logo-box"><router-link to="/home">You的博客</router-link></div>
            <div class="nav-box">
              <MenuItem class="center" :name="li.id" v-for="li in menuList" :key="li.id">
                <Icon size="18" :type="li.icon" />{{li.title}}
              </MenuItem>
            </div>
          </div>
        </Menu>
      </Header>
      <Content class="centent">
        <Card shadow class="card-box">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </Card>
        <Footer class="footer">2018<span v-if="time!==2018">&nbsp;-&nbsp;{{time===2018?'':time}}</span>&nbsp;&copy;&nbsp;You</Footer>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 1,
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
          link: '/tag'
        }, {
          id: 4,
          icon: 'md-contact',
          title: '关于',
          link: '/about'
        }
      ]
    }
  },
  computed: {
    time: function () {
      let time = new Date().getFullYear()
      return time
    }
  },
  methods: {
    activeItem (name) {
      let list = this.menuList
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const e = list[key]
          if (e.id === name) {
            this.$router.push(e.link)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100%;
  width: 100%;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  background-color: #f5f7f9;
  font-size: 0;
}
.ivu-menu-dark{
  height: 64px;
  line-height: 64px;
}
.menu-box{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .logo-box{
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
      font-weight: bold;
      font-size: 18px;
      font-family:"Hiragino Sans GB";
      cursor: pointer;
    }
  }
}
.footer{
  text-align: center;
}
.centent{
  padding: 0 50px;
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s ease-in-out;
  }

  .slide-fade-enter,
  .slide-fade-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
  .card-box{
    box-sizing: border-box;
    margin-top: 24px;
    padding: 20px;
    min-height: 79vh;
  }
}
.ivu-menu-item-active,
.ivu-menu-item-selected {
  font-size: 16px;
}
.center{
  display: flex;
  align-items: center;
  flex-direction: row;
}
</style>
