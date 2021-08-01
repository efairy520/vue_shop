/<template>
  <div class="home">
    <top-slider :sliders="sliderList"></top-slider>
  </div>
</template>

<script>
import TopSlider from "@/components/home/TopSlider"
export default {
  components: {
    TopSlider,
  },
  data() {
    return {
      sliderList: [
        {
          pic: "https://demo26.crmeb.net/uploads/attach/2021/06/20210609/573443cca089a4103fd5bbc060494c1d.jpg"
        },
        {
          pic: "https://demo26.crmeb.net/uploads/attach/2021/06/20210609/573443cca089a4103fd5bbc060494c1d.jpg"
        }
      ]
    }
  }
}
</script>

<style>
</style>