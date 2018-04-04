<template>
    <section>
        <h3>我是child2组件内容{{msg}}</h3>
        <input type="text" v-model="input" @focus="handleFocus">
    </section>
</template>

<script>
    import child2 from  './tab2_child2'
    export default {
      props:['msg','inputMsg'],
        name: "tab2_child2",
      data(){
          return {

          }
      },
      watch:{


      },
      methods:{
        handleFocus(event) {
          // this.focused = true;
          this.$emit('focus', event);
        }
      }
    }
</script>

<style scoped>
    section {
      box-sizing: border-box;
      padding: 40px;
      background: orangered;
      border-radius: 4px ;
    }
</style>
