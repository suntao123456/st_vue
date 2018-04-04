<template>
<div>
  <el-container>
    <el-header>
      <img class="logo" src="../assets/logo.png"/>
      <div class="tab_bar">
        <router-link to='/main'>实时监测111</router-link>
        <router-link to='/main/tab2'>故障定位</router-link>
        <router-link to='/main/tab3'>自动拨测</router-link>
        <router-link to='/main/tab4'>系统管理</router-link>
        <router-link to='/main/tab5'>全局查看</router-link>
      </div>
    </el-header>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</div>
</template>
<script>

</script>
<style>
  .tab_bar{
    float: right;
  }
</style>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    height: 100px !important;
    box-sizing: border-box;
    padding: 10px;
  }
  .el-header .logo{
    height: 100%;
    width: auto;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    box-sizing: border-box;
    padding: 20px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<style>
  *{margin: 0;padding: 0;}
  ul{list-style: none;}
</style>
