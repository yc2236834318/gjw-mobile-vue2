<!-- 首页 二级组件 -->

<template>
  <div class="home">
    <!-- 导航条 -->
    <van-nav-bar title="购机网" fixed />

    <!-- 搜索框 -->
    <van-search readonly shape="round" background="#f1f1f2" placeholder="请输入搜索关键词" @click="$router.push('/search')" />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imgUrl">
        <img :src="item.imgUrl" @click="$router.push(`/prodetail/${item.link.param.query.goodsId}`)" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item v-for="item in navList" :key="item.imgUrl"
      :icon="item.imgUrl" :text="item.text"
      @click="$router.push('/category')" />
    </van-grid>

    <!-- 主会场 -->
    <div class="main" @click="$router.push('/category')">
      <img :src="mainImg" alt="">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title" v-html="mainTitle"></p>
      <div class="goods-list">
        <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue' // 导入子组件
import { getHomeDataApi } from '@/api/home' // 导入首页接口请求函数
export default {
  name: 'HomePage',
  components: {
    GoodsItem
  },
  data () {
    return {
      bannerList: [], // 轮播图
      navList: [], // 导航栏
      proList: [], // 商品
      mainImg: '', // 主会场图片
      mainTitle: '' // 主会场标题
    }
  },
  async created () {
    const res = await getHomeDataApi() // 请求首页数据
    // console.log(res)
    const { data: { pageData } } = res
    this.bannerList = pageData.items[1].data
    this.navList = pageData.items[3].data
    this.mainImg = pageData.items[4].data[0].imgUrl
    this.mainTitle = pageData.items[5].params.content
    this.proList = pageData.items[6].data
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 100px;
  padding-bottom: 50px;

  // 导航条样式定制
  .van-nav-bar {
    z-index: 999;
    background-color: #c21401;

    ::v-deep .van-nav-bar__title {
      color: #fff;
    }
  }

  // 搜索框样式定制
  .van-search {
    position: fixed;
    top: 46px;
    z-index: 999;
    width: 100%;
  }

  // 分类导航部分
  .my-swipe .van-swipe-item {
    height: 185px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }

  .my-swipe .van-swipe-item img {
    width: 100%;
    height: 185px;
  }

  // 主会场
  .main img {
    display: block;
    width: 100%;
  }

  // 猜你喜欢
  .guess .guess-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  // 商品样式
  .goods-list {
    background-color: #f6f6f6;
  }
}
</style>
