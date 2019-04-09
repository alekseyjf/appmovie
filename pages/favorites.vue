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
        getFovorites: []
      }
    },
    computed: {
      /*getFovorites() {
        return this.$store.getters.retFavoritesList
      }*/

    },
    //middleware: 'notAuth',
    created() {
      this.getApi();
    },
    methods: {
      getApi() {
        console.log('this.$store.getters.retFavoritesList.length', this.$store.getters.retFavoritesList.length);
        this.$store.getters.retFavoritesList.forEach((item, i, arr)=>{
          console.log(item);
          console.log(i);
          this.$axios.get(`https://api.themoviedb.org/3/movie/${item}?api_key=46af676602ac73b3c91128ec65fec3eb&language=en-US`)
          .then((data)=>{
            console.log(data,i);
            this.getFovorites.push(data.data);
            console.log(this.getFovorites);
          }).catch(error=>{
            console.log('error' ,error);
          })
        })

      }
    },
    components: {
      FavoritesComponent: ()=> import ('../components/common/favoritesComponent')
    }
  }
</script>

<style>

</style>