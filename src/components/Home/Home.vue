<template>
  <div class="home">
    <div class="homeCont">
      <!-- 搜索框 -->
      <Search></Search>
      <!-- banner -->
      <Banner></Banner>
      <!-- 秒杀专区 -->
      <SecondsKill></SecondsKill>
      <!-- 数码电子专区 -->
      <Digital></Digital>
      <!-- 爱吃 -->
      <Eat></Eat>
    </div>
  </div>
</template>

<script>
import Search from "../Search";
import Banner from "../Home/Banner";
import SecondsKill from "../Home/SecondsKill";
import Digital from "../Home/Digital";
import Eat from "../Home/Eat";
export default {
  data() {
    return {};
  },
  components: {
    Search,
    Banner,
    SecondsKill,
    Digital,
    Eat,
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding-bottom:20px;
  background: rgb(243, 242, 242);
  overflow: hidden;
  .homeCont {
    width: 1000px;
    margin: 0 auto;
  }
}
</style>>