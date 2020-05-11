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
    <!-- <div class="second">
      <div class="secondCont">
        <span v-for="(item,index) in navList" :key="item">{{item}}</span>
      </div>
    </div>-->
    <div class="third">
      <div class="thirdCont">
        <router-link to="/" tag="span">首页</router-link>
        <i>/</i>
        <router-link to="/goodsList" tag="span">手机壳</router-link>
        <i>/</i>
        <span>手机保护套</span>
      </div>
    </div>
    <div class="detailCont">
      <!-- 图片展示区 -->
      <div class="show">
        <img :src="showBig" alt />
        <ul>
          <li v-for="(item,index) in showSmall" :key="index">
            <!-- {{item}} -->
            <!-- <img src="../../assets/img/goodsDetail/item-detail-2.jpg" alt /> -->
            <img :src="item" alt @mouseenter="changeShowBig(index)" />
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
              <i v-if="goodsType.length!==0">￥{{bitPrice}}</i>
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
            <li
              :class="{'activeType':checkedType===index}"
              v-for="(item,index) in goodsType"
              :key="index"
              @click="choiceType(index)"
            >
              <img :src="item.imgUrl" alt />
              <b>{{item.type}}</b>
            </li>
          </ul>
        </div>
        <!-- 分期 -->
        <div class="amortize">
          <p>白条分期</p>
          <ul>
            <li :class="{'activeM':activeM===1}" @click="activeM=1" v-if="goodsType.length!==0">不分期</li>
            <li
              :class="{'activeM':activeM===2}"
              @click="activeM=2"
              v-if="goodsType.length!==0"
            >￥{{amortize3}}×3期</li>
            <li
              :class="{'activeM':activeM===3}"
              @click="activeM=3"
              v-if="goodsType.length!==0"
            >￥{{amortize6}}×6期</li>
            <li
              :class="{'activeM':activeM===4}"
              @click="activeM=4"
              v-if="goodsType.length!==0"
            >￥{{amortize12}}×12期</li>
            <li
              :class="{'activeM':activeM===5}"
              @click="activeM=5"
              v-if="goodsType.length!==0"
            >￥{{amortize24}}×24期</li>
          </ul>
        </div>
        <!-- 加入购物车 -->
        <div class="addCar">
          <el-input-number v-model="buyNum"></el-input-number>
          <button @click="addToCar">加入购物车</button>
          <router-link to="/order" tag="button">去购物车结算</router-link>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="bottom">
        <div class="hot">
          <header>店铺热销</header>
          <ul>
            <li v-for="(item,index) in goodsHot" :key="index">
              <img :src="item.imgUrl" alt />
              <p>
                <b>{{index+1}}、热销{{item.sale}}</b>
                <span>￥{{item.price.toFixed(2)}}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="introduce">
          <ul class="tabBar">
            <li
              :class="{active:index===active}"
              v-for="(item,index) in introduceType"
              :key="index"
              @click="barClick(index)"
            >{{item}}</li>
          </ul>
          <!-- <router-view /> -->
          <Img v-show="showType==='img'" @click="barClick(0)" />
          <Param v-show="showType==='param'" @click="barClick(1)" />
          <AfterSale v-show="showType==='aftersale'" @click="barClick(2)" />
          <Comment v-show="showType==='comment'" @click="barClick(3)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
import Img from "./goodsImg";
import Param from "./Param";
import AfterSale from "./afterSale";
import Comment from "./comment";
import { getDetail } from "../../assets/getData";

export default {
  data() {
    return {
      // 小导航
      // navList: ["首页", "iPhoneX", "iPhone8", "OnePlus", "坚果Pro", "Note8"],
      // 当前活跃商品详情索引
      active: 0,
      // showSmall图片路径
      showSmall: [],
      // 当前展示的图片路径
      showBig: "",
      // 当前选中的商品类型
      checkedType: 1,
      // 商品类型信息
      goodsType: [],
      // 当前选中的分期选项
      activeM: 1,
      // 加购数量
      buyNum: 1,
      // 热销商品信息
      goodsHot: [],
      // 介绍类型
      introduceType: ["商品介绍", "规格参数", "售后保障", "商品评价"],
      showType: "img"
    };
  },
  components: {
    Search,
    Img,
    Param,
    AfterSale,
    Comment
  },
  async beforeCreate() {
    var res = await getDetail();
    this.showBig = res.data.showBig;
    this.showSmall = res.data.showSmall;
    this.goodsType = res.data.goodsType;
    this.goodsHot = res.data.goodsHot;
  },
  computed: {
    amortize3() {
      return (
        (this.goodsType[this.checkedType].price / 3) *
        this.buyNum
      ).toFixed(2);
    },
    amortize6() {
      return (
        (this.goodsType[this.checkedType].price / 6) *
        this.buyNum
      ).toFixed(2);
    },
    amortize12() {
      return (
        (this.goodsType[this.checkedType].price / 12) *
        this.buyNum
      ).toFixed(2);
    },
    amortize24() {
      return (
        (this.goodsType[this.checkedType].price / 24) *
        this.buyNum
      ).toFixed(2);
    },
    bitPrice() {
      return this.goodsType[this.checkedType].price.toFixed(2);
    }
  },
  methods: {
    // 详情展示切换
    barClick(index) {
      this.active = index;
      switch (index) {
        case 0: {
          this.showType = "img";
          // this.$router.push("/goodsDetail/img");
          break;
        }
        case 1: {
          this.showType = "param";
          // this.$router.push("/goodsDetail/param");
          break;
        }
        case 2: {
          this.showType = "aftersale";
          // this.$router.push("/goodsDetail/afterSale");
          break;
        }
        case 3: {
          this.showType = "comment";
          // this.$router.push("/goodsDetail/comment");
          break;
        }
      }
    },
    // show展示的大图
    changeShowBig(index) {
      this.showBig = this.showSmall[index];
    },
    // 当前选中的商品类型
    choiceType(index) {
      this.checkedType = index;
    },
    // 添加购物车
    addToCar() {
      this.$message.success("加入购物车成功");
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
  // .second {
  //   width: 100%;
  //   background: #333;
  //   .secondCont {
  //     width: 1200px;
  //     height: 38px;
  //     margin: 0 auto;
  //     line-height: 38px;
  //     span {
  //       color: #fff;
  //       font-weight: 900;
  //       margin-right: 20px;
  //       font-size: 12px;
  //       cursor: pointer;
  //     }
  //   }
  // }
  .third {
    width: 100%;
    background: rgb(236, 235, 235);
    .thirdCont {
      width: 1200px;
      height: 38px;
      margin: 0 auto;
      line-height: 38px;
      i {
        padding: 0 15px;
      }
      span {
        cursor: pointer;
      }
      span:hover {
        color: rgb(57, 136, 189);
      }
    }
  }
  .detailCont {
    width: 1200px;
    margin: 20px auto 0;
    padding-bottom: 20px;
    .show {
      margin-right: 30px;
      float: left;
      img {
        cursor: pointer;
      }
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
          box-shadow: 0 1px 3px 2px rgb(235, 232, 232);
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
              cursor: pointer;
            }
            span {
              padding: 3px;
              border: 1px dotted #e4393c;
              color: #e4393c;
              background: #ffdedf;
              margin-right: 5px;
              font-size: 12px;
              cursor: pointer;
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
            cursor: pointer;
            img {
              vertical-align: middle;
              margin-right: 5px;
            }
            b {
              font-size: 12px;
            }
          }
          li:hover {
            border-color: red;
          }
          li.activeType {
            border-color: red;
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
          cursor: pointer;
        }
        li:hover {
          border-color: red;
        }
        li.activeM {
          border-color: red;
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
          padding-bottom: 10px;
          li {
            padding: 0 10px;
            margin-top: 15px;
            img {
              padding: 0 10px;
              margin-bottom: 10px;
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