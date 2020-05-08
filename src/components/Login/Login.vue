<template>
  <div class="login">
    <div class="loginCont">
      <h3>欢迎登录</h3>
      <!-- <h4>ICanfound，天天低价品质保证，让消费者钱更值钱</h4> -->
      <el-input class="userName" type="text" v-model="inputName" placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
      <!-- <i class="iconfont iconuser"></i> -->
      <el-input
        class="passworld"
        type="password"
        v-model="inputPass"
        placeholder="密码"
        prefix-icon="el-icon-s-cooperation"
      ></el-input>
      <!-- <i class="iconfont iconuser"></i> -->
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputName:'',
      inputPass:'',
    }
  },
  methods:{
    login(){
      // this.inputName//用户名
      // this.inputPass//密码
      // 去文件中查找，如果有，就跳转到首页，如果没有，报错
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 600px;
  background: url("../../assets/img/sale.jpg") no-repeat 230px 120px;
  background-size: 512px 361px;
  position: relative;
  .loginCont {
    width: 350px;
    position: absolute;
    top: 170px;
    right: 180px;
    border: 1px solid rgb(235, 233, 233);
    padding: 30px 10px;
    box-shadow: 0 2px 1px 1px #ccc;
    text-align: center;
    h3 {
      font-size: 24px;
      font-weight: 900;
      margin: 10px 0;
    }
    button {
      width: 120px;
      height: 40px;
      border: 1px solid #c0c4cc;
      border-radius: 5px;
      margin: 10px 50% 0;
      transform: translateX(-50%);
    }
    button:active {
      background: #ccc;
    }
  }
  .el-input {
    width: 250px;
    margin: 10px 50px;
  }
}
</style>