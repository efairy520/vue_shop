/<template>
  <div class="cate-menu">
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="menu in menus" :key="menu.id">
        <van-image width="40px" height="40px" :src="menu.pic" />
        <span>{{ menu.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.cate-menu {
  .van-grid-item {
    span {
      font-size: 12px;
      margin-top: 4px;
    }
  }
}
</style>