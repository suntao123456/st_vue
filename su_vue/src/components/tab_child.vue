<template>
    <section>
        <h2>child 组件部分</h2>
        <div>{{msg}}</div>
       <el-button type="primary" style="margin-top: 40px;" @click="show_child">点击</el-button>
       <el-button type="success" style="margin-top: 40px;">成功的按钮</el-button>
       <el-button type="danger" style="margin-top: 40px" @click="showTime">危险的按钮</el-button>

      <div class="block">
        <span class="demonstration">使用 value-format</span>
        <div class="demonstration">值：{{ value10}}</div>
        <el-date-picker
          v-model="value10"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </section>
</template>

<script>
    export default {
        props:['msg'],
        name: "tab_child",
      data(){
          return {
            value10: '',
          }
      },
        methods:{
          show_child(event){
            this.$emit('input',)
            this.$emit('listenChildEvent',this.msg+'已经传递到子组件');
          },
          showTime(){
            alert(this.value10);
          }
        }
    }
</script>

<style scoped>

</style>
