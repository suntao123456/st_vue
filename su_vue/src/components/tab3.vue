<template>
  <div class="box">
    <h3>表格分页</h3>
    <table class="table" style="width: 100%; min-height: 25px; line-height: 25px;" >
         <tr>
           <th>日期</th>
           <th>姓名</th>
           <th>家庭住址</th>
         </tr>
         <!--<tr>-->
           <!--<td>2016-05-02</td>-->
           <!--<td>孙涛</td>-->
           <!--<td>web全栈工程师</td>-->
         <!--</tr>-->
         <tr v-for="item in current_data">
           <td>{{item.date}}</td>
           <td>{{item.name}}</td>
           <td>{{item.address}}</td>
         </tr>
    </table>
    <el-pagination
      background
      :page-size="4"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        current_data:[],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
    {
      date: '2017-05-02',
        name: 'suntao',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2017-05-04',
          name: '王xiajhk',
          address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2018-05-01',
          name: '苏交',
          address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2018-05-03',
          name: '啊刷卡机',
          address: '上海市普陀区金沙江路 1516 弄'
      },
          {
            date: '2018-05-03',
            name: '啊刷卡机',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    created(){
      this.dataInit();
    },
    methods: {
      dataInit(){
        this.current_data = this.tableData.slice(0,4>this.tableData.length?this.tableData.length:4);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.current_data = this.tableData.slice((val-1)*4,(val*4>this.tableData.length)?this.tableData.length:val*4);
      }
    }
  }
</script>
<style scoped>
   .box{width: 1024px;margin: 50px auto;background: #ebeef5;box-sizing: border-box;padding: 60px 100px;}
   .table,.table tr th, .table tr td {text-align: center;margin: 50px 0; border:1px solid orangered;box-sizing: border-box;padding: 10px; }
   .table { width: 200px; min-height: 25px; line-height: 25px; border-collapse: collapse;}
</style>
