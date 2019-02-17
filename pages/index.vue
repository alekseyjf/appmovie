<template>

  <v-container grid-list-md text-xs-center>
    <!--<button @click="getToken">CLICK ME</button>-->
    <pre>{{dataToken}}</pre>
    <pre>{{$store.state.auth}}</pre>
    <v-layout row wrap>
      <v-flex v-for="n in list" v-bind:key="n.id" xs4>
        <film-card :body="n.overview" :title="n.title" :isImage="n.backdrop_path" :filmId="n.id"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  //https://api.themoviedb.org/3/movie/popular?api_key=e1930df30bc3ae532084ae8399ac8913&language=en-US&page=1

  import {mapState} from 'vuex';
  export default {
    data(){
      return{
        api_key: '46af676602ac73b3c91128ec65fec3eb',
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        category: 'popular',
        list: '',
        error: '',
        imgUrl: '',
        dataToken: ''

      }
    },
    created(){
      this.getList();
    },
    methods: {
      getList(){
        let params = new URLSearchParams();
        params.set('api_key', this.api_key);
        params.set('language', 'ru-RU');
        params.set('page', '1');
        return this.$axios.get(`${this.category}`, {params: params})
        .then((data) => {

          this.list = data.data.results
        })
        .catch( error => this.error = error)
      },
      /*getToken(){
        return this.$axios.post('http://localhost:3000/api/posts')
        .then((data) => {
          console.log(data);
          this.dataToken = data.data.token
        })
      },*/
    },
    components: {
      FilmCard: () => import ('../components/common/film-card')
    }
  }
</script>
