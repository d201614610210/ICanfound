<template>
  <div class="img">
    <header>商品介绍</header>
    <ul>
      <li>
        <img :src="require('../../assets/img/goodsDetail/intro/'+index+'.jpg')" alt="" v-for="index in 5" :key="index">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgData:[
        "require('')"
      ]
    }
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