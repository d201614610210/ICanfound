import Vue from 'vue'
import Router from 'vue-router'

// 组件模块
import HelloWorld from '../components/HelloWorld'
// import Test from '@/components/test'
import Home from "../components/Home/Home.vue"
import GoodsList from "../components/List/goodsList.vue"
import GoodsDetail from "../components/Detail/goodsDetail.vue"
import GoodsImg from "../components/Detail/goodsImg.vue"
import Param from "../components/Detail/Param.vue"
import AfterSale from "../components/Detail/afterSale.vue"
import Comment from "../components/Detail/comment.vue"
import Order from "../components/Order/Order.vue"
import Pay from "../components/Order/Pay.vue"
import PayDone from "../components/Order/payDone.vue"
import Feedback from "../components/feedback.vue"
import My from "../components/My/My.vue"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Regist from '../components/Regist/Regist.vue'
import cellPhoneNum from '../components/Regist/cellPhoneNum.vue'
import accountInfo from '../components/Regist/accountInfo.vue'
import registSuccess from '../components/Regist/registSuccess.vue'
import Login from '../components/Login/Login.vue'
// import Regist from '../components/Regist/Regist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',  //首页
      component: Home,
      name: 'Home'
    },
    // 订单
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    // 列表页
    {
      path: '/goodsList', //列表页
      // path:'/goodsList',
      component: GoodsList,
      name: 'GoodsList'
    },
    // 详情页
    {
      path: '/goodsDetail',
      redirect: '/goodsDetail/img',
      component: GoodsDetail,
      name: 'GoodsDetail',
      children: [
        {
          path: 'img',
          name: 'GoodsImg',
          component: GoodsImg,
        },
        {
          path: 'param',
          name: 'Param',
          component: Param,
        },
        {
          path: 'afterSale',
          name: 'AfterSale',
          component: AfterSale,
        },
        {
          path: 'comment',
          name: 'Comment',
          component: Comment,
        },
      ]
    },
    // 支付页
    {
      path: '/pay',
      name: "Pay",
      component: Pay
    },
    // 支付成功
    {
      path: '/paydone',
      name: "PayDone",
      component: PayDone
    },
    // 注册页
    {
      path: '/regist',
      name: 'Regist',
      component: Regist,

    },
    // 登录页
    {
      path: '/login', // 登录页
      name: 'Login',
      component: Login
    },
    // 意见反馈
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})













