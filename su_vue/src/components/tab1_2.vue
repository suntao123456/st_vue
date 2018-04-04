<template>
    <section>
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div id="example-3">
            <button @click="show = !show">
              Toggle render
            </button>
            <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"
            >
              <p v-if="show">hello</p>
            </transition>
          </div>
        </div></el-col>
        <el-col :span="12">
          <div class="grid-content">
              <div id="myChart" :style="{width: '720px', height: '400px'}"></div>
          </div>
        </el-col>
      </el-row>
    </section>
</template>
<script>
export default{
  data(){
    return {
      roadPoem :`Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`,
      provincesText:`
          <div class="grid-content">
             <p style="background: red">suntao2423342</p>
          </div>
      `,
      show: true
    }
  },
  mounted(){
    this.drawLine();
    this.calculateTotalAmount(true);
  },
  methods:{
    calculateTotalAmount (vip) {
        var amount = 0; // probably should also be let, but you can mix var and let
        if (vip) {
          let amount = 1; // first amount is still 0
        }
        { // more crazy blocks!
          let amount = 100; // first amount is still 0
          {
            let amount = 1000; // first amount is still 0
          }
        }
        console.log(amount);
        return amount;
      },
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  }

}
</script>
<style scoped>

  .grid-content {
    border-radius: 4px;
    min-height: 406px;
    background: #E9EEF3;
    border: 1px solid rosybrown;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .ul{background: #7f7f7f;box-sizing: border-box;padding: 25px;}
 .ul li{line-height: 30px;background: orangered;margin-top: 20px;}
  .ul li span{
   float: right;
    display: inline-block;
    height: 30px;
    width: 30px;
    background: #3a8ee6;
    text-align: center;
    line-height: 30px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
