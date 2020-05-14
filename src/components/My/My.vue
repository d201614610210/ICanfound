<template>
  <div class="my">
    <aside>
      <img src="/img/head.png" alt />
      <p class="username">{{owner}}</p>
      <div class="type">
        <ul :class="{'active':address}">
          <li @click="address=!address">收货地址</li>
          <router-link to="/my/address" tag="li">我的收货地址</router-link>
          <router-link to="/my/addaddress" tag="li">添加收货地址</router-link>
        </ul>
        <ul :class="{'active':order}">
          <li @click="order=!order">购物订单</li>
          <router-link to="/my/myorder" tag="li">我的订单</router-link>
        </ul>
        <ul :class="{'active':car}">
          <li @click="car=!car">购物车</li>
          <router-link to="/my/mycar" tag="li">我的购物车</router-link>
        </ul>
      </div>
    </aside>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeNames: ["1"],
      address: false,
      order: false,
      car: false
    };
  },
  computed:{
    ...mapGetters(["owner"])
  },
  mounted() {
    this.$store.commit("setShowFooter", false);
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  destroyed() {
    this.$store.commit("setShowFooter", true);
  }
};
</script>

<style lang="scss" scoped>
.my {
  position: fixed;
  bottom: 0;
  top: 30px;
  left: 0;
  right: 0;
  display: flex;
  aside {
    width: 200px;
    height: 100%;
    text-align: center;
    border-right: 1px solid #666;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .type {
      margin-top: 50px;
      text-align: left;
      p {
        font-size: 16px;
        padding: 5px 0;
      }
      ul {
        max-height: 50px;
        overflow: hidden;
        transition: 0.6s;
        li {
          height: 50px;
          line-height: 50px;
          padding-left: 40px;
          font-size: 16px;
        }
        li:nth-child(1) {
          padding-left: 30px;
        }
        li:hover {
          background: #f3f3f3;
        }
      }
      ul.active {
        max-height: 150px;
      }
    }
  }
}
</style>