/<template>
  <div class="home">
    <top-slider :sliders="sliders"></top-slider>
    <cate-menu :menus="menus"></cate-menu>
    <lovely-com :lovely="lovely"></lovely-com>
    <recommendation :recommends="recommends"></recommendation>
    <hot :recommends="recommends"></hot>
  </div>
</template>

<script>
import TopSlider from "@/components/home/TopSlider"
import CateMenu from "@/components/home/CateMenu"
import LovelyCom from "@/components/home/Lovely"
import Recommendation from "@/components/home/Recommendation"
import Hot from "@/components/home/Hot"
export default {
  components: {
    TopSlider,
    CateMenu,
    LovelyCom,
    Recommendation,
    Hot
  },
  data() {
    return {
      sliders: [{
        pic: "https://demo26.crmeb.net/uploads/attach/2021/06/20210609/573443cca089a4103fd5bbc060494c1d.jpg"
      }, {
        pic: "https://demo26.crmeb.net/uploads/attach/2021/06/20210609/573443cca089a4103fd5bbc060494c1d.jpg"
      }],
      menus: [{
        name: '商品分类',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/1ce06202107161422124702.png'
      }, {
        name: '限时秒杀',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/fbd8d202107161422123317.png'
      }, {
        name: '付费会员',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/0d828202107161422123890.png'
      }, {
        name: '拼团活动',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/c0028202107161422128370.png'
      }, {
        name: '我的收藏',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/cfc7c20210716142212192.png'
      }, {
        name: '我要签到',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/f7a75202107161422123070.png'
      }, {
        name: '领优惠券',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/2be1f202107161422126871.png'
      }, {
        name: '分销中心',
        pic: 'https://qiniu.crmeb.net/attach/2021/07/99488202107161422121555.png'
      }],
      lovely: [{
        img: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201017/c5600fb9bfee1eb89bd09996df0476dc.gif'
      }, {
        img: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201017/d0fca260e8d764c5477674f0e73e47ef.gif'
      }, {
        img: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201017/600f83a8d0cae22d0d2239dda434a17e.gif'
      }],
      recommends: [{
        store_name: '美的（Midea）吸尘器V1手持吸尘器家用除螨无线',
        image: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201014/9508488b156bddb7af17b02fefe4bc8f.jpg',
        price: '999.00'
      },{
        store_name: '美的（Midea）吸尘器V1手持吸尘器家用除螨无线',
        image: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201014/9508488b156bddb7af17b02fefe4bc8f.jpg',
        price: '999.00'
      },{
        store_name: '美的（Midea）吸尘器V1手持吸尘器家用除螨无线',
        image: 'https://demo26.crmeb.net/uploads/attach/2020/10/20201014/9508488b156bddb7af17b02fefe4bc8f.jpg',
        price: '999.00'
      }]
    }
  }
}
</script>

<style>
</style>