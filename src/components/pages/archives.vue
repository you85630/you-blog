<template>
  <div class="archives">
    <Timeline>
        <TimelineItem color="#fc0">
            <Icon type="ios-trophy" size="18" slot="dot"></Icon>
            <p>继续努力！</p>
            <p class="content">目前共计 {{archives.num}} 篇日志</p>
        </TimelineItem>
        <TimelineItem v-for="li in archives.list" :key="li.id" color="#515a6e">
          <router-link :to="'/archives/'+li.link">
            <p>{{li.time}}</p>
            <p class="content">{{li.title}}</p>
          </router-link>
        </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      archives: {
        num: 123,
        list: [
          {
            id: 1,
            time: '2018-11-27',
            title: '学习vuex',
            link: 'learn-vue1'
          }, {
            id: 2,
            time: '2018-11-28',
            title: '学习vuex学习vuex学习vuex学习vuex学习vuex学习vuex学习vuex',
            link: 'learn-vue2'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.archives{
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
