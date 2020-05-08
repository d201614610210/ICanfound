<template>
  <div class="pay">
    <div class="payCont">
      <div class="prompt">
        <i class="iconfont iconsaomiao1"></i>
        <span>扫码支付</span>
        <p>请扫描右边二维码进行支付</p>
      </div>
      <img src="../../assets/img/pay/pay-demo.png" alt />
      <div class="payCode">
        <img src="../../assets/img/pay/pay-qrscan.png" alt />
        <p>点击我，完成支付</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pay {
  width: 100%;
  padding-bottom: 20px;
  .payCont {
    width: 1200px;
    height:600px;
    margin: 0 auto;
    .prompt {
      position: relative;
      width: auto;
      border: 1px solid #d5e8fc;
      border-radius: 5px;
      background: #eaf4fe;
      margin-top: 15px;
      margin-bottom: 15px;
      padding: 16px 16px 16px 69px;
      i {
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        color: rgb(111, 118, 221);
        font-size: 30px;
        margin-left: -20px;
      }
      p {
        font-size: 12px;
        line-height: 20px;
      }
    }
    > img {
      width: 300px;
      float: left;
      margin: 60px 0 0 180px;
    }
    .payCode {
      width: 300px;
      float: right;
      margin: 60px 180px 0 0;
      text-align: center;
      img {
        width:300px;
      }
      p {
        color: #aaa;
      }
    }
  }
}
</style>