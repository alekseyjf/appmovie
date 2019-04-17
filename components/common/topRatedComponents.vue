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
    created(){
      this.checkOnFavorites();
    },

    methods: {
      addFavorite() {
        this.$store.dispatch('setFavorite', this.filmId);

        this.flag = !this.flag;
        console.log('this.$store.getters.retFavoritesList', this.$store.getters.retFavoritesList);
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