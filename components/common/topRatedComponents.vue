<template>
  <v-flex xs12>
    <v-card>
      <nuxt-link :to="'film/'+filmId">
        <v-img
            :src="imageUrl"
            aspect-ratio="2.75"
        ></v-img>
      </nuxt-link>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-12">{{title}}</h3>
          <div>{{desc}}</div>
        </div>
      </v-card-title>

      <v-card-actions justify-center row>
        <nuxt-link :to="'film/'+filmId">
          <v-btn flat>detail</v-btn>
        </nuxt-link>
        <v-btn v-if="flag" color="primary" @click="addFavorite">add favorites</v-btn>
        <v-btn v-else color="primary" @click="removeFavorite">remove favorites</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "top_rated",
    data() {
      return {
        imageUrl: 'https://image.tmdb.org/t/p/w500/'+this.isImage,
        flag: true
      }
    },
    props: ['title', 'desc', 'filmId', 'isImage'],
    methods: {
      addFavorite() {
        console.log(this.filmId);
        this.$store.dispatch('setFavorite', this.filmId)
        console.log('this.$store.getters.retFavoritesList', this.$store.getters.retFavoritesList);
        this.flag = !this.flag;
      },
      removeFavorite() {
        console.log(this.filmId);
        console.log(this.$store.getters.retFavoritesList.length);
        this.flag = !this.flag;
        for(let i=0; i < this.$store.getters.retFavoritesList.length; i++) {
          console.log(this.$store.getters.retFavoritesList[i],  this.filmId);
          if(this.$store.getters.retFavoritesList[i] == this.filmId) {

            console.log('this.filmId', this.filmId);
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>