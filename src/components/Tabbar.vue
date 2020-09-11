<template>
  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active :item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "发现",
          normal: require("../assets/xq.png"),
          active: require("../assets/xq1.png"),
        },
        {
          name: "Optional",
          title: "自选",
          normal: require("../assets/zx.png"),
          active: require("../assets/zx1.png"),
        },
        {
          name: "Community",
          title: "社区",
          normal: require("../assets/sq.png"),
          active: require("../assets/sq1.png"),
        },
        {
          name: "Asset",
          title: "资产",
          normal: require("../assets/zc.png"),
          active: require("../assets/zc1.png"),
        },
      ],
    };
  },
  methods: {},
  // 通过路由跳转判断选中的样式
  created() {
    if (this.$route.name == "Home") {
      this.active = 0;
    } else if (this.$route.name == "Optional") {
      this.active = 1;
    } else if (this.$route.name == "Community") {
      this.active = 2;
    } else if (this.$route.name == "Asset") {
      this.active = 3;
    }
  },
};
</script>

<style lang="less" scoped>
.van-tabbar {
  border-top: 1px solid #f5f5f5;
  z-index: 999;
}
</style>