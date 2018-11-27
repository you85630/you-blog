<template>
  <div class="home">
    <Card shadow class="item-box" v-for="li in itemList" :key="li.id">
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
    <Page :total="100" show-elevator />
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemList: [
        {
          id: 1,
          title: '名字名字名字名字名字名字',
          time: '2018-11-27',
          num: 123,
          read: 5,
          link: 'learn-vue',
          tag: 'vue',
          info: '啦啦啦啦'
        }, {
          id: 2,
          title: '名字名字名字名字名字名字',
          time: '2018-11-27',
          num: 123,
          read: 5,
          link: 'learn-vue',
          tag: 'vue',
          info: '啦啦啦啦'
        }, {
          id: 3,
          title: '名字名字名字名字名字名字',
          time: '2018-11-27',
          num: 123,
          read: 5,
          link: 'learn-vue',
          tag: 'vue',
          info: '啦啦啦啦'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
  font-size: 14px;
}
.item-box{
  margin-bottom: 20px;
  text-align: left;
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
</style>
