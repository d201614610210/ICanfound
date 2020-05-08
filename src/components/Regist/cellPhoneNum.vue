<template>
  <div class="cellPhoneNum">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phoneNum">
        <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <el-input type="text" v-model="ruleForm.verifyCode" placeholder="请输入验证码" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>-->
    </el-form>
    <b @click="open2">获取验证码</b>
    <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      const reg = /^1(31|32|34|35|37|33|38|55|52)\d{8}$/;
      if (value === "") {
        this.judgeNum = false;
        callback(new Error("请输入手机号"));
      } else if (reg.test(value)) {
        this.judgeNum = true;
        callback();
      } else {
        this.judgeNum = false;
        callback(new Error("请输入正确的手机号"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        this.judgeCode = false;
        callback(new Error("请输入验证码"));
      } else if (value !== "1234") {
        this.judgeCode = false;
        callback(new Error("验证码错误!"));
      } else {
        this.judgeCode = true;
        callback();
      }
    };
    return {
      ruleForm: {
        phoneNum: "",
        verifyCode: ""
      },
      rules: {
        phoneNum: [{ validator: validatePass, trigger: "blur" }],
        verifyCode: [{ validator: validatePass2, trigger: "blur" }]
      },
      judgeNum: false,
      judgeCode: false
    };
  },
  methods: {
    // 表单提交判断
    submitForm() {
      if (this.judgeNum && this.judgeCode) {
        console.log("提交成功");
        // 提交成功之后将phoneNum传出去
        return true;
      } else {
        return false;
      }
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
    open2() {
      if (this.judgeNum) {
        this.$message({
          message: "验证码为：1234",
          type: "success"
        });
      } else {
        this.$message.error("请输入正确的手机号");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cellPhoneNum {
  padding: 0 30px;
  box-sizing: border-box;
  position: relative;
  b {
    position: absolute;
    top: 61px;
    right: 40px;
    border: 1px solid #c0c4cc;
    border-radius: 5px;
    padding: 10px;
    background: rgb(238, 238, 238);
    font-size: 14px;
    transition: 0.2s;
  }
  b:active {
    background: #9ea2aa;
  }
  .el-form-item {
    margin-left: -50px;
  }
  .el-form-item:nth-of-type(1) .el-form-item__content .el-input {
    width: 240px;
  }
  .el-form-item:nth-of-type(2) .el-form-item__content .el-input {
    width: 130px;
  }
}
</style>