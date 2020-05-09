<template>
  <div class="add">
    <h2>添加收货地址</h2>
    <div class="content">
      <h3>添加收货地址</h3>
      <el-form :model="form" class="form">
        <!-- 收件人 -->
        <el-form-item label="收件人" :label-width="inputWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 收件地区 -->
        <el-form-item label="收件地区" :label-width="inputWidth">
          <el-select v-model="form.province" placeholder="省" style="width:150px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.city" placeholder="市" style="width:150px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.country" placeholder="县" style="width:150px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <!-- 收件地址 -->
        <el-form-item label="收件地址" :label-width="inputWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 手机号码 -->
        <el-form-item label="手机号码" :label-width="inputWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 邮政编码 -->
        <el-form-item label="邮政编码" :label-width="inputWidth">
          <el-input v-model="form.postalCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-button type="primary" @click="finish">添 加</el-button>
      </el-form>
    </div>
    <!-- 修改信息弹框 -->
    <!-- <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制修改弹框的显隐
      dialogFormVisible: false,
      form: {
        name: "",
        area: "",
        address: "",
        number: "",
        postalCode: ""
      },
      // 控制弹框宽度
      inputWidth: "120px",
      selectWidth: "50px"
    };
  },
  methods: {
    // 添加收货地址
    finish() {
      this.$message({
        type: "error",
        message: "添加完成"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.add {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    padding: 0 50px;
    line-height: 64px;
    font-size: 18px;
    font-weight: 900;
  }
  .content {
    height: 100%;
    border: 15px solid #f5f7f9;
    padding: 25px;
    h3{
      width:auto;
      text-align: center;
      font-size:30px;
      font-weight:900;
      line-height:70px;
    }
    .form {
      width: 800px;
      margin: 0 auto;
      .el-button{
        float:right;
      }
    }
  }
}
</style>