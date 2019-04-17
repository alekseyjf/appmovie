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
      rmFavorite(state, index) {
        state.favoritesList.splice(index, 1);
      },
      SET_AUTH(state, auth) {
        state.auth = auth
      },
      SET_TOKEN: function(state, token) {
        token != undefined ? state.token = token : state.token = null;
      },
    },
    actions: {
      setFavorite({commit}, filmId) {
        this.$axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=46af676602ac73b3c91128ec65fec3eb&language=en-US`)
          .then((data)=>{
            console.log(data.data);
            commit('mutFavorite', data.data)
          })
          .catch(error=>{
            console.log('error' ,error);
          })

        //commit('mutFavorite', filmId)
      },
      setToken({commit}, token) {
        console.log('action', token);
        commit('SET_TOKEN', token)
      },
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      removeFavorite({commit}, index) {
        commit('rmFavorite', index)
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