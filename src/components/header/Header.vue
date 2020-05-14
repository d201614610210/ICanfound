<template>
  <div class="header">
    <div class="headerCont">
      <!-- 当前所在城市 -->
      <div class="currentCity">
        <i class="iconfont iconlocation"></i>
        <span>{{cityName}}</span>
      </div>
      <!-- 头部导航 -->
      <div class="headerNav">
        <!-- 固定内容 -->
        <ul class="fixCont">
          <router-link to="/my/mycar" tag="li">购物车</router-link>
          <span style="padding:0 5px;">|</span>
          <li>网站导航</li>
          <span style="padding:0 5px;">|</span>
          <router-link to="/feedback" tag="li">意见反馈</router-link>
          <span style="padding:0 5px;">|</span>
          <router-link to="/" tag="li">商城首页</router-link>
          <span style="padding:0 5px;">|</span>
        </ul>
        <!-- 已登录 -->
        <div class="user" v-if="owner">
          <!-- 用户登录后的下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>{{owner}}</span>
              <i class="iconfont iconuser"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="iconfont iconhome_n"></i>
                <router-link to="/my" tag="span">我的主页</router-link>
                <!-- <span>我的主页</span> -->
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconhome_n"></i>
                <span @click="quit">退出登录</span>
                <!-- <router-link to="/login" tag="span" @click="quit">退出登录</router-link> -->
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 未登录 -->
        <ul class="unLogin" v-else>
          <li>
            <span>您好，请</span>
            <router-link to="/login" tag="span" class="loginBtn">
              登录
              <i class="iconfont iconuser"></i>
            </router-link>
          </li>
          <span style="padding:0 5px;">|</span>
          <li>
            <router-link to="regist" tag="span" class="registBtn">
              免费注册
              <i class="iconfont iconuser"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import getCurrentCityName from "../../lib/getPosition";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cityName: ""
    };
  },
  computed: {
    ...mapGetters(["owner"])
  },
  mounted() {
    // 获取当前定位城市
    this.getCurrentCity();
    // 获取cookie判断是否登陆过
    this.getCookie();
  },
  methods: {
    // 获取当前城市名
    getCurrentCity() {
      getCurrentCityName().then(city => {
        this.cityName = city;
      });
    },
    // 退出登录
    quit() {
      this.$store.commit("setOwner", undefined);
      // 清除cookie
      this.clearCookie();
      this.$router.push("/login");
    },
    // 获取cookie
    getCookie() {
      var name = "username" + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          this.$store.commit("setOwner", c.substring(name.length, c.length));
        }
      }
    },
    // 清除cookie
    clearCookie() {
      var time = new Date();
      time.setTime(time.getTime() - 1000 * 60 * 60 * 8 + 1000 * -10);
      document.cookie = `username=111;expires=${time}`;
    }
  }
};
</script>

<style lang='scss'>
.header {
  background: rgb(221, 219, 219);
  overflow: hidden;
  padding: 5px 0;
  .headerCont {
    width: 1300px;
    margin: 0 auto;
    .currentCity {
      float: left;
      i {
        color: red;
      }
    }
    .headerNav {
      float: right;
      .fixCont {
        float: left;
        display: flex;
        margin-right: 10px;
        span {
          padding: 0 10px;
        }
        li {
          cursor: pointer;
        }
        li:hover {
          color: red;
        }
      }
      .unLogin {
        display: flex;
        float: left;
        .loginBtn:hover {
          color: red;
        }
        .registBtn:hover {
          color: red;
        }
      }
      .user {
        float: left;
        cursor: pointer;
      }
    }
  }
}
// 整个下拉菜单
// .el-dropdown-menu {
//   transform: translateX(50%);
//   // margin-left:100%
// }
// .popper__arrow{
//   transform: translateX(-100%);
// }
// 下拉菜单的每一项
// .el-dropdown-menu__item{
//   text-align: center;
//   padding:5px 10px;
//   box-sizing: border-box;
// }
// .el-dropdown-menu__item:hover{
//   border:1px solid red;
//   background:red;
// }
</style>