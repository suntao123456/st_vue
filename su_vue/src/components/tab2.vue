<template>
  <section>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <child msg="suntao666" @listenChildEvent="showChildMsg"></child>
    <child2 msg="组件二内容" v-model="child2_content"></child2>
    <el-button type="primary" style="margin-top: 40px;" @click="showMsg">点击</el-button>
  </section>
</template>
<script>
import child from './tab_child'
import child2 from './tab2_child2'
export default {
  data(){
    return {
      input:'',
    child2_content:''
    }
  },
  methods:{
    showMsg(){
      console.log(this.input);
      swal("child2!", this.child2_content, "success");
    },
    showChildMsg(data){
      swal("Good job!", data, "success");
    }

  },
  components:{child,child2}
}
</script>
<style scoped>
  section{
    width: 1024px;margin:50px auto;background: #f0f0f0;box-sizing: border-box;padding: 40px;
  }
.box{}
</style>
