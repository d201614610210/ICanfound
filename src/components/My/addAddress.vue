<template>
  <div class="add">
    <h2>添加收货地址</h2>
    <div class="content">
      <h3>添加收货地址</h3>
      <el-form :model="form" class="form" ref="form">
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
import { addAddress, getChinaArea } from "../../assets/getData";
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
      // 对表单处理过的form
      finalform: {},
      // 控制弹框宽度
      inputWidth: "120px",
      selectWidth: "50px",
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
    var res = await getChinaArea();
    this.chinaArea = res.data;
    this.provinceList = this.chinaArea.provinceList;
  },
  methods: {
    // 添加收货地址
    async finish() {
      for (var a in this.form) {
        console.log(this.form[a]);
        if (!this.form[a]) {
          this.$message({
            type: "error",
            message: "请填写完整信息"
          });
          return;
        }
      }
      this.finalform.name = this.form.name;
      this.finalform.detailArea = this.form.detailArea;
      this.finalform.phone = this.form.number;
      this.finalform.postCode = this.form.postCode;
      this.finalform.area = this.jointArea();
      console.log(this.finalform);
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$refs.form.resetFields();
      var res = await addAddress(this.owner, this.finalform);
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
    h3 {
      width: auto;
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      line-height: 70px;
    }
    .form {
      width: 800px;
      margin: 0 auto;
      .el-button {
        float: right;
      }
    }
  }
}
</style>