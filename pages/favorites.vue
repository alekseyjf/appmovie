<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in $store.getters.retFavoritesList" v-bind:key="i.id" xs4>
        <favorites-component :desc="i.overview" :title="i.original_title" :filmId="i.id" :isImage="i.backdrop_path" @allowOnRemove="removeFavorites"/>
      </v-flex>
    </v-layout>
    <popup v-if="popup" :filmId="filmId" @close="closePopup" @getFilmId="retFilmId"></popup>
    <restorePopup v-if="restorePopup" :restoreId="restoreId" @close="closePopup"></restorePopup>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        popup: false,
        restorePopup: false,
        filmId: '',
        restoreId: ''
      }
    },
    // computed: {},
    middleware: 'notAuth',
    methods: {
      removeFavorites(filmId) {
        //this.restoreId = filmId;
        //console.log('filmId', filmId);
        this.popup= !this.popup;
        this.filmId= filmId;

      },
      retFilmId(filmId) {
        let restoreFilmId = filmId;
        console.log('filmId filmId filmId', filmId);
        this.popup= false;
        this.restoreId= restoreFilmId;
        this.restorePopup= true;
      },
      closePopup() {
        this.popup= false;
        this.restorePopup= false;
      }
    },
    components: {
      FavoritesComponent: ()=> import ('../components/common/favoritesComponent'),
      popup: ()=> import ('~/components/popup/popup'),
      restorePopup: ()=> import ('~/components/popup/restore-popup'),
    }
  }
</script>

<style>

</style>