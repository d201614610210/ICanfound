<template>
  <div class="address">
    <h2>我的订单</h2>
    <div class="content">
      <!-- 订单列表 -->
      <div class="orderList">
        <el-table
          ref="multipleTable"
          :data="order"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="num" width="140" label="订单号" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column label="图片" width="80" align="center">
            <img src="../../assets/img/goodsDetail/pack/1.jpg" alt />
          </el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="type" label="套餐" width="150" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="amount" label="数量" width="80" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="price" label="价格" width="80" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="date" label="购买时间" width="200" show-overflow-tooltip align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from "../../assets/getData";
export default {
  data() {
    return {
      // 表格数据
      order: [],
      // 表格选中
      multipleSelection: []
    };
  },
  async mounted(){
    var res=await getUserInfo("daimj");
    this.order=res.data.order;
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
    .el-pagination {
      float: right;
      margin: 20px 10px 0 0;
    }
  }
}
</style>
