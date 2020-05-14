<template>
  <div class="address">
    <h2>我的收货地址</h2>
    <div class="content">
      <p v-if="address.length===0">
        暂无地址信息,
        <router-link to="/my/addaddress" tag="span">去添加</router-link>
      </p>
      <!-- 地址卡片 -->
      <el-card v-else class="box-card" v-for="(item,index) in address" :key="index">
        <!-- 卡片头部 -->
        <div slot="header" class="clearfix">
          <!-- 姓名 -->
          <span>{{item.name}}</span>
          <!-- 删除/修改按钮 -->
          <el-button style="float: right; padding: 3px 0" type="text" @click="del(index)">
            <i class="iconfont iconarrow_right_in"></i>
            删除
          </el-button>
          <el-button style="float: right; padding: 3px 0" type="text" @click="changeClick(index)">
            <i class="iconfont iconarrow_right_in"></i>
            修改
          </el-button>
        </div>
        <div class="text item">
          <span>
            收货人:
            <b>{{item.name}}</b>
          </span>
        </div>
        <div class="text item">
          <span>
            收货地区:
            <b>{{item.area}}</b>
          </span>
        </div>
        <div class="text item">
          <span>
            详细地址:
            <b>{{item.detailArea}}</b>
          </span>
        </div>
        <div class="text item">
          <span>
            手机号:
            <b>{{item.phone}}</b>
          </span>
        </div>
        <div class="text item">
          <span>
            邮政编码:
            <b>{{item.postCode}}</b>
          </span>
        </div>
      </el-card>
    </div>
    <!-- 修改信息弹框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
      <el-form :model="form">
        <!-- 收件人 -->
        <el-form-item label="收件人" :label-width="inputWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 收件地区 -->
        <el-form-item label="收件地区" :label-width="inputWidth">
          <el-select
            @change="choiceProv"
            v-model="form.province"
            placeholder="省"
            style="width:150px;"
          >
            <!-- <el-option label="区域一" value="区域一"></el-option> -->
            <el-option
              v-for="(item,index) in provinceList"
              :key="index"
              :label="item.ProName"
              :value="item.ProID"
            ></el-option>
          </el-select>
          <el-select @change="choiceCity" v-model="form.city" placeholder="市" style="width:150px;">
            <el-option
              v-for="(item,index) in cityList"
              :key="index"
              :label="item.CityName"
              :value="item.CityID"
            ></el-option>
          </el-select>
          <el-select v-model="form.country" placeholder="县" style="width:150px;">
            <el-option
              v-for="(item,index) in countyList"
              :key="index"
              :label="item.DisName"
              :value="item.Id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 收件地址 -->
        <el-form-item label="收件地址" :label-width="inputWidth">
          <el-input v-model="form.detailArea" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 手机号码 -->
        <el-form-item label="手机号码" :label-width="inputWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 邮政编码 -->
        <el-form-item label="邮政编码" :label-width="inputWidth">
          <el-input v-model="form.postCode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changeAdd">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUserInfo,
  getChinaArea,
  delAddress,
  changeAddress
} from "../../assets/getData";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // 控制修改弹框的显隐
      dialogFormVisible: false,
      form: {
        name: "",
        province: "",
        city: "",
        country: "",
        detailArea: "",
        number: "",
        postCode: ""
      },
      // 用户的收货地址信息
      address: [],
      // 控制弹框宽度
      inputWidth: "120px",
      selectWidth: "50px",
      checkedCard: -1, //修改的卡片的索引
      // 对表单处理过的form
      finalform: {},
      chinaArea: {}, //全国省市县数据
      provinceList: [], //获取全国省数据
      cityList: [], //获取当前选中的省对应的市数据
      countyList: [] //获取当前选中的市对应的县数据
    };
  },
  computed: {
    ...mapGetters(["owner"])
  },
  async mounted() {
    var res = await getUserInfo(this.owner);
    this.address = res.data.address;
    var chinaArea = await getChinaArea();
    this.chinaArea = chinaArea.data;
    this.provinceList = this.chinaArea.provinceList;
  },
  methods: {
    // 删除收货地址
    del(index) {
      this.$confirm("确定永久删除该收货地址?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var res = delAddress(this.owner, index);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.address.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 点击修改按钮
    changeClick(index) {
      this.dialogFormVisible = true;
      this.index = index;
    },
    // 修改收货地址
    changeAdd() {
      for (var a in this.form) {
        console.log(a);
        if (!this.form[a]) {
          this.$message({
            type: "error",
            message: "请填写完整信息"
          });
          return;
        }
      }
      this.dialogFormVisible = false;
      this.finalform.name = this.form.name;
      this.finalform.detailArea = this.form.detailArea;
      this.finalform.phone = this.form.number;
      this.finalform.postCode = this.form.postCode;
      this.finalform.area = this.jointArea();
      var res = changeAddress(this.owner, this.finalform, this.index);
      this.address[this.index] = this.finalform;
    },
    // 选完省之后
    choiceProv(val) {
      this.chinaArea.cityList.forEach(element => {
        if (element.ProID === val) {
          this.cityList.push(element);
        }
      });
    },
    // 选完市之后
    choiceCity(val) {
      this.chinaArea.countyList.forEach(element => {
        if (element.CityID === val) {
          this.countyList.push(element);
        }
      });
    },
    // 整合地区地址
    jointArea(val) {
      var finalArea = "";
      this.provinceList.forEach(element => {
        if (element.ProID === this.form.province) {
          finalArea += element.ProName;
        }
      });
      this.cityList.forEach(element => {
        if (element.CityID === this.form.city) {
          finalArea += element.CityName;
        }
      });
      this.countyList.forEach(element => {
        if (element.Id === this.form.country) {
          finalArea += element.DisName;
        }
      });
      return finalArea;
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
    overflow: overlay;
    > p {
      text-align: center;
      font-size: 16px;
      span {
        color: cornflowerblue;
        cursor: pointer;
      }
    }
    // 地址卡片
    .box-card {
      margin-bottom: 20px;
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
