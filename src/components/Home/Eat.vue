<template>
  <div class="digital">
    <div class="digitalCont">
      <!-- 标题 -->
      <header>
        <span>电脑数码</span>
        <ul class="digitalTips">
          <router-link to="/goodsList" tag="li" v-for="item in dataList" :key="item">{{item}}</router-link>
        </ul>
      </header>
      <!-- 展示区 -->
      <div class="digitalShow">
        <!-- 左侧展区 -->
        <div class="show" v-for="item in 2" :key="item">
          <!-- 左--上 -->
          <div class="showTop">
            <!-- 左--左上 -->
            <router-link to="/goodsList" tag="aside">
              <img src="../../assets/img/index/computer/item-computer-1.jpg" alt />
            </router-link>
            <!-- 左--右上 -->
            <ul class="showTips">
              <router-link to="/goodsList" tag="li" v-for="item in 4" :key="item">
                <img src="../../assets/img/index/computer/item-computer-1-3.jpg" alt />
                <p>电脑馆</p>
                <b>笔记本999元限量秒</b>
              </router-link>
            </ul>
          </div>
          <!-- 左--下 -->
          <ul class="showBottom">
            <router-link to="/goodsList" tag="li" v-for="item in 3" :key="item">
              <img src="../../assets/img/index/computer/item-computer-1-6.jpg" alt />
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        "电脑馆",
        "游戏极品",
        "装机大师",
        "职场焕新",
        "女神频道",
        "虚拟现实",
        "二合一平板",
        "电子教育",
        "万物周刊"
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.digital {
  width: 100%;
  margin-top: 10px;
  .digitalCont {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    header {
      height: 50px;
      line-height: 50px;
      background: #4488a7;
      padding: 0 20px 0 15px;
      > span {
        font-weight: 900;
        font-size: 20px;
        color: #fff;
      }
      .digitalTips {
        transform: translateX(10px);
        float: right;
        display: flex;
        width: 660px;
        height: 50px;
        justify-content: space-around;
        align-items: center;
        li {
          padding: 0 6px;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #fff;
          background: #6da6be;
          border: 1px solid #6da6be;
        }
        li:hover {
          border: 1px solid #fff;
        }
      }
    }
    .digitalShow {
      display: flex;
      .show {
        width: 500px;
        padding: 0 0 10px 10px;
        .showTop {
          overflow: hidden;
          aside {
            width: 170px;
            height: 300px;
            overflow: hidden;
            float: left;
            img {
              transition: 0.2s;
              height: 300px;
            }
            img:hover {
              transform: translateX(-10px);
            }
          }
          .showTips {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            width: 310px;
            height: 300px;
            float: right;
            li {
              width: 130px;
              height: 140px;
              padding: 2px 3px;
              text-align: center;
              p {
                font-size: 12px;
                color: olivedrab;
              }
              b {
                font-size: 10px;
              }
            }
            li:hover {
              box-shadow: 1px 1px 1px 1px darkgrey;
            }
          }
        }
        .showBottom {
          width: 100%;
          height: 130px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          li {
            width: 150px;
            overflow: hidden;
          }
          img {
            transition: 0.2s;
          }
          img:hover {
            transform: translateX(-10px);
          }
        }
      }
      .showRight {
        width: 500px;
        height: 300px;
        background: yellow;
      }
    }
  }
}
</style>