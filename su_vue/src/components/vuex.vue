<template>
  <div id="home">
    <div class="page-header">
      <h2>首页</h2>
    </div>
    <div class="panel-body">
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>
<script>
  import { mapState ,mapMutations,mapGetters } from 'vuex'
  export default({
    name:'home',
    data(){
      return {
//        count:0
      }
    },
//    methods:{
//      increment(){
//        this.$store.commit('increment')
//      },
//      decrement(){
//        this.$store.commit('decrement')
//      }
//    },

    computed:{
//      count(){
//        return this.$store.state.count
//      },
      ...mapState([
        "count"
      ]),
      ...mapGetters([
         "count"
       ]),
    },
      methods:{
      ...mapMutations([
          'increment',
          'decrement'
        ])
      },

  })
</script>

<style scoped>
  #home{
    width: 80%;
    margin: 0 auto;
  }
</style>
