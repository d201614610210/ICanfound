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
import Address from "../components/My/Address.vue"
import AddAddress from "../components/My/addAddress.vue"
import MyCar from "../components/My/myCar.vue"
import MyOrder from "../components/My/myOrder.vue"
import Regist from '../components/Regist/Regist.vue'
import Login from '../components/Login/Login.vue'
// import Regist from '../components/Regist/Regist.vue'
import dd from '../components/dd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/dd',
      component:dd,
      name:dd
    },
    // 首页
    {
      path: '/',  //首页
      component: Home,
      name: 'Home'
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
      ],
    },
    // 订单
    {
      path: '/order',
      name: 'Order',
      component: Order
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
    // 用户页
    {
      path: '/my',
      redirect: '/my/myorder',
      name: 'My',
      component: My,
      children: [
        {
          path: 'address',
          name: "Address",
          component: Address,
        },
        {
          path: 'addaddress',
          name: "AddAddress",
          component: AddAddress,
        },
        {
          path: 'myorder',
          name: "MyOrder",
          component: MyOrder,
        },
        {
          path: 'mycar',
          name: "MyCar",
          component: MyCar,
        },
      ]
    },
    // 意见反馈
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
  ],
  // 设置跳转之后自动回到顶部
  scrollBehavior(to, from, savedPosition) {
    // 回退时退到原先位置
    if (savedPosition) {
      return savedPosition
    } else {
      // if (to.path.split('/').length > 2) return;
      return { x: 0, y: 0 }
    }
  }
})













