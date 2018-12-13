<template>
  <div class="home">
    <Card shadow class="item-box" v-for="li in homeItemList" :key="li.id">
      <div class="title"><router-link :to="'/archives/'+li.link">{{li.title}}</router-link></div>
      <div class="time"><Icon type="md-calendar" />发表于：{{li.time}}</div>
      <div class="num">
        <p><Icon type="md-stats" />字数统计：{{li.words}}字</p>
        <p class="num-mar">|</p>
        <p><Icon type="md-clock" />阅读时长 ≈ {{li.read}}分钟</p>
      </div>
      <div class="tag-box">
        <Icon type="md-bookmark" />标签：
        <span v-for="(t,index) in li.tag" :key="index" @click="linkTag(t)">{{t}}</span>
      </div>
      <div class="info">{{li.info}}</div>
      <router-link :to="'/archives/'+li.link">阅读全文<Icon size="16" type="md-arrow-dropright" /></router-link>
    </Card>
    <div class="page-box" v-if="homeTotal>10">
      <Page :total="homeTotal" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'homeItemList',
      'homeTotal'
    ])
  },
  methods: {
    ...mapActions([
      'getItemList',
      'linkTag'
    ])
  },
  created () {
    this.getItemList()
  }
}
</script>

<style lang="scss" scoped>
.home{
  .item-box{
    margin-bottom: 20px;
    i{
      margin-right: 4px;
    }
    .title{
      margin-bottom: 10px;
      font-size: 22px;
      a{
        color: #515a6e;
      }
    }
    .time,
    .num,
    .tag-box{
      color: #999;
      font-size: 12px;
    }
    .num{
      display: flex;
      align-items: center;
      flex-direction: row;
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
    .info{
      margin: 20px 0;
    }
  }
  .page-box{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
