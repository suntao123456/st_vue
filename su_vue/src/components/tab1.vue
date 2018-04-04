<template>
    <section>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 实时监测</span>
          <el-container>
            <el-main>
              <el-row>
                <el-col :span="6">
                    <div class="grid-content">
                         <h4>信源</h4>
                         <div class="grid_box">
                             <div class="grid_item">
                                 <h5>信源1</h5>
                                 <ul>
                                   <li>流码数 40</li>
                                   <li>康复度 85%</li>
                                   <li>总带宽 200Mbps</li>
                                 </ul>
                             </div>
                         </div>
                      <div class="grid_box">
                        <div class="grid_item">
                          <h5>直播编码器</h5>
                          <ul>
                            <li>流码数 40</li>
                            <li>康复度 85%</li>
                            <li>总带宽 200Mbps</li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid_box">
                        <div class="grid_item">
                          <h5>信源1</h5>
                          <ul>
                            <li>流码数 40</li>
                            <li>康复度 85%</li>
                            <li>总带宽 200Mbps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <h4>直播编码器</h4>
                    <div class="grid_box">
                      <div class="grid_item">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid_box">
                      <div class="grid_item">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid_box">
                      <div class="grid_item">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <h4>流媒体服务器</h4>
                    <div class="grid_box">
                      <div class="grid_item" style="background: coral;">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid_box">
                      <div class="grid_item">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid_box">
                      <div class="grid_item">
                        <h5>信源1</h5>
                        <ul>
                          <li>流码数 40</li>
                          <li>康复度 85%</li>
                          <li>总带宽 200Mbps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <h4>IP网络传输</h4>
                    <div class="collapse_box">
                      <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="一致性 Consistency" name="1">
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="2">
                          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="效率 Efficiency" name="3">
                          <div>简化流程：设计简洁直观的操作流程；</div>
                          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="4">
                          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="一致性 Consistency" name="5">
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="6">
                          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="一致性 Consistency" name="7">
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="8">
                          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <div class="waring_list">
                  <h3>报警列表</h3>
                  <ul>
                    <li>分开交话费问客服好的收到肯定是</li>
                    <li>都是v讽德诵功的风格和的风格的</li>
                    <li>v发的v个的风格的发给个人</li>
                    <li>单方事故投入和</li>
                    <li>大是大非的风格风格和</li>
                  </ul>
                </div>
              </el-row>
            </el-main>
            <el-aside width="30%">Aside</el-aside>
          </el-container>
        </el-tab-pane>
        <el-tab-pane label="分组统计">
          <tab-two></tab-two>
        </el-tab-pane>
        <el-tab-pane label="流指标监测">流指标监测</el-tab-pane>
        <el-tab-pane label="并发分布">并发分布</el-tab-pane>
      </el-tabs>
    </section>
</template>
<script>
  import tabTwo from  './tab1_2.vue'
  export default{
    data(){
      return{
        activeName: '1'
      }
    },
    components: {tabTwo}
  }
</script>
<style scoped>
  section{width: 100%;}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 70%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content {
    height: 650px;
    border: 1px solid pink;
  }
  .grid-content  h4{
    line-height: 55px;
    background: #B3C0D1;
    text-align: center;
  }
  .grid_box{
      box-sizing: border-box;
      padding: 10px 25px;
  }
  .grid_box .grid_item{
    width: 100%;
    background: #ffffff;
    min-height: 160px;
    box-sizing: border-box;
    padding: 10px;
  }
  .grid_box .grid_item h5{
    line-height: 40px;
    background: rgb(233, 238, 243);
    padding-left: 15px;
  }
  .grid_box .grid_item ul{
    font-size: 10px;
    padding: 20px;
  }
  .grid_box .grid_item ul li{
    margin-bottom: 10px;
  }
  .collapse_box{box-sizing: border-box;padding: 20px;width: 100%;}
  .waring_list{background: #ffffff;}
  .waring_list h3{background: #D3DCE6;line-height: 40px;padding: 0 20px;}
  .waring_list ul{box-sizing: border-box;padding: 15px;height: 190px; overflow-y: scroll;}
  .waring_list ul li{line-height: 40px;}
</style>
<style>
  .el-collapse{height: 550px;overflow-y: scroll;}
  .el-collapse-item__header{box-sizing: border-box; padding: 0 10px !important;font-size: 14px;font-weight: 600;}
  .el-collapse-item__content{box-sizing: border-box;padding: 15px 10px;}

</style>
