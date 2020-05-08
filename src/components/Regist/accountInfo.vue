<template>
  <div class="accountInfo">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>-->
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var userName = (rule, value, callback) => {
      if (value === "") {
        this.judgeUserName = false;
        callback(new Error("请输入用户名"));
      } else {
        this.judgeUserName = true;
        callback();
      }
    };
    var email = (rule, value, callback) => {
      const reg = /^[^_]\w{3,15}@(qq|163|162|sina)\.(com|cn|net)$/;
      if (value === "") {
        this.judgeEmail = false;
        callback(new Error("请输入邮箱"));
      } else if (reg.test(value)) {
        this.judgeEmail = true;
        callback();
      } else {
        this.judgeEmail = false;
        callback(new Error("请输入正确的邮箱"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        this.judgePass = false;
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        this.judgePass = true;
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        this.judgeCheckPass = false;
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        this.judgeCheckPass = false;
        callback(new Error("两次输入密码不一致!"));
      } else {
        this.judgeCheckPass = true;
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        email: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        userName: [{ validator: userName, trigger: "blur" }],
        email: [{ validator: email, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      judgeUserName: false,
      judgeEmail: false,
      judgePass: false,
      judgeCheckPass: false
    };
  },
  methods: {
    submitForm() {
      if (
        this.judgeUserName &&
        this.judgeEmail &&
        this.judgePass &&
        this.judgeCheckPass
      ) {
        console.log("提交成功");
        // 提交成功之后将phoneNum传出去
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.accountInfo {
  .el-form-item {
    margin-left: -7px;
  }
  .el-form-item .el-form-item__content .el-input {
    width: 200px;
  }
  // .el-form-item:nth-of-type(2) .el-form-item__content .el-input {
  //   width: 130px;
  // }
}
</style>