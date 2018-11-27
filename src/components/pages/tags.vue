<template>
  <div class="tag-box">
    <div class="headline">
      <h2>标签</h2>
      <p>目前共计<span>{{tagNum}}</span>个标签</p>
    </div>
    <Card shadow v-if="tagList.length">
      <div class="tag-list">
        <div class="tag" v-for="li in tagList" :key="li.id" :style="{fontSize:fontSize(li.num)+'px'}" @click="linkTo(li.link)">{{li.name}}</div>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tagList',
      'tagNum'
    ])
  },
  methods: {
    ...mapActions([
      'getTagList'
    ]),
    fontSize (key) {
      let size = 12
      size += key
      if (size >= 30) {
        size = 30
      }
      return size
    },
    linkTo (key) {
      this.$router.push('/tags/' + key)
    }
  },
  created () {
    this.getTagList()
  }
}
</script>

<style lang="scss" scoped>
.tag-box{
  .headline{
    text-align: center;
    h2{
      font-size: 20px;
    }
    p{
      margin: 20px 0;
      font-size: 14px;
      span{
        margin: 0 4px;
      }
    }
  }
  .tag-list{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    .tag{
      margin:10px 14px;
      margin-top: 0;
      border-bottom: 1px solid #999;
      color: #999;
      font-size: 12px;
      cursor: pointer;
      &:hover{
        border-color: #000;
        color: #515a6e;
      }
    }
  }
}
</style>
