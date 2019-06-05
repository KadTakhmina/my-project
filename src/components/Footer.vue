<template>
  <div class = "footer">
    <div class = "container ">
       <a class="social-icons"><i class="fab fa-facebook-f" style="color:#556B2F"></i></a>
       <a class="social-icons"><i class="fab fa-twitter" style="color:#556B2F"></i></a>
       <a class="social-icons"><i class="fab fa-instagram" style="color:#556B2F"></i></a>
       <a class="social-icons"><i class="fab fa-skype" style="color:#556B2F"></i></a>
       <div class="info-box">
         <p class="about"> <router-link class = "link about" to="/About">О нас</router-link> || 
         <router-link class = "link about" to="/Contacts">Контакты</router-link></p>
         <p class="about"> 2019 </p>
       </div>
    </div>
     
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  width: 100%;
  height: 10em;
  background-color: #DCDCDC;
  text-align: center;
  padding-top: 1.2em;
}
.social-icons {
  font-size: 1.5em;
  padding-left: 1em;
}
.about {
  color: #556B2F;
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
  /* padding-top: 0.6em; */
}
.info-box {
  margin-left: 1.8em;
  margin-top: 0.8em;
}
.link:hover {
  text-decoration: none;
}



</style>
