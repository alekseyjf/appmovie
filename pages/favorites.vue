<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in getFovorites" v-bind:key="i.id" xs4>
        <!--<favorites-component :desc="i.overview" :title="i.original_title" :filmId="i.id" :isImage="i.backdrop_path" />-->
        <favorites-component :desc="i.overview" :title="i.original_title" :filmId="i.id" :isImage="i.backdrop_path" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      getFovorites() {
        return this.$store.getters.retFavoritesList
      }

    },
    //middleware: 'notAuth',
    components: {
      FavoritesComponent: ()=> import ('../components/common/favoritesComponent')
    }
  }
</script>

<style>

</style>