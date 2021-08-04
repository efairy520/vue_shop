/<template>
  <div class="new-product">
    <van-cell
      class="new-product__title"
      value="更多"
      label="多个优质商品最新上架"
      is-link
    >
      <template #title>
        <h3>
          首发新品
          <span>NEW~</span>
        </h3>
      </template>
    </van-cell>

    <div class="new-product-list">
      <div class="new-product-list__content">
        <div
          class="new-product-item"
          v-for="newProd in newProds"
          :key="newProd.id"
        >
          <van-image
            width="120"
            height="120"
            :src="newProd.image"
          ></van-image>
          <h3 class="new-product-item__name vshop-ellipsis">
            {{newProd.store_name}}
          </h3>
          <span class="new-product-item__price"> <i>￥</i>{{newProd.price}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newProds: {
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.new-product {
  &__title {
    h3 {
      display: flex;
      align-items: center;
      color: #282828;
      font-size: 15px;
      font-weight: 700;
      span {
        font-size: 12px;
        color: #fc4141;
        margin-left: 5px;
      }
    }
  }

  &-list {
    height: 174px;
    margin: 0 15px;
    overflow-y: hidden;

    &__content {
      display: flex;
      height: 200px;
      overflow-x: auto;
      scroll-behavior: smooth;
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    margin-right: 10px;
    border-radius: 6px;
    overflow: hidden;

    &__name {
      width: 90%;
      font-size: 14px;
      color: #333;
      padding: 10px 5px 0 5px;
    }

    &__price {
      align-self: flex-start;
      padding: 5px 5px 10px 5px;
      font-size: 14px;
      font-weight: 700;
      color: #fc4141;

      i {
        font-size: 12px;
      }
    }
  }
}
</style>