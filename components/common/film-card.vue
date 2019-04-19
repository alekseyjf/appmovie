<template>
  <v-flex xs12>
    <v-card>
      <v-img
          :src="imageUrl"
          aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-12">{{title}}</h3>
          <div>{{body}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <nuxt-link :to="'film/'+filmId">
          <v-btn flat color="orange">detail</v-btn>
        </nuxt-link>
        <template v-if="retToken">
          <v-btn v-if="flag" color="primary" @click="addFavorite">add favorites</v-btn>
          <v-btn v-else color="primary" @click="removeFavorite">remove favorites</v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "FilmCard",
    props: ['body', 'title', 'isImage', 'filmId'],
    data(){
      return{
        imageUrl: 'https://image.tmdb.org/t/p/w500/'+this.isImage,
        flag: true
      }
    },
    created(){
      this.checkOnFavorites();
    },
    computed: {
      ...mapGetters(['retToken'])
    },
    mounted() {

    },
    methods: {
      addFavorite() {
        this.$store.dispatch('setFavorite', this.filmId);
        this.flag = !this.flag;
      },
      removeFavorite() {
        for(let i=0; i < this.$store.getters.retFavoritesList.length; i++) {
          if(this.$store.getters.retFavoritesList[i].id == this.filmId) {
            this.flag = !this.flag;
            this.$store.dispatch('removeFavorite', i);
            return
          }
        }
      },
      checkOnFavorites() {
        for(let i=0; i < this.$store.getters.retFavoritesList.length; i++) {
          if(this.$store.getters.retFavoritesList[i].id == this.filmId) {
            this.flag = !this.flag;
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>