/<template>
  <div class="lovely">
    <div class="lovely-left">
      <van-image width="130" height="130" :src="lovely[0].img" />
    </div>
    <div class="lovely-right">
      <van-image width="208" height="60" :src="lovely[1].img" />
      <van-image width="208" height="60" :src="lovely[2].img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lovely: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lovely {
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .lovely-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>