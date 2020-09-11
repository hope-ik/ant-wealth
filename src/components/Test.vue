<template>
  <div>
    <div class="showBox" @touchstart="start" @touchmove="move" @touchend="end">
      <div
        :class="['showItem animate__animated animate__fadeIn','show'+item.id]"
        v-for="(item,index) in list"
        :key="item.id"
        ref="showItem"
      >{{item.id}}</div>
    </div>
    <div class="echarts">
      <div id="main" style="width: 375px;height:400px;" ref="main"></div>
    </div>
    <canvas id="container" width="375" height="260"></canvas>
  </div>
</template>

<script>
import F2 from "@antv/f2";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
      clientX: 0,
      curIndex: 0,
    };
  },
  methods: {
    start(event) {
      this.clientX = event.touches[0].clientX;
    },
    move(event) {},
    end(event) {
      console.log(event);
      const endX = event.changedTouches[0].clientX;
      // console.log('结束时的X坐标：'+endX+'，开始时的坐标：'+this.clientX)
      // 开始时坐标超过结束时20以上 向左滑动
      if (this.clientX - endX > 20) {
        this.toLeft();
      }
      // 结束时坐标超过开始时20以上 向右滑动
      else if (endX - this.clientX > 20) {
        this.toRight();
      }
    },
    // 左滑事件
    toLeft() {
      const beforeIndex = this.curIndex == 0 ? 3 : this.curIndex - 1;
      const nextIndex = this.curIndex == 3 ? 0 : this.curIndex + 1;
      this.$refs.showItem[this.curIndex].classList.add("animate__fadeOutLeft");
      this.curIndex = nextIndex;
      console.log("向左滑动事件");
      // 把第一项存起来
      const firstItem = this.list[0];
      // 删除第一项
      this.list.splice(0, 1);
      // 把删掉的第一项加在最后一项
      this.$set(this.list, this.list.length, firstItem);
      // 异步删除slideOutLeft类
      setTimeout(() => {
        this.$refs.showItem[beforeIndex].classList.remove(
          "animate__fadeOutLeft"
        );
      }, 100);
    },
    // 右滑事件
    toRight() {
      console.log("向右滑动事件");
    },

    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs["main"]);

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    initF2() {
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ];

      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        id: "container",
        pixelRatio: window.devicePixelRatio, // 指定分辨率
      });

      // Step 2: 载入数据源
      chart.source(data);

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position("genre*sold").color("genre");

      // Step 4: 渲染图表
      chart.render();
    },
  },
  mounted() {
    this.myEcharts();
    this.initF2();
  },
};
</script>

<style scoped>
.test {
  margin-top: 100px;
  width: 300px;
  height: 180px;
  background: antiquewhite;
}

.showBox {
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 180px;
}

.showItem {
  position: absolute;
  width: 300px;
  height: 180px;
  margin-left: -150px;
  border-radius: 5px;
}

.showItem:nth-child(1) {
  left: 50%;
  z-index: 6;
}

.show1 {
  background: aliceblue;
}

.showItem:nth-child(2) {
  z-index: 5;
  left: calc(50% + 10px);
  transform: scale(0.98);
}

.show2 {
  background: antiquewhite;
}

.showItem:nth-child(3) {
  z-index: 4;
  left: calc(50% + 20px);
  transform: scale(0.96);
}

.show3 {
  background: aquamarine;
}

.showItem:nth-child(4) {
  z-index: 3;
  left: calc(50% + 30px);
  transform: scale(0.94);
}

.show4 {
  background: cadetblue;
}
</style>
