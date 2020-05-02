import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.css'
import '@/assets/iconfont/iconfont.css'
import router from './router/router'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')