import Vue from 'vue'
import Router from 'vue-router'
import suntao from '@/components/suntao.vue'
import HelloWorld from '@/components/HelloWorld'
import main from '@/containers/main'
import tab1 from '@/components/tab1.vue'
import tab2 from '@/components/tab2.vue'
import tab3 from '@/components/tab3.vue'
import tab4 from '@/components/tab4.vue'
import tab5 from '@/components/tab5.vue'


Vue.use(Router)

export default new Router({
  // mode:history,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/suntao',
      name: 'suntao',
      component: suntao
    },
    {
      path: '/main',
      name: 'mian',
      component: main,
      children: [
        {
          path: '/',
          component: tab1,
        },
        {
          path: 'tab2',
          component: tab2
        },
        {
          path: 'tab3',
          component: tab3
        },
        {
          path: 'tab4',
          component: tab4
        },
        {
          path: 'tab5',
          component: tab5
        },
      ]
    }
  ]
})
