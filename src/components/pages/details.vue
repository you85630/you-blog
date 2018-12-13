<template>
    <Card shadow>
      <div class="details-title" slot="title">
        <div class="title">{{details.title}}</div>
        <div class="time-box"><Icon type="md-calendar" />发表于：{{details.time}}</div>
        <div class="num-box">
          <p><Icon type="md-stats" />字数统计：{{details.words}}字</p>
          <p class="num-mar">|</p>
          <p><Icon type="md-clock" />阅读时长 ≈ {{details.read}}分钟</p>
        </div>
        <div class="tag-box">
          <Icon type="md-bookmark" />标签：
          <span v-for="(t,index) in details.tag" :key="index" @click="linkTag(t)">{{t}}</span>
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
      if (this.details.info) {
        return marked(this.details.info || '', {sanitize: true})
      }
    }
  },
  methods: {
    ...mapActions([
      'getDetails',
      'linkTag'
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
  text-align: center;
  margin: 10px 0;
  i{
    margin-right: 4px;
  }
  .title{
    font-size: 22px;
  }
  .tag-box,
  .num-box p,
  .time-box{
    color: #999;
    font-size: 12px;
  }
  .time-box{
    margin-top: 20px;
  }
  .num-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 4px 0;
    p{
      width: auto;
      font-weight: normal;
    }
    .num-mar{
      margin: 0 12px;
    }
  }
  .tag-box{
    span{
      margin-right: 6px;
      cursor: pointer;
      &:hover{
        color: #2d8cf0;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>
