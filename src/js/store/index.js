import Vue from 'vue';
import Vuex from 'vuex';
import constants from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: constants.initialState,
  getters: {
    multiHoge: (state, getters) => (v = 2) => {
      return state * v;
    },
    resetHoge: (state, getters) => {
      state = 0;
      return state
    }
  }
});
