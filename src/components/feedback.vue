<template>
  <div class="feedback">
    <div class="feedbackCont">
      <div class="feedBox">
        <h3>意见反馈</h3>
        <h4>感谢你的反馈，我们会积极改善，做出更好的服务的</h4>
        <div class="content">
          <i>标题</i>
          <el-input v-model="feedTitle" placeholder="请输入标题" size="mini"></el-input>
          <br />
          <i>反馈信息</i>
          <el-input v-model="feedInfo" placeholder="请输入反馈信息" type="textarea" rows="10"></el-input>
          <el-button type="primary" @click="commit">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedTitle: "",
      feedInfo: ""
    };
  },
  methods: {
    commit() {
      if (!this.feedTitle) {
        this.$message.error("请输入标题");
      } else if (!this.feedInfo) {
        this.$message.error("请输入内容");
      } else {
        this.$message.success("您的反馈已提交");
        this.feedInfo = "";
        this.feedTitle = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.feedback {
  width: 100%;
  padding-bottom: 20px;
  .feedbackCont {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    background: url("../assets/img/freeback.png") no-repeat 110px 130px;
    background-size: 500px;
    .feedBox {
      width: 420px;
      height: 450px;
      float: right;
      margin-top: 100px;
      box-shadow: 0 1px 5px 5px #eee;
      padding: 10px;
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
      .content {
        margin-top: 30px;
        padding: 15px;
        // border: 1px dotted #000;
        box-shadow: cornflowerblue;
        overflow: hidden;
        i {
          display: inline-block;
          width: 70px;
          height: 30px;
          text-align: right;
          padding-right: 10px;
          font-size: 14px;
        }
        .el-input {
          width: 300px;
          margin-bottom: 20px;
        }
        .el-textarea {
          width: 300px;
          vertical-align: top;
        }
        .el-button {
          float: right;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>