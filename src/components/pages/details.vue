<template>
    <Card shadow>
      <div class="details-title" slot="title">
        <div class="title">{{details.title}}</div>
        <div class="time"><Icon type="md-calendar" />发表于：{{details.time}}</div>
        <div class="num-box">
          <p><Icon type="md-stats" />字数统计：{{details.num}}</p>
          <p class="num-mar">|</p>
          <p><Icon type="md-clock" />阅读时长 ≈ {{details.read}}分钟</p>
        </div>
      </div>
      <div v-html="compiledMarkdown"></div>
    </Card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import marked from 'marked'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  computed: {
    ...mapGetters([
      'details'
    ]),
    compiledMarkdown: function () {
      if (this.details) {
        return marked(this.details.info, { sanitize: true })
      }
    }
  },
  methods: {
    ...mapActions([
      'getDetails'
    ]),
    init () {
      // 获取页面数据
      let id = this.$route.params.id
      this.getDetails(id)
      // 页面标题
      document.title = id + ' | You'
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.details-title{
  i{
    margin-right: 4px;
  }
  .title{
    margin-bottom: 10px;
    font-size: 22px;
  }
  .time{
    color: #999;
    font-size: 12px;
  }
  .num-box{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    p{
      width: auto;
      color: #999;
      font-size: 12px;
      font-weight: normal;
    }
    .num-mar{
      margin: 0 12px;
    }
  }
}
</style>
