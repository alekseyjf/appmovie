<template>
  <div>
    <form style="margin: 50px;" @submit.prevent="signUp">
      <input type="text" name="name" v-model="name" placeholder="name">
      <input type="text" name="email" v-model="email" placeholder="email">
      <input type="password" name="pass" v-model="pass" placeholder="pass">
      <input type="submit" value="submit">
    </form>
    <p v-if="error">try again</p>
  </div>
</template>

<script>
  export default {
    name: "sign-up",
    middleware: 'auth',
    data(){
      return {
        name: '',
        email: '',
        pass: '',
        error: null
      }
    },
    created(){
      this.signUp();
    },
    methods:{
      signUp(){
        let user = {
          name: this.name,
          email: this.email,
          pass: this.pass,

        };

        this.$axios.post('http://localhost:8080/api/sign-up', user)
          .then((data)=>{
            console.log(data);
            if(data.data.user){
              this.$router.push('/sign-in');
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