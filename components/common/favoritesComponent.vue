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
          <v-btn  flat>detail</v-btn>
        </nuxt-link>
        <v-btn color="primary" @click="removeFavorite">add favorites</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'favoritesComponent',
    data() {
      return {
        imageUrl: 'https://image.tmdb.org/t/p/w500/'+this.isImage
      }
    },
    props: ['title', 'desc', 'filmId', 'isImage'],
    computed: {
      getList(){
        //console.log('store.getters.retFavoritesList', this.$store.getters.retFavoritesList);
        return this.$store.getters.retFavoritesList;
      }
    },
    created() {
    },
    methods: {
      removeFavorite() {
        // this.$store
      }
    }
  }
</script>