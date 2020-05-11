<template>
  <div class="goodsList">
    <Search></Search>
    <!-- 导航 -->
    <GoodsNav></GoodsNav>
    <div class="goodsListCont">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="iconfont iconhome_n"></i>
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <i class="iconfont iconbaobao_huaban" style="cursor:pointer"></i>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 选项 -->
      <table class="option" rules="groups">
        <tr v-for="(items,indexs) in optionList" :key="indexs">
          <td>{{items.tagName}}：</td>
          <td>
            <span v-for="(item,index) in items.tags" :key="index">{{item}}</span>
          </td>
        </tr>
      </table>
      <!-- 侧边栏 -->
      <div class="aside">
        <header>
          <span>商品精选</span>
          <b>广告</b>
        </header>
        <ul class="ad">
          <li v-for="(item,index) in ad" :key="index">
            <img :src="item.imgUrl" alt />
            <span>￥{{item.price.toFixed(2)}}</span>
            <p>{{item.intro}}</p>
            <p>
              已有
              <span>{{item.remarks}}</span>人评价
            </p>
          </li>
        </ul>
      </div>
      <!-- 商品列表 -->
      <div class="list">
        <!-- <header>
          <el-button v-for="(item,index) in sort" :key="index" @click="activeBtn(index)">
            {{item}}
            <i :class="index===active?'iconfont iconarrow-up-':'iconfont iconarrow-down-'"></i>
          </el-button>
        </header> -->
        <ul class="listTips">
          <router-link to="/goodsDetail" tag="li" v-for="(item,index) in goods" :key="index">
            <img :src="item.imgUrl" alt />
            <div>
              <span>￥{{item.price.toFixed(2)}}</span>
              <p>{{item.intro}}</p>
              <p class="comment">
                已有
                <span>{{item.remarks}}</span>人评价
              </p>
              <b>{{item.shopName}}</b>
            </div>
          </router-link>
        </ul>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
import GoodsNav from "./goodsNav.vue";
import { getListOption } from "../../assets/getData.js";
export default {
  data() {
    return {
      optionList: [],//品牌款式选项
      sort: ["综合", "评论数", "价格"],
      active: 0,
      goods:[],//商品信息
      ad:[],
    };
  },
  components: {
    Search,
    GoodsNav
  },
  async mounted() {
    var res = await getListOption();
    this.optionList = res.data.optionList;
    this.goods = res.data.goods;
    this.ad=this.goods.slice(3,8)
    console.log(this.ad)
  },
  methods: {
    activeBtn(index) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsList {
  width: 100%;
  padding-bottom: 20px;
  background: #fff;
  overflow: hidden;
  .goodsNav {
    display: flex;
    padding-left: 140px;
    border-bottom: 3px solid red;
    li {
      font-size: 18px;
      line-height: 64px;
      // background:pink;
      // margin-right:10px;
      margin-left: 30px;
    }
    li:nth-child(1) {
      background: pink;
      padding: 0 38px;
    }
  }
  .goodsListCont {
    width: 1300px;
    margin: 0 auto;
    .option {
      width: 100%;
      font-size: 12px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-bottom: 15px;
      tr {
        border-top: 1px solid #ccc;
      }
      td {
        padding-left: 10px;
        height: 40px;
        span {
          color: #005aa0;
          margin-right: 15px;
          cursor: pointer;
        }
      }
      td:nth-child(1) {
        width: 150px;
        background: rgb(243, 243, 243);
      }
    }
    .aside {
      float: left;
      width: 190px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      margin-right: 10px;
      header {
        padding: 10px 15px 0;
        span {
          color: red;
          font-size: 20px;
        }
        b {
          float: right;
          font-size: 12px;
          color: rgb(136, 135, 135);
        }
      }
      .ad {
        li {
          padding: 10px 15px;
          img{
            width:160px;
            height:160px;
          }
          > span {
            font-size: 18px;
            color: #a94442;
          }
          p {
            font-size: 12px;
            span {
              color: #005aa0;
            }
          }
        }
      }
    }
    .list {
      float: left;
      width: 1100px;
      // text-align: center;
      header {
        background: rgb(243, 243, 243);
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        button {
          border: 1px solid #ccc;
          background: #fff;
          padding: 2px;
        }
      }
      .listTips {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // background: pink;
        li {
          width: 240px;
          padding: 10px;
          // margin: 15px 0;
          margin: 0 0 30px;
          box-sizing: border-box;
          div {
            text-align: left;
            margin-top: 5px;
            > span {
              font-size: 26px;
              color: #a94442;
              font-weight: 900;
            }
            p {
              font-size: 12px;
              margin: 6px 0;
              line-height: 16px;
            }
            .comment {
              color: #009688;
              span {
                color: #005aa0;
                font-weight: 900;
              }
            }
            b {
              font-size: 12px;
              color: #e4393c;
            }
          }
        }
        li:hover {
          box-shadow: 0 1px 10px 5px rgb(211, 209, 209);
        }
      }
    }
  }
  .el-breadcrumb {
    margin: 15px 0;
  }
  // 分页
  .el-pagination {
    clear: both;
    float: right;
  }
}
</style>