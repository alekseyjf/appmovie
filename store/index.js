import Vue from 'vue';
import Vuex from 'vuex';

Vue.use('Vuex');

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null,
      token: null,
      favoritesList: [ ],
    },
    mutations: {
      mutFavorite(state, filmId) {
        state.favoritesList.push(filmId)
      },
      rmFavorite(state, flmId) {
        for(let i=0; i < state.favoritesList.length; i++) {

        }
      },
      SET_AUTH(state, auth) {
        state.auth = auth
      },
      SET_TOKEN: function(state, token) {
        console.log('mutation', token);
        token != undefined ? state.token = token : state.token = null;
      },
    },
    actions: {
      setFavorite({commit}, filmId) {
        commit('mutFavorite', filmId)
      },
      setToken({commit}, token) {
        console.log('action', token);
        commit('SET_TOKEN', token)
      },
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      removeFavorite({commit}, filmId) {
        commit('rmFavorite', filmId)
      },

      nuxtServerInit({commit, state, dispatch}, {req, res}) {
        //console.log('req.session', req.session);

        let {token} = req.session;

        commit('SET_TOKEN', token);

      },

    },
    getters:{
      retToken(state){
        return state.token
      },
      retFavoritesList(state) {
        return state.favoritesList
      }
    }
  })
}

export default createStore