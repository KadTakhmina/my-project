<template>
<div class="login-section">
  <form class="login-form">
    <input type="text" placeholder="Ваше имя">
    <input type="password" placeholder="Ваш пароль">
    <router-link class = "link" to="/UserPage">
      <button class="go">Войти</button>
    </router-link>
    <router-link class = "link" to="/HomePage"> 
      <button class="cancel">Отмена</button>
    </router-link>
  </form>
</div>
  
</template>

<script>


export default {
  name: "Login"
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