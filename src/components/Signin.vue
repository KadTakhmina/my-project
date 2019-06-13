<template>

<div class="signin-section">
  <form  class="sign-form" @submit.prevent="newUser()">
    <p v-if="reg">Заполните все данные</p>
    <input v-model="name" type="text" placeholder="Ваше имя">
    <input v-model="email" type="email" placeholder="Ваш e-mail">
    <input v-model="number" type="number" placeholder="Номер телефона">
    <input v-model="password" type="password" placeholder="Ваш пароль">
    <!-- <router-link class = "link" to="/UserPage"> -->
      <button class="go" @click="newUser()">Регистрация</button> 
    <!-- </router-link> -->
    <!-- <router-link class = "link" to="/HomePage"> -->
      <button class="cancel">Отмена</button>
    <!-- </router-link> -->
  </form>    
</div>  

</template>

<script>
// import { threadId } from 'worker_threads';


export default {
  name: "Signin" ,
  data () {
    return {
        reg: false,
        name: '',
        email: '',
        number: '',
        password: '',
        newuser: {}
    }
      
    },

    // mounted() {
    //   if (localStorage.name) {
    //     this.name = localStorage.name;
    //     }
    //   if (localStorage.email) {
    //     this.email = localStorage.email;
    //     }
    //   if (localStorage.number) {
    //     this.number = localStorage.number;
    //     }
    //   if (localStorage.password) {
    //     this.password = localStorage.password;
    //     }
    //   },
  
     methods: {
      newUser() {
        this.newuser = {
          'name': this.name,
          'email': this.email,
          'number': this.number,
          'password': this.password
        };
        if(this.name==='' || this.email===''  || this.number===''  || this.password==='' ) {
          this.reg = true
           
        } else {
            localStorage.setItem('USER', JSON.stringify(this.newuser))
            this.$router.push({
            name: 'UserPage'
          })
        }
        
        
        
        


        // localStorage.name = this.name;
        // localStorage.email = this.email;
        // localStorage.number = this.number;
        // localStorage.password = this.password;
        }
    }
}
  
</script>

<style>
.sign-form {
  position: absolute;
  left: 22%;
  top: 6.3em;
}
.sign-form input {
  display: block; 
  margin-bottom: 1em;
  width: 18em;
  height: 2.5em;
  padding-left: 0.5em;
  background-color: #D3D3D3;
  border: 1px solid #8B0000;
}
.sign-form input::placeholder {
  color: #8B0000;
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
}

</style>