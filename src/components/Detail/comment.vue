<template>
  <div class="comment">
    <header>商品评价</header>
    <!-- 图表区 -->
    <div class="chart">
      <el-progress type="circle" :percentage="90" color="red" :stroke-width="10"></el-progress>
      <ul class="button">
        <li v-for="item in commentTag" :key="item">{{item}}</li>
      </ul>
    </div>
    <!-- 评论分类 -->
    <div class="commentType">
      <span>追评(2371)</span>
      <span>好评(1548)</span>
      <span>中评(64)</span>
      <span>差评(3)</span>
    </div>
    <!-- 评论条 -->
    <div class="commentTips" v-for="item in 6" :key="item">
      <!-- 评论者 -->
      <div class="user">
        <i class="iconfont iconuser"></i>
        <b>p*****1</b>
      </div>
      <!-- 评论详情 -->
      <div class="commentDetail">
        <el-rate
          v-model="score"
          disabled
          :colors="['#E4393C', '#E4393C', '#FF9900']"
          score-template="{value}"
        ></el-rate>
        <p>颜色很好看，质量也不错！，还送了个指环，想不到哦！</p>
        <span>4.7英寸-深邃蓝</span>
      </div>
    </div>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentTag: [
        "颜色可人",
        "实惠优选",
        "严丝合缝",
        "极致轻薄",
        "质量没话说",
        "比定做还合适",
        "完美品质",
        "正品行货",
        "包装有档次",
        "不容易发热",
        "已经买第二个",
        "是全覆盖"
      ],
      score: 3.7
    };
  },
  mounted() {
    document.getElementsByClassName("el-progress__text")[0].innerText =
      "90%好评率";
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  overflow:hidden;
  header {
    background: #eee;
    line-height: 38px;
    padding: 0 10px;
    font-weight: 900;
    color: #666;
  }
  .chart {
    overflow: hidden;
    .button {
      // line-height:50px;
      margin-top: 50px;
      li {
        float: left;
        padding: 5px;
        color: #fff;
        background: chocolate;
        margin: 5px;
        border-radius: 5px;
      }
    }
  }
  .commentType {
    width: 100%;
    padding: 5px 10px;
    background: #eee;
    span {
      font-size: 12px;
      margin-right: 15px;
    }
  }
  .commentTips {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    .user {
      float: left;
      padding-right: 80px;
      i {
        color: #999;
        font-size: 30px;
        vertical-align: middle;
        margin-right: 10px;
      }
      b {
        font-size: 12px;
      }
    }
    .commentDetail {
      float: left;
      p {
        margin-bottom: 20px;
        font-size: 14px;
      }
      span {
        color: #ccc;
        font-size: 12px;
      }
    }
  }
  // 图表
  .el-progress--circle,
  .el-progress--dashboard {
    float: left;
    margin: 20px;
  }
  // 评分
  .el-rate {
    margin: 10px 0;
  }
  // 分页器
  .el-pagination{
    float:right;
    margin-top:30px;
  }
}
</style>