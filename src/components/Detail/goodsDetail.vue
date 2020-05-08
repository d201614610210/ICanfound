<template>
  <div class="detail">
    <!-- 搜索 -->
    <Search></Search>
    <div class="first">
      <div class="firstCont">
        <ul>
          <li>
            <img src="../../assets/img/goodsList/item-show-1.jpg" alt />
            <b>全身磨砂防指纹</b>
          </li>
          <li>
            <img src="../../assets/img/goodsList/item-show-1.jpg" alt />
            <b>全身磨砂防指纹</b>
          </li>
          <li>
            <img src="../../assets/img/goodsList/item-show-1.jpg" alt />
            <b>全身磨砂防指纹</b>
          </li>
        </ul>
        <i class="iconfont iconlogo"></i>
        <p>
          ICanfound Shop
          <br />The Best Thing For You
        </p>
      </div>
      <!-- <h3>ICanfound Shop</h3>
      <h4>The Best Thing For You</h4>-->
    </div>
    <div class="second">
      <div class="secondCont">
        <span v-for="item in navList" :key="item">{{item}}</span>
      </div>
    </div>
    <div class="third">
      <div class="thirdCont">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>手机壳</el-breadcrumb-item>
          <el-breadcrumb-item>手机保护套</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="detailCont">
      <!-- 图片展示区 -->
      <div class="show">
        <img src="../../assets/img/goodsDetail/item-detail-1.jpg" alt />
        <ul>
          <li>
            <img src="../../assets/img/goodsDetail/item-detail-2.jpg" alt />
          </li>
          <li>
            <img src="../../assets/img/goodsDetail/item-detail-2.jpg" alt />
          </li>
          <li>
            <img src="../../assets/img/goodsDetail/item-detail-2.jpg" alt />
          </li>
          <li>
            <img src="../../assets/img/goodsDetail/item-detail-2.jpg" alt />
          </li>
        </ul>
      </div>
      <!-- 商品规格 -->
      <div class="top">
        <span>校园配送</span>
        <b>苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳</b>
        <p>
          <i>【满69-20元】</i>
          <i>【关注商品送钢化膜】</i>
          <i>【BIT配次日达】</i>
        </p>
        <!-- 价格 -->
        <table class="price">
          <tr>
            <td>BIT价:</td>
            <td>
              <i>￥28.00</i>
            </td>
          </tr>
          <tr>
            <td>优惠价:</td>
            <td>
              <span>满148减10</span>
              <span>满218减20</span>
              <span>满288减30</span>
            </td>
          </tr>
          <tr>
            <td>促销:</td>
            <td>
              <span>跨店满减</span>
              <span>多买优惠</span>
            </td>
          </tr>
        </table>
        <!-- 颜色 -->
        <div class="color">
          <p>选择颜色</p>
          <ul>
            <li v-for="item in 9" :key="item">
              <img src="../../assets/img/goodsDetail/pack/1.jpg" alt />
              <b>4.7英寸-深邃蓝</b>
            </li>
          </ul>
        </div>
        <!-- 分期 -->
        <div class="amortize">
          <p>白条分期</p>
          <ul>
            <li>不分期</li>
            <li>￥9.50×3期</li>
            <li>￥4.75×6期</li>
            <li>￥2.38×12期</li>
            <li>￥1.19×24期</li>
          </ul>
        </div>
        <!-- 加入购物车 -->
        <div class="addCar">
          <el-input-number v-model="num" @change="handleChange"></el-input-number>
          <button>加入购物车</button>
          <button>去购物车结算</button>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="bottom">
        <div class="hot">
          <header>店铺热销</header>
          <ul>
            <li v-for="item in 6" :key="item">
              <img src="../../assets/img/goodsDetail/hot/1.jpg" alt />
              <p>
                <i class="iconfont icon01"></i>
                <b>热销165076</b>
                <span>￥28.00</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="introduce">
          <ul class="tabBar">
            <li
              :class="{active:index===active}"
              v-for="(item,index) in 4"
              :key="index"
              @click="barClick(index)"
            >商品介绍</li>
          </ul>
          <router-view />
        </div>
      </div>
    </div>
    <!-- 购物车图标 -->
    <div class="iconCar">
      <i class="iconfont iconche"></i>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
// import GoodsImg from "./goodsImg"
export default {
  data() {
    return {
      navList: ["首页", "iPhoneX", "iPhone8", "OnePlus", "坚果Pro", "Note8"],
      num: 1,
      active: 0
    };
  },
  components: {
    Search
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    barClick(index) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  padding-bottom: 20px;
  .first {
    width: 100%;
    background: #484848;
    .firstCont {
      width: 1200px;
      height: 120px;
      margin: 0 auto;
      ul {
        float: right;
        display: flex;
        li {
          margin: 20px 10px;
          width: 150px;
          display: flex;
          align-items: center;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 10px;
            vertical-align: middle;
          }
          b {
            font-size: 12px;
            color: #fff;
          }
        }
      }
      overflow: hidden;
      > i {
        float: left;
        font-size: 40px;
        color: #fff;
        line-height: 120px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        font-weight: 900;
        color: #fff;
        margin-top: 30px;
      }
    }
  }
  .second {
    width: 100%;
    background: #333;
    .secondCont {
      width: 1200px;
      height: 38px;
      margin: 0 auto;
      line-height: 38px;
      span {
        color: #fff;
        font-weight: 900;
        margin-right: 20px;
        font-size: 12px;
      }
    }
  }
  .third {
    width: 100%;
    background: rgb(236, 235, 235);
    .thirdCont {
      width: 1200px;
      height: 38px;
      margin: 0 auto;
    }
  }
  .detailCont {
    width: 1200px;
    margin: 20px auto 0;
    padding-bottom: 20px;
    .show {
      margin-right: 30px;
      float: left;
      > img {
        width: 350px;
        height: 350px;
        box-shadow: 0 1px 2px 3px rgb(235, 232, 232);
        margin-bottom: 20px;
      }
      ul {
        width: 350px;
        display: flex;
        justify-content: space-between;
        img {
          width: 68px;
          height: 68px;
        }
      }
    }
    .top {
      width: 600px;
      float: left;
      margin-bottom: 20px;
      > span {
        padding: 3px;
        color: #fff;
        font-size: 14px;
        background: #e4393c;
        margin-right: 5px;
        border-radius: 4px;
      }
      > b {
        font-size: 18px;
      }
      > p {
        line-height: 30px;
        color: #e4393c;
        font-size: 12px;
      }
      .price {
        background: #f3f3f3;
        width: 100%;
        margin-bottom: 10px;
        tr {
          line-height: 40px;
          td:nth-child(1) {
            padding: 0 5px;
            width: 70px;
            color: #999;
          }
          td {
            i {
              color: #e4393c;
              font-size: 26px;
            }
            span {
              padding: 3px;
              border: 1px dotted #e4393c;
              color: #e4393c;
              background: #ffdedf;
              margin-right: 5px;
              font-size: 12px;
            }
          }
        }
      }
      .color {
        margin-bottom: 10px;
        p {
          float: left;
          margin-right: 10px;
          color: #999;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 5px 10px 5px 5px;
            border: 1px solid #ccc;
            background: #f7f7f7;
            margin-right: 10px;
            margin-bottom: 10px;
            img {
              vertical-align: middle;
              margin-right: 5px;
            }
            b {
              font-size: 12px;
            }
          }
        }
      }
      .amortize {
        margin-bottom: 30px;
        overflow: hidden;
        p {
          float: left;
          color: #999;
          margin-right: 10px;
        }
        li {
          float: left;
          margin-right: 10px;
          background: #f7f7f7;
          padding: 5px;
          border: 1px solid #ccc;
          font-size: 12px;
        }
      }
      .addCar {
        margin-bottom: 10px;
        text-align: center;
        button {
          margin-left: 30px;
          padding: 5px;
          background: #ed3f14;
          border: 1px solid #ed3f14;
          padding: 6px 15px;
          border-radius: 4px;
          color: #fff;
        }
      }
    }
    .bottom {
      clear: both;
      .hot {
        box-shadow: 1px 1px 5px 1px rgb(209, 208, 208);
        float: left;
        margin-right: 20px;
        header {
          width: 100%;
          background: #e4393c;
          padding: 5px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
        }
        ul {
          li {
            padding: 0 10px;
            margin-top: 15px;
            img {
              padding: 0 10px;
            }
            p {
              padding: 0 10px;
              font-size: 12px;
              i {
                color: #e4393c;
              }
              b {
                margin: 0 3px;
                font-size: 12px;
                color: #ccc;
              }
              span {
                float: right;
                color: #e4393c;
                font-weight: 900;
              }
            }
          }
        }
      }
      .introduce {
        float: left;
        width: 930px;
        .tabBar {
          display: flex;
          justify-content: flex-start;
          background: #eee;
          margin-bottom: 10px;
          li {
            padding: 5px 10px;
            // transition: background  0.3s;
            transition: color 0.5s;
          }
          li.active {
            background: #e4393c;
            color: #fff;
            border-bottom: 3px solid yellow;
          }
        }
      }
    }
    .bottom:after {
      content: " ";
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
      clear: both;
    }
  }
  .iconCar {
    position: fixed;
    right: 20px;
    top: 70%;
    i {
      color:crimson;
      font-size: 40px;
    }
  }

  // 面包屑
  .el-breadcrumb {
    line-height: 38px;
  }
  // 计数器
  .el-input-number {
    width: 150px;
  }
}
</style>