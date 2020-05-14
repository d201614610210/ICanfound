<template>
  <router-link to="/" tag="div" class="payDone">
    <div class="payDoneCont">
      <img src="/img/pay-success.png" alt="">
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.payDone {
  width: 100%;
  padding-bottom: 20px;
  .payDoneCont {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    img{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
    }
  }
}
</style>