<template>
  <div class="order">
    <!-- 搜索 -->
    <Search></Search>
    <!-- 导航 -->
    <GoodsNav></GoodsNav>
    <div class="orderCont">
      <!-- 提示框 -->
      <div class="prompt">
        <i class="iconfont icontishi"></i>
        <span>小提示</span>
        <p>请点击商品前的选择框，选择购物车中的商品，点击付款即可。</p>
      </div>
      <!-- 订单 -->
      <div class="orderList">
        <el-table
          ref="multipleTable"
          :data="order"
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
          <el-table-column prop="price" label="价格" width="80" show-overflow-tooltip align="center">
            <template slot-scope="scope">{{scope.row.price.toFixed(2)}}</template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 收货人信息 -->
      <p>收货人信息</p>
      <div class="customerInfo">
        <span>
          <i class="iconfont iconxuanze"></i>
          {{checkedName}}
        </span>
        <b>{{checkedAddr}}</b>
        <!-- 地址选择 -->
        <el-collapse>
          <el-collapse-item title="选择地址">
            <!-- 可供选择的地址信息 -->
            <el-radio
              v-model="radio"
              :label="index"
              v-for="(item,index) in address"
              :key="index"
              @change="choiceAddress"
            >
              <span>{{item.name}}</span>
              <span>{{item.area+item.detailArea}}</span>
              <span>{{item.phone}}</span>
              <span>{{item.postCode}}</span>
            </el-radio>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 备注 -->
      <p>备注</p>
      <div class="note">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <!-- 提交支付 -->
      <div class="commit">
        <p>
          提交订单应付总额：
          <span>￥{{allCost.toFixed(2)}}</span>
        </p>
        <router-link to="/pay" tag="el-button">支付订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
import GoodsNav from "../List/goodsNav";
import { getUserInfo } from "../../assets/getData";
export default {
  data() {
    return {
      // 表格数据
      order: [], //订单数据
      // 地址信息
      address: [], //地址信息
      // 单选框识别
      radio: "1",
      // 选中的收件人
      checkedName: "未选择",
      // 选中的收货地址
      checkedAddr: "请选择地址",
      // 备注
      input: "",
      // 总金额
      allCost: 0
    };
  },
  components: {
    Search,
    GoodsNav
  },
  async mounted() {
    var res = await getUserInfo("daimj");
    this.order = res.data.order;
    this.address = res.data.address;
  },
  methods: {
    //购物车列表勾选
    handleSelectionChange(val) {
      this.allCost = 0;
      val.forEach(element => {
        this.allCost += element.price;
      });
      console.log(this.allCost);
    },
    // 地址选择事件
    choiceAddress(val) {
      // 参数是选项的索引
      this.checkedName = this.address[val].name;
      this.checkedAddr = this.address[val].area + this.address[val].detailArea;
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  padding-bottom: 20px;
  .orderCont {
    width: 1200px;
    margin: 0 auto;
    .prompt {
      position: relative;
      width: auto;
      border: 1px solid #d5e8fc;
      border-radius: 5px;
      background: #eaf4fe;
      margin-top: 15px;
      margin-bottom: 15px;
      padding: 16px 16px 16px 69px;
      i {
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        color: rgb(111, 118, 221);
        font-size: 30px;
        margin-left: -20px;
      }
      p {
        font-size: 12px;
        line-height: 20px;
      }
    }
    > p {
      font-size: 14px;
      font-weight: 900;
      line-height: 50px;
    }
    .customerInfo {
      width: auto;
      padding: 20px;
      border: 1px dotted #ccc;
      > span {
        padding: 5px 20px;
        background: #f90013;
        font-size: 14px;
        color: #fff;
        margin-right: 20px;
      }
      b {
        font-size: 14px;
        color: #999;
      }
      .el-radio__label span {
        margin-right: 10px;
      }
    }
    .commit {
      float: right;
      margin-top: 20px;
      text-align: right;
      p {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 10px;
        margin-top: 50px;
        span {
          color: #f90013;
          font-size: 30px;
        }
      }
    }
  }
  .orderCont:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
<style lang="scss">
.order {
  // 最外围大框
  .el-collapse {
    margin-top: 10px;
    border: 1px solid #c0c4cc;
    padding-left: 20px;
    .el-collapse-item:last-child {
      margin-bottom: 0;
    }
    // 小箭头
    .el-collapse-item__arrow {
      margin-left: 10px;
      margin-top: 1px;
    }
    .el-collapse-item__header {
      border-bottom: 0;
    }
  }
  // 单选框
  .el-collapse-item__wrap {
    .el-collapse-item__content {
      padding-bottom: 0;
      .el-radio {
        display: block;
        height: 30px;
        line-height: 30px;
        .el-radio__label span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>