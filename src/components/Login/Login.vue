<template>
  <div class="login">
    <div class="loginCont">
      <h3>欢迎登录</h3>
      <!-- <h4>ICanfound，天天低价品质保证，让消费者钱更值钱</h4> -->
      <el-input
        class="userName"
        type="text"
        v-model="inputName"
        placeholder="用户名"
        prefix-icon="el-icon-user-solid"
      ></el-input>
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
      <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
  </div>
</template>

<script>
import { sendLogin } from "../../assets/getData";
export default {
  data() {
    return {
      inputName: "",
      inputPass: ""
    };
  },
  methods: {
    // 登录操作
    async login() {
      // 信息不完整
      if (this.inputName === "" || this.inputPass === "") {
        this.$message({
          type: "error",
          message: "请输入完整信息！"
        });
        return;
      }
      var res = await sendLogin(this.inputName, this.inputPass);
      switch (res.data.data) {
        // 未注册的账号
        case 0: {
          this.open();
          break;
        }
        // 登录成功
        case 1: {
          // 保存登录信息
          this.$store.commit("setOwner", this.inputName);
          // cookie记录登录状态
          document.cookie = `username=${this.inputName}`;
          // this.$router.back();
          this.$router.push('/')
          break;
        }
        // 账号或密码错误
        case -1: {
          this.$message({
            type: "error",
            message: "账号或密码错误！"
          });
          break;
        }
      }
    },
    // 未注册弹框
    open() {
      this.$confirm("该用户尚未注册", "提示", {
        confirmButtonText: "去注册",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push("/regist");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 600px;
  background: url("/img/sale.jpg") no-repeat 230px 120px;
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