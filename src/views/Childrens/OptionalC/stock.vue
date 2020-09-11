<template>
  <div class="stock">
    <div class="add">+添加股票</div>
    <div class="statement">行情由第三方提供，详见使用声明</div>
    <div class="but">
      <div class="but-left">深证成指</div>
      <div class="but-right">12561.75 -431.58 -3.25%</div>
      <van-icon name="arrow" tag="em" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style lang="less" scoped>
.stock {
  width: 100%;
  height: 615px;
  background: #f4f3f8;
  .add {
    width: 100%;
    height: 1.33333rem;
    margin: 0 auto;
    text-align: center;
    line-height: 1.33333rem;
    background: #fefefe;
    font-size: 17px;
    color: #535353;
    font-weight: bold;
  }
  .statement {
    font-size: 15px;
    text-align: center;
    line-height: 45px;
    color: #c7c7c7;
  }
  .but {
    width: 100%;
    height: 0.8rem;
    background: #fefefe;
    position: fixed;
    bottom: 50px;
    font-size: 15px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    .but-left {
      color: #8b8b8b;
      margin-left: 15px;
    }
    .but-right {
      color: #8cd5cc;
      margin-left: 98px;
    }
    em {
      line-height: 30px;
      position: relative;
      left: 5px;
      font-size: 17px;
      color: #dce0e1;
    }
  }
}
</style>