<template>
  <div class="optional">
    <van-nav-bar class="nav">
      <template #left>
        <span>市场</span>
      </template>
      <template #title>
        <div class="flex">
          <router-link to="/Optional/Stock">
            <div class="nav-g">股票</div>
          </router-link>
          <router-link to="/Optional/Fund">
            <div class="nav-j">基金</div>
          </router-link>
        </div>
      </template>
      <template #right>
        <van-icon name="search" size="25" tag="u" />
        <van-icon name="bars" size="25" tag="u" />
      </template>
    </van-nav-bar>

    <tabbar></tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import tabbar from "@/components/Tabbar.vue";
import { NavBar } from "vant";
Vue.use(NavBar);
import { Icon } from "vant";
Vue.use(Icon);
export default {
  components: {
    tabbar,
  },
  name: "Optional",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import url("../views/less/Optional");
</style>
