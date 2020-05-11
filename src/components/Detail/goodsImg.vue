<template>
  <div class="img">
    <header>商品介绍</header>
    <ul>
      <li>
        <img :src="item" alt="" v-for="(item,index) in goodsImg" :key="index">
      </li>
    </ul>
  </div>
</template>

<script>
import {getDetailIntro} from "../../assets/getData"
export default {
  data(){
    return{
      goodsImg:[],//获取图片介绍
    }
  },
  async mounted(){
    var res=await getDetailIntro();
    this.goodsImg=res.data.goodsImg;
  }
};
</script>

<style lang="scss" scoped>
.img{
  width:100%;
  header{
    background:#eee;
    line-height:38px;
    padding:0 10px;
    font-weight:900;
    color:#666;
  }
  img{
    width:100%;
    margin-bottom:10px;
  }
}
</style>