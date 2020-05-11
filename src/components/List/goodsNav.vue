<template>
  <ul class="goodsNav">
    <router-link to="/" tag="li" v-for="(item,index) in navList" :key="index">{{item}}</router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        "全部商品分类",
        "首页",
        "服装城",
        "美妆馆",
        "BIT超市",
        "生鲜",
        "全球购",
        "闪购",
        "拍卖",
        "金融"
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.goodsNav {
  display: flex;
  padding-left: 130px;
  border-bottom: 3px solid #B1191A;
  li {
    font-size: 18px;
    line-height: 64px;
    margin-left: 30px;
    cursor: pointer;
    color:#B1191A;
  }
  li:nth-child(1) {
    background: #B1191A;
    color:#fff;
    padding: 0 38px;
  }
}
</style>