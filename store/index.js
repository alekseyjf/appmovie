import Vue from 'vue';
import Vuex from 'vuex';

Vue.use('Vuex');

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null
    },
    mutations: {
      SET_AUTH(state, auth) {
        state.auth = auth
      },
      SET_TOKEN: function(state, token) {
        token !== undefined ? state.token = token : null;
      },
    },
    actions: {
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      nuxtServerInit({commit, state, dispatch}, {req, res}) {
        console.log('req.session', req.session);

        let {token} = req.session;

        commit('SET_AUTH', token);

      },

    }
  })
}

export default createStore