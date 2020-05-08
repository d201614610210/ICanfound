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
          <li>购物车</li>
          <span style="padding:0 5px;">|</span>
          <li>网站导航</li>
          <span style="padding:0 5px;">|</span>
          <li>意见反馈</li>
          <span style="padding:0 5px;">|</span>
          <li>商城首页</li>
          <span style="padding:0 5px;">|</span>
        </ul>
        <!-- 登陆之前 -->
        <ul class="unLogin" v-if="false">
          <li>
            <span>您好，请</span>
            <span class="loginBtn">
              登录
              <i class="iconfont iconuser"></i>
            </span>
          </li>
          <span style="padding:0 5px;">|</span>
          <li>
            <span class="registBtn">
              免费注册
              <i class="iconfont iconuser"></i>
            </span>
          </li>
        </ul>
        <!-- 登陆之后 -->
        <div class="user" v-else>
          <!-- 用户登录后的下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>{{userName}}</span>
              <i class="iconfont iconuser"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="iconfont iconhome_n"></i>
                <span>我的主页</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconhome_n"></i>
                <span>我的主页</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCurrentCityName from "../../lib/getPosition";

export default {
  data() {
    return {
      cityName: "",
      userName: "待定"
    };
  },
  mounted() {
    this.getCurrentCity();
  },
  methods: {
    // 获取当前城市名
    getCurrentCity() {
      getCurrentCityName().then(city => {
        this.cityName = city;
      });
    }
  }
};
</script>

<style lang='scss'>
.header {
  background: rgb(221, 219, 219);
  overflow: hidden;
  padding:5px 0;
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