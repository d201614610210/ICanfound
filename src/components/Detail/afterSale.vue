<template>
  <div class="afterSale">
    <header>售后保障</header>
    <div v-for="(item,index) in goodsService" :key="index">
      <i :class="`iconfont ${item.icon}`"></i>
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>

<script>
import {getDetailIntro} from "../../assets/getData"
export default {
  data(){
    return{
      goodsService:[],//售后保障内容
    }
  },
  async mounted(){
    var res=await getDetailIntro();
    this.goodsService=res.data.goodsService;
  }
};
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