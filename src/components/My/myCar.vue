<template>
  <div class="address">
    <h2>我的购物车</h2>
    <div class="content">
      <!-- 购物车列表 -->
      <div class="carList">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column label="图片" width="80" align="center">
            <img src="../../assets/img/goodsDetail/pack/1.jpg" alt />
          </el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="type" label="套餐" width="150" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="amount" label="数量" width="80" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="price" label="价格" width="80" show-overflow-tooltip align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 付款按钮 -->
      <el-button type="primary">去付款</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          num: "202005090134",
          title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
          type: "4.7英寸-深邃蓝",
          amount: "1",
          price: "28.00",
          date: "2020-05-09-01-34"
        },
        {
          num: "202005090134",
          title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
          type: "4.7英寸-深邃蓝",
          amount: "1",
          price: "28.00",
          date: "2020-05-09-01-34"
        },
        {
          num: "202005090134",
          title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
          type: "4.7英寸-深邃蓝",
          amount: "1",
          price: "28.00",
          date: "2020-05-09-01-34"
        }
      ],
      // 表格选中
      multipleSelection: []
    };
  },
  methods: {
    //列表点击事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    .el-button--primary{
      float:right;
      margin:20px 10px 0 0;
    }
  }
}
</style>
