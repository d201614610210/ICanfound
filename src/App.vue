<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-show="showFooter" />
  </div>
</template>

<script>
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {mapGetters} from "vuex"

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed:{
    ...mapGetters(["showFooter"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
