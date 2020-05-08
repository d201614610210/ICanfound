<template>
  <ul class="goodsNav">
    <li>全部商品分类</li>
    <li>首页</li>
    <li>服装城</li>
    <li>美妆馆</li>
    <li>BIT超市</li>
    <li>生鲜</li>
    <li>全球购</li>
    <li>闪购</li>
    <li>拍卖</li>
    <li>金融</li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.goodsNav {
  display: flex;
  padding-left: 130px;
  border-bottom: 3px solid red;
  li {
    font-size: 18px;
    line-height: 64px;
    // background:pink;
    // margin-right:10px;
    margin-left: 30px;
  }
  li:nth-child(1) {
    background: pink;
    padding: 0 38px;
  }
}
</style>