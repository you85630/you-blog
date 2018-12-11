<template>
  <div class="not-found">
    <p>页面不存在</p>
    <img src="./../assets/img/404.gif" alt="">
    <router-link to="/home">back to homepage <Icon type="ios-arrow-forward" /></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;

  user-select: none;
  p{
    font-size: 18px;
  }
  img{
    width: auto;
    height: 60vh;
  }
  a{
    margin-top: -40px;
    background-color: #fff;
    font-size: 14px;
  }
}
</style>
