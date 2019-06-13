<template>
<div class="login-section">
  <form class="login-form" @submit.prevent="login">
    <div class="alert alert-danger" v-if="error">Неверные данные</div>
    <input v-model="name" type="text" placeholder="Ваше имя">
    <input v-model="password" type="password" placeholder="Ваш пароль">
    <!-- <router-link class = "link" to="/UserPage"> -->
      <button class="go" @click="login()">Войти</button>
    <!-- </router-link> -->
    <router-link class = "link" to="/HomePage"> 
      <button class="cancel">Отмена</button>
    </router-link>
  </form>
</div>
  
</template>

<script>

import { users } from '../user.data.js'

export default {

  name: "Login",
  data () {
    return {
      props: users,
      name: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
      let vm = this
      let user = this.props.find(function (user) {
        if (user.name === vm.name && user.password === vm.password) {
          localStorage.setItem('USER', JSON.stringify(user))
          return user
        } else {
          return false
        }
      })
      if (!user) {
        this.error = true
        // alert ("Error")
      } else {
        this.$router.push({
          name: 'UserPage'
        })
      }
      
      
      }
  }
}


</script>

<style>
.login-form {
  position: absolute;
  left: 23%;
  top: 6.3em;
}
.login-form input {
  display: block; 
  margin-bottom: 1em;
  width: 18em;
  height: 2.5em;
  padding-left: 0.5em;
  background-color: #D3D3D3;
  border: 1px solid #8B0000;
}
.login-form input::placeholder {
  color: #8B0000;
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
}

   
   
</style>