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
          <div>{{desc}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <nuxt-link :to="'film/'+filmId">
          <v-btn flat color="orange">detail</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "top_rated",
    data() {
      return {
        imageUrl: 'https://image.tmdb.org/t/p/w500/'+this.isImage
      }
    },
    props: ['title', 'desc', 'filmId', 'isImage']
  }
</script>

<style scoped>

</style>