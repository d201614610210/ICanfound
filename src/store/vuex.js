import Vue from 'vue';
import Vuex from 'vuex';
import action from './action';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  owner: undefined,//存储登录用户名
  showFooter: true,//控制footer组件是否显示
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  action
})