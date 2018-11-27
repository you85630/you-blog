<template>
  <div class="tag-box">
    <div class="headline">
      <h2>标签</h2>
      <p>目前共计<span>{{tagNum}}</span>个标签</p>
    </div>
    <Card shadow class="tag-list" v-if="tagList.length">
      <router-link v-for="li in tagList" :key="li.id" :to="'/tags/'+li.link" :style="{fontSize:fontSize(li.num)+'px'}">{{li.name}}</router-link>
    </Card>
    <div class="data-none" v-else>请加油哟~~</div>
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
    a{
      margin:10px 14px;
      margin-top: 0;
      border-bottom: 1px solid #999;
      color: #999;
      font-size: 12px;
      &:hover{
        border-color: #000;
        color: #515a6e;
      }
    }
  }
}
</style>
