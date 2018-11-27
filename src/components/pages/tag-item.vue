<template>
  <div class="tag-item">
    <Card shadow>
      <Timeline>
          <TimelineItem color="#2d8cf0">
            <Icon type="md-bookmark" size="18" slot="dot"></Icon>
            <p>标签:</p>
            <p class="content">{{title}}</p>
        </TimelineItem>
        <TimelineItem v-for="li in tagItem" :key="li.id" color="#515a6e">
          <div class="tag-box" @click="linkTo(li.link)">
            <p>{{li.time}}</p>
            <p class="content">{{li.title}}</p>
          </div>
        </TimelineItem>
      </Timeline>
    </Card>
    <div class="page-box">
      <Page :total="100" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters([
      'tagItem'
    ])
  },
  methods: {
    ...mapActions([
      'getTageItem'
    ]),
    init () {
      // 获取页面数据
      let id = this.$route.params.id
      this.getTageItem(id)

      this.title = id
      // 页面标题
      document.title = '标签:' + id + ' | You'
    },
    linkTo (key) {
      this.$router.push('/archives/' + key.link)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.tag-item{
  .content{
    font-size: 16px;
    cursor: pointer;
  }
  .page-box{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
  .tag-box{
    color:#515a6e;
    &:hover{
      color: #17233d;
    }
  }
}
</style>
