<template>
  <div class="box">
    <i v-html="a"></i>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:null,
    }
  },
  mounted(){
    this.createHtml();
  },
  methods:{
    createHtml(){
      this.a = `<div class="box1" style="width:200px">
        我是一个盒子
      </div>`
    }
  }
}
</script>

<style lang='scss'>
.box{
  width:300px;
  height:300px;
  border:1px solid red;
  .box1{
    width:100px;
    height:100px;
    background:#ccc;
  }
}
</style>