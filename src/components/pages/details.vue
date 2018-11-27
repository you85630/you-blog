<template>
  <div class="details">
    <Card shadow>
      111
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: {
        title: 'learn-vue'
      }
    }
  },
  methods: {
    init () {
      document.title = this.details.title + ' | You'
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
