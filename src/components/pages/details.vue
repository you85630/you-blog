<template>
    <Card shadow>
      <div class="details" v-html="details"></div>
    </Card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'details'
    ])
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
.details{
  font-size: 14px;
}
</style>
