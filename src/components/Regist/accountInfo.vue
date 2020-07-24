<template>
  <div class="accountInfo">
    <div>
      <span>用户名</span>
      <el-input v-model="username" placeholder="请输入用户名" @blur="judgeName"></el-input>
      <p v-show="noName">请输入用户名</p>
      <p v-show="nameRepeat">用户名重复</p>
    </div>
    <div>
      <span>邮箱</span>
      <el-input v-model="email" placeholder="请输入邮箱" @blur="judgeEmail"></el-input>
      <p v-show="noEmail">请输入邮箱</p>
      <p v-show="emailErr">请输入正确的邮箱格式</p>
    </div>
    <div>
      <span>密码</span>
      <el-input v-model="password" placeholder="请输入密码" @blur="judgePass" type="password"></el-input>
      <p v-show="noPass">请输入密码</p>
    </div>
    <div>
      <span>确认密码</span>
      <el-input v-model="confirm" placeholder="请确认密码" @blur="judgeConfirm" type="password"></el-input>
      <p v-show="noConfirm">请确认密码</p>
      <p v-show="confirmErr">两次密码不一致</p>
    </div>
  </div>
</template>

<script>
import { avoidRepeat,addUser } from "../../assets/getData";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirm: "",
      // 控制是否报错
      noName: false,
      nameRepeat: false,
      noEmail: false,
      emailErr: false,
      noPass: false,
      noConfirm: false,
      confirmErr: false
    };
  },
  methods: {
    // 判断用户名
    async judgeName() {
      if (this.username === "") {
        this.noName = true;
        this.nameRepeat = false;
      } else {
        this.noName = false;
        var res = await avoidRepeat(this.username);
        console.log(res.data);
        res.data ? (this.nameRepeat = false) : (this.nameRepeat = true);
      }
    },
    // 判断邮箱
    judgeEmail() {
      const reg = /^[^_]\w{3,15}@(qq|163|162|sina)\.(com|cn|net)$/;
      if (this.email === "") {
        this.noEmail = true;
        this.emailErr = false;
      } else {
        this.noEmail = false;
        reg.test(this.email) ? (this.emailErr = false) : (this.emailErr = true);
      }
    },
    // 判断密码
    judgePass() {
      if (this.confirm !== "") {
        this.password === this.confirm
          ? (this.confirmErr = false)
          : (this.confirmErr = true);
      }
      this.password === "" ? (this.noPass = true) : (this.noPass = false);
    },
    // 确认密码
    judgeConfirm() {
      if (this.confirm === "") {
        this.noConfirm = true;
        this.confirmErr = false;
      } else {
        this.noConfirm = false;
        this.confirm === this.password
          ? (this.confirmErr = false)
          : (this.confirmErr = true);
      }
    },
    // 提交
    async submit() {
      if (
        !(
          this.noName ||
          this.nameRepeat ||
          this.noEmail ||
          this.emailErr ||
          this.noPass ||
          this.noConfirm ||
          this.confirmErr ||
          this.username === "" ||
          this.email === "" ||
          this.password === "" ||
          this.confirm === ""
        )
      ) {
        var res=await addUser(this.username,this.password);
        // console.log(res.data)
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
  // text-align: center;
  > div {
    position: relative;
    margin-left: 25px;
    p {
      position: absolute;
      bottom: 3px;
      left: 80px;
      // right:0;
      font-size: 12px;
      color: red;
    }
  }
  span {
    text-align: right;
    display: inline-block;
    width: 70px;
  }
  .el-input {
    width: 220px;
    margin: 0 10px 20px;
  }
}
</style>