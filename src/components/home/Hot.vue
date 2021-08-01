/<template>
  <div class="hot">
    <van-cell class="hot__title" value="更多" is-link>
      <template #title>
        <h3>
          热门榜单
          <span>根据销量、搜索、好评等综合得出</span>
        </h3>
      </template>
    </van-cell>

    <div class="hot-list">
      <div class="hot-item">
        <van-image
          width="80"
          height="80"
          src="https://demo26.crmeb.net/uploads/attach/2020/10/14/a6e363ed9350df90f947a823bf449be2.jpg"
        ></van-image>
        <h3 class="hot-item__name vshop-ellipsis">
          Apple iPhone 12 Pro Max (A2412) 512GB 石墨色 支持移动联通电信5G
          双卡双待手机
        </h3>
        <span class="hot-item__price"> <i>￥</i>9999.00 </span>
      </div>
      <div class="hot-item">
        <van-image
          width="80"
          height="80"
          src="https://demo26.crmeb.net/uploads/attach/2021/06/20210609/15bd39135aa85fc2693203390e6128fb.jpg"
        ></van-image>
        <h3 class="hot-item__name vshop-ellipsis">
          阿迪达斯官网 Pro Bounce 2019Low BATW男子场上篮球运动鞋EG1536
        </h3>
        <span class="hot-item__price"> <i>￥</i>9999.00 </span>
      </div>
      <div class="hot-item">
        <van-image
          width="80"
          height="80"
          src="https://demo26.crmeb.net/uploads/attach/2020/10/14/ab30f19cc4aa26c7b009552fcb4d1261.jpg"
        ></van-image>
        <h3 class="hot-item__name vshop-ellipsis">
          耐克NIKE 男子 板鞋 AJ1 乔1 AIR JORDAN 1 LOW SE 休闲鞋
          CK3022-005黑色43码
        </h3>
        <span class="hot-item__price"> <i>￥</i>9999.00 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hot {
  background: url(~@/assets/img/hot.png) no-repeat;
  background-size: 100% auto;
  margin-bottom: 20px;
  .van-cell {
    background: transparent;
  }

  &__title {
    .van-cell__title {
      flex: 5;
    }
    .van-cell__value {
      color: #fff;
    }
    .van-cell__right-icon {
      color: #fff;
    }
    h3 {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      span {
        font-size: 12px;
        font-weight: 500;
        margin-left: 10px;
      }
    }
  }

  &-list {
    display: flex;
    align-items: center;
    height: 165px;
    border-radius: 10px;
    margin: 0 15px;
    background-color: #fff;
    box-shadow: 0 0 15px -5px #aaa;
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }

    &__name {
      width: 100px;
      font-size: 13px;
      color: #282828;
      margin-top: 16px;
    }

    &__price {
      align-self: flex-start;
      font-size: 14px;
      font-weight: 700;
      color: #fc4141;
      margin-top: 5px;
      i {
        font-size: 12px;
      }
    }
  }
}
</style>