<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
              :src="imgFilm"
              aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">{{film.original_title}}</h3>
              <div>{{film.overview}}</div>
              <br>
              <p>Genres: {{getGenres}}
              </p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div v-if="film">
      <div>ID: {{$route.params.id}}</div>
      <pre>{{film}}</pre>
    </div>
    <v-alert
        :value="this.error"
        type="error"
    >
      {{error}}
    </v-alert>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        film: '',
        imgFilm: '',
        error: ''
      }
    },
    created() {
      this.getBuyIdFilm(this.$route.params.id);

    },
    mounted(){
      // this.getGeners()
    },
    methods: {
      getBuyIdFilm(id) {
        return this.$axios(id, {params: {'api_key': '46af676602ac73b3c91128ec65fec3eb'}})
        .then(
            (data) => {
              this.film = data.data;
              this.imgFilm = 'https://image.tmdb.org/t/p/w500/' + this.film.backdrop_path;
            }
        )
        .catch(error => {

          this.error = error.response.data.status_message
        })
      },

    },
    computed: {
      getGenres(){
        let item = [];
        for(let n in this.film.genres){
          item.push(this.film.genres[n].name)
        }
        return item.join(', ')
      }
    },

    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style scoped>

</style>