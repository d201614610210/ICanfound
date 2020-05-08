<template>
  <div class="my">
    <aside>
      <img src="../../assets/img/head.png" alt />
      <p class="username">Daimj</p>
      <div class="type">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="收货地址" name="1">
            <p>我的收货地址</p>
            <p>添加收货地址</p>
          </el-collapse-item>
          <el-collapse-item title="购物订单" name="2">
            <p>我的订单</p>
          </el-collapse-item>
          <el-collapse-item title="购物车" name="3">
            <p>我的购物车</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </aside>
    <router-view />
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
      // 整个折叠框
      .el-collapse {
        padding-left: 20px;
        // 
        .el-collapse-item__content {
         padding-bottom:10px;
          p {
            line-height: 30px;
            padding-left: 30px;
          }
        }
      }
      .el-collapse-item__content{
        padding-bottom:10px;
      }
    }
  }
}
</style>