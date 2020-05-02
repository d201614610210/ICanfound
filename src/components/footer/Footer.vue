<template>
  <div class="footer">
    <div class="footerCont">
      <!-- 优点声明 -->
      <ul class="declear">
        <li>
          <span>品类齐全，轻松购物</span>
        </li>
        <li>
          <span>品类齐全，轻松购物</span>
        </li>
        <li>
          <span>品类齐全，轻松购物</span>
        </li>
        <li>
          <span>品类齐全，轻松购物</span>
        </li>
      </ul>
      <div class="cutLineL"></div>
      <!-- 服务列表 -->
      <div class="service">
        <ul class="serviceList" v-for="(value,key,index) in serviceData" :key="index">
          <li v-for="(item,index) in value" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="cutLine"></div>
      <!-- 更多链接 -->
      <div class="moreLink">
        <span v-for="(item,index) in moreLink" :key="index">{{item}}</span>
      </div>
      <!-- copyright -->
      <h5 class="copyRight">copyright © 2020 by Daimj</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceData: {
        shopping: [
          "购物指南",
          "购物流程",
          "会员介绍",
          "生活旅行",
          "常见问题",
          "大家电",
          "联系客服"
        ],
        delivery: [
          "配送方式",
          "上门自提",
          "211限时达",
          "配送服务查询",
          "收取标准",
          "海外配送",
        ],
        pay: [
          "支付方式",
          "货到付款",
          "在线支付",
          "分期付款",
          "邮局汇款",
          "公司转账",
        ],
        afterSale: [
          "售后服务",
          "售后政策",
          "价格保护",
          "退款说明",
          "返修/退换货",
          "取消订单",
        ]
      },
      moreLink: [
        "关于我们",
        "联系我们",
        "联系客服",
        "合作招商",
        "商家帮助",
        "营销中心",
        "销售联盟",
        "校园社区",
        "风险监测",
        "隐私政策"
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.footer {
  background: #eee;
  padding-bottom:15px;
  .footerCont {
    width: 1000px;
    margin: 0 auto;
    color: #666;
    ul.declear {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      li {
        height: 43px;
        line-height: 43px;
        padding-left: 45px;
        background: url("../../assets/img/footer/ico_service.png") no-repeat;
        span {
          color: #000;
          font-size: 20px;
          font-weight: 900;
        }
      }
      li:nth-child(2) {
        background-position-y: -43px;
      }
      li:nth-child(3) {
        background-position-y: -86px;
      }
      li:nth-child(4) {
        background-position-y: -129px;
      }
    }
    div.cutLineL {
      width: 9999px;
      transform: translateX(-50%);
      border-bottom: 1px solid #b2dfdb;
    }
    div.service {
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0;
      .serviceList {
        line-height: 24px;
        text-align: left;
        cursor: pointer;
        li:nth-child(1) {
          font-size: 18px;
          font-weight: 900;
        }
      }
    }
    div.cutLine{
      width: 100%;
      border-bottom: 1px solid #b2dfdb;
    }
    div.moreLink {
      display: flex;
      justify-content: space-around;
      width: 600px;
      margin: 10px auto;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>