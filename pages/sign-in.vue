<template>
  <div>
    <pre>
      default user
      name: Alex
      email: asd@asd.com
      pass: pass
    </pre>
    <form style="margin: 50px;" @submit.prevent="getLogin">
      <input type="text" name="name" v-model="name">
      <input type="text" name="email" v-model="email">
      <input type="password" name="pass" v-model="pass">
      <input type="submit" value="submit">
    </form>
    <p v-if="error">try again</p>
  </div>

</template>

<script>
  export default {
    name: "sign-in",
    middleware: 'auth',
    data(){
      return{
        //token: '',

        name: '',
        email: '',
        pass: '',
        error: null
      }
    },
    computed:{

    },
    methods: {
      getLogin(){
        let user = {
          name: this.name,
          email: this.email,
          pass: this.pass
        };
        this.$axios.post('http://localhost:8080/api/sign-in', user)
          .then((data) => {
            if(data.data.token){
              this.$store.commit('SET_TOKEN', data.data.token)
              this.$router.push('/')
            } else {
              this.error = true
            }
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>

<style scoped>
input[type="text"],
input[type="password"]{
  background-color: #fff;
  display: block;
  margin-bottom: 10px;
  color: #47494e;
}
</style>