<template>
  <ul class="goodsNav">
    <router-link to="/" tag="li" v-for="item in navList" :key="item">{{item}}</router-link>
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
  border-bottom: 3px solid red;
  li {
    font-size: 18px;
    line-height: 64px;
    margin-left: 30px;
    cursor: pointer;
  }
  li:nth-child(1) {
    background: pink;
    padding: 0 38px;
  }
}
</style>