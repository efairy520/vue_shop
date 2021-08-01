/<template>
  <div class="recommendation">
    <van-cell-group>
      <van-cell
        title="精品推荐"
        value="更多"
        label="诚意推荐品质商品"
        is-link
      />
    </van-cell-group>
    <div class="recommendation-list">
      <div
        class="recommendation-item"
        v-for="recommend in recommends"
        :key="recommend.id"
      >
        <div class="recommendation-item__image">
          <van-image width="90" height="90" :src="recommend.image" />
        </div>
        <div class="recommendation-item__info">
          <h3>{{ recommend.store_name }}</h3>
          <span>￥{{ recommend.price }}</span>
          <a href="javascript:" class="recommendation-item__cart-btn">
            <van-icon name="cart-circle-o" size="25" color="#ff3700" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommendation {
  .van-cell {
    &__title {
      font-size: 16px;
    }

    &__label {
      font-size: 14px;
    }
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;

    &__info {
      position: relative;
      width: 244px;
      padding: 35px 15px 35px 0;

      h3 {
        font-size: 15px;
        color: #222;
        margin-bottom: 10px;
      }

      span {
        font-size: 12px;
        color: #282828;
        font-weight: 700;
      }
    }

    &__cart-btn {
      position: absolute;
      right: 15px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      font-size: 15px;
      bottom: 30px;
    }
  }
}
</style>