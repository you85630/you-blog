<template>
  <div class="home">
    <Card shadow class="item-box" v-for="li in homeItemList" :key="li.id">
      <div class="title">{{li.title}}</div>
      <div class="time"><Icon type="md-calendar" />发表于：{{li.time}}</div>
      <div class="num">
        <p><Icon type="md-stats" />字数统计：{{li.num}}</p>
        <p class="num-mar">|</p>
        <p><Icon type="md-clock" />阅读时长 ≈ {{li.read}}分钟</p>
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
      'getItemList'
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
    }
    .time,
    .num{
      color: #999;
      font-size: 12px;
    }
    .num{
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-bottom: 10px;
      .num-mar{
        margin: 0 20px;
      }
    }
    .info{
      margin-bottom: 10px;
    }
  }
  .page-box{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
