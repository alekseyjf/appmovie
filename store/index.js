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
    actions: {
      nuxtServerInit({commit},{req}){
        let auth = null

        console.log('localStorage.token', localStorage.token);
        auth = localStorage.token
        console.log(req);

        commit('setAuth', auth)
      }
    }
  })
}

export default createStore