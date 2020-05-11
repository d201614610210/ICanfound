<template>
  <div class="param">
    <header>规格参数</header>
    <ul>
      <li v-for="(item,index) in goodsParam" :key="index">
        <span>{{item.title}}:</span>
        <b>{{item.content}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import {getDetailIntro} from "../../assets/getData.js"
export default {
  data(){
    return {
      goodsParam:[],
    }
  },
  async mounted(){
    var res=await getDetailIntro();
    this.goodsParam=res.data.goodsParam;
  }
};
</script>

<style lang="scss" scoped>
.param {
  width: 100%;
  header {
    background: #eee;
    line-height: 38px;
    padding: 0 10px;
    font-weight: 900;
    color: #666;
  }
  ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width:240px;
      height:36px;
      font-size:14px;
      padding:5px;
      padding-left:30px;
      b{
        color:#999;
      }
    }
  }
}
</style>