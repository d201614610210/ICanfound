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
      <!-- 购物车 -->
      <div class="orderList">
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
      <!-- 收货人信息 -->
      <p>收货人信息</p>
      <div class="customerInfo">
        <span>
          <i class="iconfont iconxuanze"></i>
          未选择
        </span>
        <b>请选择地址</b>
        <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
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
          <span>￥0.00</span>
        </p>
        <el-button type="danger">支付订单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
import GoodsNav from "../List/goodsNav";
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
      multipleSelection: [],
      // 手风琴信息
      data: [
        {
          label: "选择地址",
          children: [
            {
              label: "Gavin 广东省 广州市 燕岭路633号 152****0609 510000"
            },
            {
              label: "Kevin 上海市 上海市 沙新镇 158****0888 200120"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      // 备注
      input: ""
    };
  },
  components: {
    Search,
    GoodsNav
  },
  methods: {
    //购物车列表点击事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 手风琴点击事件
    handleNodeClick(data) {
      console.log(data);
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
      span {
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
      .el-tree {
        margin-top: 15px;
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
      button {
        background: #f90013;
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