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
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "FilmCard",
    props: ['body', 'title', 'isImage', 'filmId'],
    data(){
      return{
        imageUrl: 'https://image.tmdb.org/t/p/w500/'+this.isImage
      }
    },
    /*comuted: {
      getImage(){
        return ''
      }
    }*/
  }
</script>

<style scoped>

</style>