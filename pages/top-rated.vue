<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in list" v-bind:key="i.id" xs4>
        <top-rated :desc="i.overview" :title="i.original_title" :filmId="i.id" :isImage="i.backdrop_path" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  // discover/movie
  // https://api.themoviedb.org/3/movie
  export default {
    middleware: 'notAuth',
    data(){
      return {
        list: '',
        error: '',
        api_key: '46af676602ac73b3c91128ec65fec3eb',
        category: 'top_rated',
      }
    },
    created(){
      this.getMovie();;
    },
    methods: {
      getMovie(){
        return this.$axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=46af676602ac73b3c91128ec65fec3eb&language=en-US&page=1')
        .then((data) => {
          console.log('data', data.data );
          this.list = data.data.results
        })
        .catch( error => this.error = error)
      }
    },
    components: {
      TopRated: ()=> import ('../components/common/topRatedComponents')
    }
  }
</script>