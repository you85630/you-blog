<template>
  <div class="tag-item">
    <Card shadow class="time-line">
      <Timeline>
          <TimelineItem color="#2d8cf0">
            <Icon type="md-bookmark" size="18" slot="dot"></Icon>
            <p>标签:</p>
            <p class="content">{{tagItem.title}}</p>
        </TimelineItem>
        <TimelineItem v-for="li in tagItem.list" :key="li.id" color="#515a6e">
          <router-link :to="'/archives/'+li.link">
            <p>{{li.time}}</p>
            <p class="content">{{li.title}}</p>
          </router-link>
        </TimelineItem>
      </Timeline>
    </Card>
    <Page :total="100" show-elevator />
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  },
  methods: {
    init () {
      document.title = '标签:' + this.tagItem.title + ' | You'
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.tag-item{
  text-align: center;
  font-size: 14px;
  .time-line{
    margin-bottom: 20px;
    text-align: left;
  }
  .content{
    font-size: 16px;
  }
  a{
    border-bottom: 1px dashed #999;
    color:#515a6e;
    &:hover{
      color: #17233d;
    }
  }
}
</style>
