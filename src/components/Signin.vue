<template>
<div class="signin-section">
  <form  class="sign-form">
    <input type="text" placeholder="Ваше имя">
    <input type="email" placeholder="Ваш e-mail">
    <input type="number" placeholder="Номер телефона">
    <input type="password" placeholder="Ваш пароль">
    <router-link class = "link" to="/UserPage">
      <button class="go">Регистрация</button> 
    </router-link>
    <router-link class = "link" to="/HomePage">
      <button class="cancel">Отмена</button>
    </router-link>
  </form>
      
</div>
  
</template>

<script>


export default {
  name: "Signin" 
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