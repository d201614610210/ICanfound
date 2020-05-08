<template>
  <div class="my">
    <aside>
      <img src="../../assets/img/head.png" alt />
      <p class="username">Daimj</p>
      <div class="type">
        <ul class="address">
          <li>收货地址</li>
          <li>我的收货地址</li>
          <li>添加收货地址</li>
        </ul>
        <ul class="order">
          <li>购物订单</li>
          <li>我的订单</li>
        </ul>
        <ul class="car">
          <li>购物车</li>
          <li>我的购物车</li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
html,body {
  height: 100%;
}
.my {
  width: 100%;
  height: 100%;
  aside {
    width: 200px;
    height:100%;
    text-align: center;
    overflow: hidden;
    border-right: 1px solid #666;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
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
        li {
          padding: 5px 30px;
        }
        li:nth-child(1) {
          padding-left: 20px;
        }
        li:hover {
          background: #999;
        }
      }
    }
  }
}
</style>