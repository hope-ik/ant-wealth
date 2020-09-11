<template>
  <div class="home">
    <!-- 头部 -->
    <div class="title-bg">
      <img class="title-logo" width="100" height="100" src="../assets/logo.png" alt />
      <div class="san"></div>
      <div class="title-txt out">我能帮你诊断风险，陪你挑...</div>
      <img class="title-search" width="15" height="15" src="../assets/search.png" alt />
    </div>
    <!-- 分类区域 -->
    <div class="classify">
      <div class="classify-kind" v-for="(item,index) in classify" :key="index">
        <img class width="32" height="32" :src="item.imag" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- 股率信息轮播 -->
    <div class="mege-hot">
      <div class="mege-lb">
        <span class="lb-spA">A股|深证成指</span>
        <span class="lb-spB">13284.03</span>
        <span class="lb-spC">-372.62</span>
        <span class="lb-spD">-2.73%</span>
        <div class="lb-dv">已收盘</div>
      </div>
      <div class="mege-hott">
        <div class="hot">热点</div>
        <span class="mag-hot">#天山生物涨...</span>
        <span class="mag-hot">#恒大7折买房</span>
        <span class="mag-hot">#离岛免税牌...</span>
      </div>
    </div>
    <div id="comNavigation">
      <!-- <router-link to="/Investment">投资顺风车</router-link>
      <router-link to="/DepositGold">攒点金子</router-link>
      <router-link to="/MoneyIn">稳健理财</router-link>
      <router-link to="/Optimization">进攻优选</router-link>
      <router-link to="/Assembly">精选组合</router-link>
      <router-link to="/Insurance">保险优选</router-link>-->
      <tabbar></tabbar>

      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item,index) in i" :title="item.name" :key="index">
          <div class="showBox" @touchstart="start" @touchmove="move" @touchend="end">
            <div
              v-for="(item,index) in list"
              :class="['showItem animate__animated animate__fadeIn','show'+item.id]"
              :key="index.id"
              ref="showItem"
            >
              <div class="title">{{item.title}}</div>
              <div class="details"></div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from "vant";
Vue.use(VanImage);

import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);

import Vue from "vue";
import tabbar from "@/components/Tabbar.vue";

import F2 from "@antv/f2";

export default {
  components: {
    tabbar,
  },
  name: "Home",
  data() {
    return {
      active: 0,
      i: [
        { name: "投资顺风车" },
        { name: "攒点金子" },
        { name: "稳健理财" },
        { name: "进攻优选" },
        { name: "精选组合" },
        { name: "保险优选" },
      ],
      classify: [
        { title: "余额宝", imag: require("../assets/Home/yueb.png") },
        { title: "理财", imag: require("../assets/Home/lic.png") },
        { title: "黄金", imag: require("../assets/Home/hj.png") },
        { title: "基金", imag: require("../assets/Home/jj.png") },
        { title: "尊享", imag: require("../assets/Home/zhunx.png") },

        { title: "股票", imag: require("../assets/Home/gp.png") },
        { title: "财富号", imag: require("../assets/Home/cfh.png") },
        { title: "年金险", imag: require("../assets/Home/bx.png") },
        { title: "帮你投", imag: require("../assets/Home/bnit.png") },
      ],
      list: [
        { id: 1, title: "地产" },
        { id: 2, title: "黄金" },
        { id: 3, title: "固定期限" },
        { id: 4, title: "业绩优选" },
        { id: 5, title: "投资组合" },
        { id: 6, title: "保险理财" },
      ],
      coordX: 0,
      changX: 0,
    };
  },
  watch: {},
  // created() {
  //   const lenL = this.list.length;
  //   if (lenL >= 3) {
  //     this.list.length = 3;
  //   }
  // },
  methods: {
    start(e) {
      //当手指触摸到屏幕时触发
      // console.log(e);
      this.coordX = e.touches[0].clientX;
      console.log("手指触摸clientX=" + this.coordX);
    },
    move(e) {
      //手指在屏幕上滑动连续触发
      // console.log(e);
    },
    end(e) {
      //手指离开屏幕触发
      // console.log(e);
      const endX = e.changedTouches[0].clientX;

      if (this.coordX - endX > 20) {
        //开始时左边超过结束时20以上 向左滑动
        this.toLeft();
      }
      if (endX - this.coordX > 20) {
        this.toRigth();
      }
    },
    //左滑事件
    toLeft() {
      const beforeIndex = this.changX == 0 ? 6 : this.changX - 1;
      const nextIndex = this.changX == 6 ? 0 : this.changX + 1;
      this.$refs.showItem[this.changX].classList.add("animate__fadeOutLeft");
      this.changX = nextIndex;
      console.log("左滑");
      //把第一项存起来
      const firstItem = this.list[0];
      //把第一项删除
      this.list.splice(0, 1);

      console.log(this.list, this.list.length, firstItem);
      this.$set(this.list, this.list.length, firstItem);
    },
    toRigth() {},
  },
};
</script>
<style lang="less" scoped>
@import url("./less/Home.less");
</style>