<template>
  <div class="tag-item">
    <Card shadow>
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
    <div class="page-box">
      <Page :total="100" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tagItem'
    ])
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
  .content{
    font-size: 16px;
  }
  .page-box{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
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
