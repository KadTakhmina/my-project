<template>
    <div class="header-section">
      <div class="container flex-container">
        <ul class = "header-menu">
          <router-link class = "link" to="/FreePage">
            <li>Бесплатные</li>
          </router-link>
          <router-link class = "link" to="/PaidPage">
            <li>Платные</li>
          </router-link>
          <router-link class = "link" to="/IncomePage">
            <li>Ближайшие</li>
          </router-link>
        </ul>
        <router-link class = "link" to="/HomePage">
          <p class = "logo">Logo</p>
        </router-link>
         <ul class = "header-menu">
           <router-link class = "link" to="/About">
             <li>О нас</li>
           </router-link>
           <router-link class = "link" to="/Contacts">
             <li>Контакты</li>
           </router-link>
           <li>Войти</li> 
        </ul>
        
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HeaderSection'
  }
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
.header-section {
  height: 4em;
  padding: 1em;
  background-color: #DE8806;
  width: 100%;
}
.header-menu {
  list-style-type: none;
}
.header-menu li {
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
  display: inline;
  padding-right: 1.7em;
  color: #DCDCDC;
  
}
.logo {
  color: #EFEDEB;
  font-size: 1.5em;
}
.logo:hover {
  text-decoration: none;
}
.user {
  font-size: 1.5em;
}
.link:hover {
  text-decoration: none;
}
.header-menu li:hover {
  color: white;
  cursor: pointer;
}


</style>
