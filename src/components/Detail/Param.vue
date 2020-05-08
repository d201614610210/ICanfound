<template>
  <div class="param">
    <header>规格参数</header>
    <table>
      <tr v-for="item in 3" :key="item">
        <td>
          商品名称:
          <span>iPhone7手机壳</span>
        </td>
        <td>
          商品编号:
          <span>10435663237</span>
        </td>
        <td>
          店铺:
          <span>ICanfound</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.param {
  width: 100%;
  header {
    background: #eee;
    line-height: 38px;
    padding: 0 10px;
    font-weight: 900;
    color: #666;
  }
  table{
    tr{
      line-height:36px;
      td{
        width:300px;
        padding-left:50px;
        span{
          color:#999;
        }
      }
    }
  }
}
</style>