<template>
  <div>

  <pre>{{genres}}</pre>
  <div>ID: {{$route.params.genreId}}</div>
    <v-alert
        :value="this.error"
        type="error"
    >{{error}}</v-alert>
  </div>


</template>

<script>
  export default {
    name: "_genreId",
    data(){
      return{
        genres: '',
        error: ''
      }
    },
    methods:{
      getGenres(id){
        return this.$axios(id, {params: {'api_key': '46af676602ac73b3c91128ec65fec3eb'}})
        .then(
            (data) => {
              this.genres = data.data
            }
        )
        .catch( error => {
          this.error = error
        })
      }
    },
    created(){
      this.getGenres(this.$route.params.genreId);
    }
  }
</script>

<style scoped>

</style>