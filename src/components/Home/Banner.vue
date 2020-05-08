<template>
  <div class="banner">
    <div class="bannerCont">
      <!-- 左侧列表 -->
      <!-- 一级列表 -->
      <ul class="LeftList">
        <li
          v-for="(items,indexs) in LeftList"
          :key="indexs"
          @mouseenter="showDetail(indexs)"
          @mouseleave="hideDetail"
        >
          <span v-for="(item,index) in items" :key="index">
            {{item}}
            <i v-if="index!==items.length-1">/</i>
          </span>
          <!-- 二级列表 -->
          <transition name="el-fade-in">
            <ul class="LeftListDetail" v-if="activeLi===indexs">
              <li v-for="(items,indexs) in LeftListDetail" :key="indexs">
                <span v-for="(item,index) of items" :key="index">
                  {{item}}
                  <i v-if="index!==items.length-1">|</i>
                </span>
              </li>
            </ul>
          </transition>
        </li>
      </ul>

      <!-- 右侧图片 -->
      <div class="rightShow">
        <!-- 小列表 -->
        <ul class="TopList">
          <li v-for="item in TopList" :key="item">{{item}}</li>
        </ul>
        <!-- banner区域 -->
        <div class="scroll">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in 5" :key="item">
              <img :src="require('../../assets/img/nav/'+item+'.jpg')" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="fixed">
          <img src="../../assets/img/nav/nav_showimg1.jpg" alt />
          <img src="../../assets/img/nav/nav_showimg2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TopList: [
        "秒杀",
        "优惠券",
        "闪购",
        "拍卖",
        "服装城",
        "超市",
        "生鲜",
        "全球购",
        "金融"
      ],
      LeftList: [
        ["家用电器"],
        ["手机", "运营商", "数码"],
        ["电脑", "办公"],
        ["家居", "家具", "家装", "厨具"],
        ["男装", "女装", "童装", "内衣"],
        ["美妆个护", "宠物"],
        ["女鞋", "箱包", "钟表", "宝珠"],
        ["男鞋", "运动", "户外"],
        ["汽车", "汽车用品"],
        ["母婴", "玩具乐器"],
        ["食品", "酒类", "生鲜", "特产"],
        ["礼品鲜花", "农资绿植"],
        ["医药保健", "计生情趣"],
        ["图书", "音像", "电子书"]
      ],
      LeftListDetail: [
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ],
        [
          "面部护肤",
          "补水保湿",
          "卸妆",
          "面",
          "爽肤水",
          "乳液面霜",
          "精华",
          "眼霜",
          "防晒",
          "面膜",
          "剃须",
          "套装"
        ]
      ],
      activeLi: -1
    };
  },
  methods: {
    showDetail(activeLi) {
      this.activeLi = activeLi;
    },
    hideDetail() {
      this.activeLi = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  .bannerCont {
    overflow: hidden;
    width: 1000px;
    margin: 0 auto;
    position: relative;
    .LeftList {
      float: left;
      font-size: 14px;
      background: rgb(110, 101, 104);
      padding: 16px 0;
      margin-right: 15px;
      margin-top: 30px;
      > li {
        padding: 5px 20px;
        color: #fff;
        span:hover {
          color: red;
        }
      }
      > li:hover {
        background: rgba(233, 224, 224, 0.4);
      }
      .LeftListDetail {
        position: absolute;
        top: 30px;
        left: 195px;
        z-index: 9;
        padding: 20px;
        background: #fff;
        color: #000;
        li {
          margin: 15px 0;
          span i {
            padding: 0 5px;
          }
          span:hover {
            color: red;
          }
          span:nth-child(1) {
            font-weight: 900;
          }
        }
      }
    }
    .rightShow {
      width: 790px;
      float: left;
      .TopList {
        display: flex;
        margin-bottom: 10px;
        li {
          margin-right: 30px;
          font-weight: 900;
        }
        li:hover {
          color: red;
        }
      }
      .scroll {
        margin-bottom: 10px;
      }
      .fixed {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  // banner区域
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>