<template>
  <div class="afterSale">
    <header>售后保障</header>
    <div v-for="item in 5" :key="item">
      <i class="iconfont iconquanguolianbao"></i>
      <h3>卖家服务</h3>
      <p>高品质敢承诺：7天无理由退货，30天免费换新，质量问题商家承担来回运费换新；如需发票，请在确认收货无误后联系商家开出。（注*发票不随货品一同发出）</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.afterSale {
  width: 100%;
  header {
    background: #eee;
    line-height: 38px;
    padding: 0 10px;
    font-weight: 900;
    color: #666;
    margin-bottom: 10px;
  }
  div {
    padding-left: 50px;
    margin-bottom: 20px;
    position: relative;
    i {
      position:absolute;
      top:7px;
      left:0;
      font-size: 30px;
      color: #e4393c;
    }
    h3 {
      color: #e4393c;
      font-weight: 900;
      font-size: 20px;
      line-height: 40px;
    }
    p {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>