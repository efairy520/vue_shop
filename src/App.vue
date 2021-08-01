<template>
  <div id="app">
    <div class="vshop-page-content vshop-page-content--has-margin-bottom">
      <router-view></router-view>
    </div>

    <!-- tabbar 底部导航 -->
    <van-tabbar route active-color="#E1251B">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="bag-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/reset.css';
@import "~@/assets/scss/common.scss";
</style>
