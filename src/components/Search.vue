<template>
  <div class="search">
    <div class="searchCont">
      <!-- 搜索框 -->
      <el-input placeholder="请输入你想查找的商品" v-model="inputSearch">
        <template slot="append">
          <router-link to="/goodsList" tag="i" class="iconfont iconsearch"></router-link>
        </template>
      </el-input>
      <p style="padding:5px"></p>
      <!-- 选项 -->
      <el-tag
        v-for="tag in tags"
        :disable-transitions="false"
        :key="tag.name"
        closable
        :type="tag.type"
        @click="tagClick(tag.name)"
        @close="handleClose(tag)"
      >{{tag.name}}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputSearch: "",
      tags: [
        { name: "手机膜", type: "" },
        { name: "磨砂壳", type: "success" },
        { name: "手机支架", type: "info" },
        { name: "满减活动", type: "warning" },
        { name: "包邮", type: "danger" }
      ]
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    // 点击选项按钮
    tagClick(val){
      this.inputSearch=val;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding: 20px 0;
  // background: rgb(243, 242, 242);
  .searchCont {
    width: 550px;
    margin: 0 auto;
    // text-align: center;
    .el-tag {
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>