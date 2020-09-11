<template>
  <div class="fund">
    <div class="fund-top">
      <div class="t-left">
        <div class="tex">上证指数</div>
        <div class="num">3282.48</div>
        <div class="rate">+0.86%</div>
      </div>
      <div class="t-right">
        <div class="tex">深证成指</div>
        <div class="num">13020.56</div>
        <div class="rate">+1.23%</div>
      </div>
      <van-icon name="arrow-down" tag="em" />
    </div>
    <div class="fund-middle">
      <div class="middle-hot">
        <div class="hot-title">热门基金</div>
        <div class="hot-tex">平台高手持有的一流好基</div>
      </div>
      <div class="middle-optional" v-for="(item,index) in list" :key="index">
        <div class="optional-chunk">
          <input type="radio" />
          <div class="chunk-title">
            {{item.name}}
            <div class="chunk-tex">{{item.tex}}</div>
          </div>
          <div class="chunk-ratio">
            {{item.ratio}}
            <div class="ration-tex">{{item.tex2}}</div>
          </div>
        </div>
      </div>
      <div class="middle-join"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "中银中证100指..",
          tex: "100家牛企业为你打工",
          ratio: "+21.08%",
          tex2: "近一年涨跌幅",
        },
        {
          name: "景顺长城新兴成...",
          tex: "赚好公司成长的钱",
          ratio: "+49.14%",
          tex2: "近一年涨跌幅",
        },
        {
          name: "中欧增强回报债..",
          tex: "连续七年都赚钱",
          ratio: "+2.63%",
          tex2: "近一年涨跌幅",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.flexR() {
  display: flex;
  flex-direction: row;
}
.flexC() {
  display: flex;
  flex-direction: column;
}
.fund {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .fund-top {
    .flexR;
    align-items: center;
    height: 85px;
    background: #ffffff;
    .t-left {
      width: 50%;
      height: 100%;
      font-size: 17px;
      .flexC;
      align-items: center;
      margin: 25px 0px 0px -35px;
    }
    .t-right {
      width: 50%;
      height: 100%;
      font-size: 17px;
      .flexC;
      align-items: center;
      margin: 25px 0px 0px -35px;
    }
    .tex {
      font-weight: 550;
      margin-bottom: 5px;
    }
    .num {
      color: #ed6430;
      font-weight: 550;
    }
    .rate {
      position: relative;
      left: 65px;
      font-size: 1px;
      top: -18px;
      background: #fef2ea;
      width: 46px;
      text-align: center;
      color: #f1865e;
    }
    em {
      color: #dce0e1;
      position: relative;
      left: 21px;
      font-size: 19px;
    }
  }
  .fund-middle {
    height: 365px;
    width: 93%;
    background: linear-gradient(to top, white, #fff9f7, #fde8e3);
    border-radius: 8px;
    margin: 0 auto;
    position: relative;
    top: 10px;
    .flexC;
    // justify-content: center;
    align-items: center;
    .middle-hot {
      height: 15%;
      width: 100%;
      text-align: center;
      margin-top: 15px;
      .hot-title {
        font-size: 19px;
        font-weight: 550;
      }
      .hot-tex {
        color: #b3b1ae;
        font-size: 14px;
      }
    }
    .middle-optional {
      height: 19%;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: solid 1px #f3f3f3;
      .optional-chunk {
        margin-left: 15px;
        .flexR;

        .chunk-title {
          width: 89%;
          height: 100%;
          font-size: 20px;
          margin: -5px 0px 5px 5px;
          .chunk-tex {
            color: #b7b7b5;
            font-size: 13px;
            position: relative;
            left: -8px;
          }
        }
        .chunk-ratio {
          height: 100%;
          font-size: 23px;
          margin: -5px 5px 5px 0px;
          position: relative;
          left: 25px;
          color: #ec551c;
          font-weight: 550;
          .ration-tex {
            color: #b7b7b5;
            font-size: 13px;
            position: relative;
            left: -8px;
          }
        }
      }
    }
    input[type="radio"] {
      width: 25px;
      height: 23px;
      opacity: 1;
    }

    .middle-optional > label {
      position: relative;
      margin-right: 34px;
    }
    .middle-optional > label::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;

      margin-right: 6px;
      vertical-align: bottom;
      font-size: 15px;
    }
    .middle-join {
      width: 77%;
      height: 45px;
      background: #266eff;
      text-align: center;
      margin-top: 12px;
      border-radius: 3px;
    }
  }
}
</style>