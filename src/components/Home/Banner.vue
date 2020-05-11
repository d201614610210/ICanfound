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
            <b>{{item}}</b>
            <i v-if="index!==items.length-1">/</i>
          </span>
          <!-- 二级列表 -->
          <transition name="el-fade-in">
            <ul class="LeftListDetail" v-show="activeLi===indexs">
              <router-link
                to="/goodsList"
                tag="li"
                v-for="(items,indexs) in indexs%2===0?LeftListDetail1:LeftListDetail2"
                :key="indexs"
              >
                <span>
                  {{items.title}}
                  <i>|</i>
                </span>
                <span v-for="(item,index) in items.tags" :key="index">
                  <b>{{item}}</b>
                  <i v-if="index!==items.length-1">|</i>
                </span>
              </router-link>
            </ul>
          </transition>
        </li>
      </ul>
      <!-- 右侧图片 -->
      <div class="rightShow">
        <!-- 小列表 -->
        <ul class="TopList">
          <li v-for="(item,index) in TopList" :key="index">{{item}}</li>
        </ul>
        <!-- 滚动图片区 -->
        <div class="scroll">
          <el-carousel trigger="click">
            <el-carousel-item v-for="(item,index) in scrollImg" :key="index">
              <router-link to="/goodsList" tag="img" :src="item" alt></router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 固定图片区 -->
        <div class="fixed">
          <router-link
            to="/goodsList"
            tag="img"
            :src="item"
            v-for="(item,index) in fixedImg"
            :key="index"
            alt
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeBanner } from "../../assets/getData";
export default {
  data() {
    return {
      TopList: [], // 首页小导航
      LeftList: [], // 首页左侧一级导航
      LeftListDetail1: [], // 首页左侧二级导航1
      LeftListDetail2: [], // 首页左侧二级导航2
      scrollImg: [], // 滚动区图片
      fixedImg: [], //固定图片
      activeLi: -1 //当前划过的列表
    };
  },
  async mounted() {
    var res = await getHomeBanner();
    this.TopList = res.data.TopList;
    this.LeftList = res.data.LeftList;
    this.LeftListDetail1 = res.data.LeftListDetail1;
    this.LeftListDetail2 = res.data.LeftListDetail2;
    this.scrollImg = res.data.scrollImg;
    this.fixedImg = res.data.fixedImg;
  },
  methods: {
    // 一级导航鼠标划入显示二级导航
    showDetail(activeLi) {
      this.activeLi = activeLi;
    },
    // 一级导航鼠标划出隐藏二级导航
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
        span b {
          cursor: pointer;
        }
        span b:hover {
          color: red;
        }
      }
      > li:hover {
        background: rgba(233, 224, 224, 0.4);
      }
      .LeftListDetail {
        position: absolute;
        top: 30px;
        left: 172px;
        z-index: 9;
        padding: 20px;
        background: #fff;
        color: #000;
        li {
          font-size: 12px;
          margin: 20px 0;
          span i {
            padding: 0 5px;
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
          cursor: pointer;
        }
        li:hover {
          color: red;
        }
      }
      .scroll {
        margin-bottom: 10px;
        img {
          cursor: pointer;
        }
      }
      .fixed {
        display: flex;
        justify-content: space-between;
        img {
          cursor: pointer;
        }
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