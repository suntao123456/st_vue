/**
 * Created by lenovo on 2018/1/31.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(Vuex);

export default new Vuex.Store({

    state:{
      count:0
    },
    mutations:{
      increment:state => state.count ++,
    decrement:state => state.count --
},
getters:{
  count:state =>state.count += 1
}

})

