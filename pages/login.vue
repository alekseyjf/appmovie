<template>
  <div>
    <pre>
      name: Alex
      email: asd@asd.com
      pass: pass
    </pre>
    <form style="margin: 50px;" @submit.prevent="getLogin">
      <input type="text" name="user" v-model="user">
      <input type="text" name="email" v-model="email">
      <input type="password" name="pass" v-model="pass">
      <input type="submit" value="submit">
    </form>
    <p v-if="error">try again</p>
  </div>

</template>

<script>
  export default {
    name: "login",
    middleware: 'auth',
    data(){
      return{
        //token: '',

        user: 'Alex',
        email: 'asd@asd.com',
        pass: 'pass',
        error: null
      }
    },
    computed:{

    },
    methods: {
      getLogin(){
        let user = {
          user: this.user,
          email: this.email,
          pass: this.pass
        };
        this.$axios.post('http://localhost:8080/api/sign-in', user)
          .then((data) => {
            if(data.data.token){
              this.$store.commit('SET_AUTH', data.data.token)
              //localStorage.token = data.data.token;
              localStorage.setItem('token', data.data.token);
              $nuxt.$router.push('/')
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