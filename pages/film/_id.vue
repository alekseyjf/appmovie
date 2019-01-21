<template>
  <div>
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
        error: ''
      }
    },
    created() {
      this.getBuyIdFilm(this.$route.params.id)
    },
    methods: {
      getBuyIdFilm(id) {
        return this.$axios(id, {params: {'api_key': '46af676602ac73b3c91128ec65fec3eb'}})
        .then(
            (data) => {
              this.film = data
            }
        )
        .catch(error => {

          this.error = error.response.data.status_message
        })
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