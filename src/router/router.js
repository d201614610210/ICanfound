import Vue from 'vue'
import Router from 'vue-router'

// 组件模块
import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/test'
import Footer from '@/components/footer/Footer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'Footer',
      component: Footer
    },
    // {
    //   path: '/', // 首页
    //   name: 'Test',
    //   component: Test
    // },
    {
      path: '/public', // 首页
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})













