<template>
  <div class="archives">
    <Card shadow>
      <Timeline>
          <TimelineItem color="#fc0">
            <Icon type="ios-trophy" size="18" slot="dot"></Icon>
            <p>请继续努力！</p>
            <p class="content">目前共计 {{archivesTotal}} 篇日志</p>
          </TimelineItem>
          <TimelineItem v-for="li in archivesList" :key="li.id" color="#515a6e">
            <router-link :to="'/archives/'+li.link">
              <p>{{li.time}}</p>
              <p class="content">{{li.title}}</p>
            </router-link>
          </TimelineItem>
      </Timeline>
    </Card>
    <div class="page-box" v-if="archivesTotal>10">
      <Page :total="archivesTotal" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'archivesList',
      'archivesTotal'
    ])
  },
  methods: {
    ...mapActions([
      'getArchivesList'
    ])
  },
  created () {
    this.getArchivesList()
  }
}
</script>

<style lang="scss" scoped>
.archives{
  .content{
    font-size: 16px;
    cursor: pointer;
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
