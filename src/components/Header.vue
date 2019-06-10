<template>
    <div class="fixed-header">
      <div class="container flex-container">
        <ul class="header-menu">
          <li class="ls free"> 
            <a>БЕСПЛАТНЫЕ</a>
             <ul class="free-dropdown">
               <i class="fas fa-long-arrow-alt-down arr"></i>
                <li class="row">
                  <ul class="mega-col">
                    <router-link class = "link" to="/CategoryPage">
                      <li>Концерты</li>
                    </router-link> 
                    <li>Выставки</li>
                    <li>Кастинги</li>
                  </ul>
                  <ul class="mega-col">
                    <li>Ярмарки</li>
                    <li>Конференции</li>
                    <li>Турниры</li>
                  </ul>
                  <ul class="mega-col">
                    <li>Спектакли</li>
                    <li>Фестивали</li>
                    <li>Другие</li>
                  </ul>
                </li>
              </ul>        
            </li>
            <li class="slash">|</li>
          <li class="ls paid">
            <a>ПЛАТНЫЕ</a>
            <ul class="paid-dropdown">
              <li class="row">
                <ul class="mega-col">
                  <li>Концерты</li>
                  <li>Выставки</li>
                  <li>Кастинги</li>
                </ul>
                <ul class="mega-col">
                  <li>Ярмарки</li>
                  <li>Конференции</li>
                  <li>Турниры</li>
                </ul>
                <ul class="mega-col">
                  <li>Спектакли</li>
                  <li>Фестивали</li>
                  <li>Другие</li>
                </ul>
              </li>
            </ul>     
          </li>
          <li class="slash">|</li>
          <router-link class = "link" to="/CategoryPage">
            <li class="ls">БЛИЖАЙШИЕ</li>
            <li class="slash">|</li>
          </router-link>
        </ul>
          <router-link class = "link" to="/HomePage">
            <p class = "logo">Logo</p>
          </router-link>
        <ul class="header-menu">
            <li class="slash">|</li>
            <router-link class = "link" to="/About">
             <li class="ls">О НАС</li>
            </router-link>
            <li class="slash">|</li>
            <router-link class = "link" to="/Contacts">
             <li class="ls">КОНТАКТЫ</li>
            </router-link>
            <li class="slash">|</li>
            <router-link class = "link" to="/LoginPage">
             <li class="ls">ВОЙТИ</li> 
            </router-link>
        </ul>
        
      </div>
    </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style>
.arr {
  position: absolute;
  top: 0.5em;
  left: 1em;
  font-size: 1em;
}

.fixed-header {
  height: 5em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 163;
  background-color: white;
}
.flex-container {
  display: flex;
  justify-content: space-around;
}

.header-menu {
  margin-top: 0.2em;
  list-style-type: none;
}
.header-menu .ls {
  font-family: 'Neucha', cursive;
  font-size: 1em;
  display: inline;
  padding-right: 1.3em;
  color: #D5D3D3;
}
.logo {
  margin-top: 0.3em;
  color: #A9A9A9;
  font-size: 2em;
  padding-right: 0.8em;
  padding-left: 0.8em;
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
.header-menu .ls:hover {
  color:#8B0000;
  cursor: pointer;
}

/* first dropdown-menu */
.free-dropdown {
  width: 20em;
  height: 6em;
  position:absolute;
  left:10em;
  top:2.5em;
  padding: 15px;
  display: none;
  color: #8B0000;
  margin: 0;
  padding-left: 0;
}
.paid-dropdown {
  width: 20em;
  height: 6em;
  position:absolute;
  left:12em;
  top:2.5em;
  padding: 15px;
  display: none;
  color: #8B0000;
  margin: 0;
  padding-left: 0;
}
.free-dropdown li, .paid-dropdown li {
  list-style-type: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  padding-block-start: 3px;
  margin-bottom: 2px;
  
}
.free-dropdown li ul li:hover,
.paid-dropdown li ul li:hover {
  color: #D3D3D3;
  cursor: pointer;
  text-decoration-line: underline;
}
.free:hover .free-dropdown,
.paid:hover .paid-dropdown {
  display: block;
}
.link {
  text-decoration: none;
  color: inherit;
}
.slash {
  display: inline;
  font-size: 2.5em;
  padding-top: 0;
  margin-top: 0;
  padding-right: 0.7em;
  font-family: 'Times New Roman', Times, serif;
  color: #ECE9E9;
  font-stretch: ultra-condensed;

}

</style>
