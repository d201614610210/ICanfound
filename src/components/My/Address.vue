<template>
  <div class="address">
    <h2>我的购物车</h2>
    <div class="content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Daimj</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="del">
            <i class="iconfont iconarrow_right_in"></i>
            删除
          </el-button>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="dialogFormVisible = true"
          >
            <i class="iconfont iconarrow_right_in"></i>
            修改
          </el-button>
        </div>
        <!-- <div v-for="o in 4" :key="o" class="text item"><span>收货人:<b>Daimj</b></span></div> -->
        <div class="text item">
          <span>
            收货人:
            <b>Daimj</b>
          </span>
        </div>
        <div class="text item">
          <span>
            收货地区:
            <b>河北省邢台市</b>
          </span>
        </div>
        <div class="text item">
          <span>
            详细地址:
            <b>沙河市西油村</b>
          </span>
        </div>
        <div class="text item">
          <span>
            邮政编码:
            <b>054100</b>
          </span>
        </div>
      </el-card>
    </div>
    <!-- 修改信息弹框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
      <el-form :model="form">
        <!-- 收件人 -->
        <el-form-item label="收件人" :label-width="inputWidth">
          <el-input v-model="form.name" autocomplete="off" @blur="blur"></el-input>
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
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
    // 删除收货地址
    del() {
      this.$confirm("确定永久删除该收货地址?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    blur() {
      this.$message({
        type: "error",
        message: this.form.name
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.address {
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
    // 地址卡片
    .box-card {
      margin-bottom:20px;
      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both;
      }
      i {
        margin-right: 5px;
      }
    }
  }
  // // 修改地址弹框
  // .el-dialog {
  //   border-radius: 20px;
  // }
}
</style>
<style lang="scss">
.address {
  .box-card {
    .el-button--text {
      margin-right: 10px;
    }
  }
  // 修改地址弹框
  .el-dialog {
    border-radius: 20px;
  }
}
</style>
