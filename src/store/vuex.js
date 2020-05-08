import Vue from 'vue';
import Vuex from 'vuex';
import action from './action';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state={
  activeStep:0,
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  action
})