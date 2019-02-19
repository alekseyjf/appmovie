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
      async nuxtServerInit({commit, state, dispatch}, {req, res}) {
        console.log('req.session', req.session.token);
        try {
          if (req.session.token) {
            let {token} = req.session.token;
            console.log('token', token);
            await commit('SET_AUTH', token);
          }
        } catch (error) {
          console.log(error);
        }
      },

    }
  })
}

export default createStore