<template>
  <div class="car">
    <h2>我的购物车</h2>
    <div class="content">
      <!-- 购物车列表 -->
      <div class="carList">
        <el-table
          ref="multipleTable"
          :data="car"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
          max-height="500"
        >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column label="图片" width="80" align="center">
            <template scope="scope">
              <img :src="scope.row.imgUrl" width="40" height="40" class="head_pic" />
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="type" label="套餐" width="150" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="amount" label="数量" width="80" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="price" label="价格" width="80" show-overflow-tooltip align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 付款按钮 -->
      <el-button @click="clearCar">从购物车删除</el-button>
      <router-link to="/order" tag="el-button">去付款</router-link>
    </div>
  </div>
</template>

<script>
import { getUserInfo, clearCar } from "../../assets/getData";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // 表格数据
      car: [], //购物车数据
      // 表格选中
      multipleSelection: []
    };
  },
  computed: {
    ...mapGetters(["owner"])
  },
  async mounted() {
    var res = await getUserInfo(this.owner);
    this.car = res.data.car;
  },
  methods: {
    //列表点击事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    // 从购物车中删除
    clearCar() {
      if (this.multipleSelection.length <= 0) {
        this.$message({
          type: "error",
          message: "请选择要删除的商品"
        });
        return;
      }
      var nums = [];
      this.multipleSelection.forEach(element => {
        nums.push(element.num);
      });
      var res = clearCar(this.owner, nums);
      // this.$router.push('/my/mycar')
      window.history.go(0)
    }
  }
};
</script>


<style lang="scss" scoped>
.car {
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
    button {
      float: right;
      margin: 20px 10px 0 0;
    }
  }
}
</style>
