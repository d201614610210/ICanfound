<template>
  <div class="regist">
    <div class="registCont">
      <h3>欢迎注册账号</h3>
      <h4>ICanfound，天天低价品质保证，让消费者钱更值钱</h4>
      <div class="registStepBox">
        <el-steps :active="activeStep" finish-status="success">
          <el-step title="验证手机号"></el-step>
          <el-step title="填写账号信息"></el-step>
        </el-steps>
        <cellPhoneNum v-if="activeStep===0" ref="phone"></cellPhoneNum>
        <accountInfo v-if="activeStep===1" ref="account"></accountInfo>
        <registSuccess v-if="activeStep===2" ref="success"></registSuccess>
        <button @click="nextStep">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import cellPhoneNum from "./cellPhoneNum";
import accountInfo from "./accountInfo";
import registSuccess from "./registSuccess";

export default {
  data() {
    return {
      activeStep: 0 //当前完成的步骤
    };
  },
  components: {
    cellPhoneNum,
    accountInfo,
    registSuccess
  },
  methods: {
    nextStep() {
      if (this.activeStep > 2) return;
      switch (this.activeStep) {
        case 0: {
          var step1 = this.$refs.phone.submitForm();
          if (!step1) {
            this.$message.error("请填写正确信息");
          } else {
            this.activeStep++;
            document.querySelector("button").innerText = "完成";
          }
          break;
        }
        case 1: {
          this.$refs.account.submit().then((step2)=>{
            if (!step2) {
              this.$message.error("请填写正确信息");
            } else {
              this.activeStep++;
              document.querySelector("button").innerText = "去登录";
            }
          })
          break;
        }
        case 2: {
          this.$router.push("/login");
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.regist {
  width: 100%;
  height: 600px;
  background: url("/img/signup-sale.png") no-repeat 230px 50px;
  background-size: 428px 494px;
  position: relative;
  /* background:pink; */
  .registCont {
    width: 400px;
    position: absolute;
    top: 70px;
    right: 170px;
    border: 1px solid rgb(235, 233, 233);
    padding: 10px;
    box-shadow: 0 2px 1px 1px #ccc;
    h3 {
      font-size: 24px;
      font-weight: 900;
      margin: 10px 0;
    }
    h4 {
      font-size: 16px;
      font-weight: 900;
      margin: 10px 0;
    }
    .registStepBox {
      padding: 20px;
      box-sizing: border-box;
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
  // 正在进行中的文字和圆圈
  .el-step__title.is-process {
    color: rgb(19, 125, 211);
  }
  .el-step__head.is-process {
    color: rgb(19, 125, 211);
    border-color: rgb(19, 125, 211);
  }
  // 步骤条整体
  .el-steps {
    margin: 0 0 20px 60px;
  }
  // 步骤条下面的文字
  .el-step__main {
    margin-left: 12px;
    transform: translateX(-50%);
    text-align: center;
  }
}
</style>