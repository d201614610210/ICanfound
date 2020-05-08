<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/img/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from "./components/test";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Test,
    Header,
    Footer
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
