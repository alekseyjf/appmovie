import Vue from 'vue';
import Vuex from 'vuex';

Vue.use('Vuex');

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null
    },
    mutations: {
      setAuth(state, auth) {
        state.auth = auth
      }
    },
    actions: {}
  })
}

export default createStore