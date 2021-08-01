/<template>
  <div class="top-slider">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(slider, index) in sliders" :key="index">
        <img
          :src="slider.pic"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scope>
.top-slider {
  .van-swipe-item {
    max-height: 187px;
    background-color: #39a9ed;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>