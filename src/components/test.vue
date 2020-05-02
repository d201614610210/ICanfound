<template>
  <div class="test">
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <router-link to='/public'>主页</router-link>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
/* .box {
  width: 100px;
  height: 100px;
  background: pink;
} */
</style>>