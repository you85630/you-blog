<template>
  <div class="index">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="activeItem">
          <div class="menu-box">
            <div class="logo-box"><router-link to="/home">You's Blog</router-link></div>
            <div class="nav-box">
              <MenuItem class="center" :name="li.id" v-for="li in menuList" :key="li.id">
                <Icon size="18" :type="li.icon" />{{li.title}}
              </MenuItem>
              <div class="search" @click="visible=true"><Icon size="18" type="md-search" />搜索</div>
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
    <Modal footer-hide v-model="visible" title="搜索" width="55%">
        <Input prefix="ios-search" placeholder="Enter name" style="width: 100%" />
        <div class="search-list">
          111
        </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
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
          link: '/tags'
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
.menu-box{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
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
  .nav-box{
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .search{
    margin-left: 20px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    i{
      margin-right: 6px;
    }
  }
}
.footer{
  text-align: center;
}
.centent{
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 50px;
  width: 1300px;
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
  .card-box{
    box-sizing: border-box;
    margin-top: 24px;
    padding: 20px;
    min-height: 78vh;
  }
}
.search-list{
  margin-top: 10px;
}
.ivu-menu-dark{
  height: 64px;
  line-height: 64px;
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
