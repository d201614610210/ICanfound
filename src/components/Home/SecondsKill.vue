<template>
  <div class="secondsKill">
    <div class="secondsKillCont">
      <!-- 抢购区头部 -->
      <header>
        <div class="logo">
          <img src="../../assets/img/index/clock.png" alt />
          <span>限时秒杀</span>
          <b>总有你想不到的低价</b>
        </div>
        <div class="time">
          <span>当前场次</span>
          <b>0{{hour}}</b>
          <i>:</i>
          <b>{{minute}}</b>
          <i>:</i>
          <b>{{second}}</b>
          <span>后结束抢购</span>
        </div>
      </header>
      <!-- 抢购区列表 -->
      <div class="secKillShow">
        <router-link to="/goodsList" tag="div" class="items" v-for="item in 5" :key="item">
          <img src="../../assets/img/index/seckill/seckill-item1.jpg" alt />
          <p>【赠小风扇】 维他 柠檬茶 250ml*32盒 礼品装 整箱</p>
          <span>￥71.9</span>
          <del>89.6</del>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: 1,
      minute: 59,
      second: 59
    };
  },
  mounted() {
    var time = 59;
    var timeId = setInterval(() => {
      // time<=10?time<=0?time=59:this.second='0'+time:this.second=time;
      if (time < 10) {
        if (time < 0) {
          time = 59;
          this.second = time;
          this.minute--;
        } else {
          this.second = "0" + time;
        }
      } else {
        this.second = time;
      }
      time--;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.secondsKill {
  width: 100%;
  margin-top: 10px;
  .secondsKillCont {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    header {
      height: 50px;
      line-height: 50px;
      background: red;
      overflow: hidden;
      color: #fff;
      .logo {
        float: left;
        img {
          padding: 6px 15px;
          animation-name: shake-clock;
          animation-duration: 0.3s;
          animation-iteration-count: infinite; /*设置无线循环*/
        }
        @keyframes shake-clock {
          0% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
          100% {
            transform: rotate(-8deg);
          }
        }
        span {
          font-weight: 900;
          font-size: 20px;
          margin-right: 10px;
        }
        b {
          font-size: 14px;
        }
      }
      .time {
        float: right;
        margin-right: 30px;
        // line-height:60px;
        b {
          background: #000;
          border-radius: 10px;
          color: red;
          font-size: 20px;
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          vertical-align: middle;
          margin: 0 6px;
          // padding: 3px 5px;
        }
        i {
          font-size: 20px;
          vertical-align: middle;
          color: #000;
        }
      }
    }
    .secKillShow {
      width: 100%;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-evenly;
      .items {
        // background:pink;
        width: 180px;
        padding: 15px;
        box-sizing: border-box;
        margin-top: 10px;
        box-shadow: 0 1px 1px 2px #ccc;
        color: #009688;
        // text-align: center;
        img {
          margin-left: 10px;
          transition: transform 0.2s;
          cursor: pointer;
        }
        img:hover {
          transform: translateY(-10px);
        }
        p {
          font-size: 12px;
          border-top: 1px solid #009688;
          margin: 5px 0;
        }
        span {
          font-size: 20px;
          color: #009688;
          font-weight: 900;
          margin-right: 10px;
        }
        del {
          font-size: 14px;
        }
      }
    }
  }
}
</style>