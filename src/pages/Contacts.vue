<template>
  <div class = "Contacts">
     <HeaderSection/>
     <div class="contact-content">
       <div class="container">
          <img class="contacts-img" src="../img/bg/contacts.png" alt="">
          <div class="contacts-info">
            <h1 class = "contact-head">Наши контакты</h1>
            <p class="num"><i class="fas fa-phone con" style="color:#DCDCDC"></i>0555123548</p>
            <p class="num"><i class="fab fa-whatsapp con" style="color:#DCDCDC"></i>0770256856</p>
            <p class="num"><i class="fas fa-envelope-open-text con" style="color:#DCDCDC"></i>info@gmail.com</p>
            <div class="icon-box">
              <a class="social-icons"><i class="fab fa-facebook-f" style="color:#DCDCDC"></i></a>
              <a class="social-icons"><i class="fab fa-twitter" style="color:#DCDCDC"></i></a>
              <a class="social-icons"><i class="fab fa-instagram" style="color:#DCDCDC"></i></a>
              <a class="social-icons"><i class="fab fa-skype" style="color:#DCDCDC"></i></a>
            </div>
          </div>
         
       </div>
     </div>
       
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'


export default {
  name: 'Contacts',
  components: {
    HeaderSection
  }
}
</script>

<style>

.contact-content {
  width: 100%;
  background-color: #DCDCDC;
  height: 28em;
  background-position: center top;
}
.contacts-img {
  height: 22em;
  width: 40em;
  position: absolute;
  top: 7em;
  left: 14em;
}
.contacts-info {
  position: relative;
  top: 5em;
  left: 22em;
}
.num {
  padding: 0;
  margin: 0;
  padding-bottom: 0.8em;
  padding-left: 1em;
  font-family: 'Neucha', cursive;
  font-size: 1.5em;
  color: #C4C3C0;
  letter-spacing: 0.1em;
} 
.con {
  padding-right: 1em;
  
}
.contact-head {
  margin-bottom: 0.5em;
  color:#C4C3C0;
  font-family: 'Neucha', cursive;
  letter-spacing: 0.1em;
} 
.icon-box {
  margin-top: 1em;
}


</style>
