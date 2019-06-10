<template>
  <div class = "Contacts">
    <Header/>
    <div class="contact-box">
      <div class="contact-content"> </div>
      <div class="contact-card-one"></div>
      <div class="contact-card-two"></div>
      <div class="contact-card-three">
        <div class="ex">
          <h3>Наши контакты</h3>
          <p class="num"><i class="fas fa-phone con" ></i>0555-12-35-48</p>
          <p class="num"><i class="fab fa-whatsapp con" ></i>0770-25-68-56</p>
          <p class="num"><i class="fab fa-telegram-plane con"></i>0770-25-68-56</p>
        </div>
      </div>
      <div class="contact-card-four">
        <div class="cover">
          <h3>Пишите нам письма</h3>
          <p class="num"><i class="fas fa-envelope-open-text con" style="color: #525151;"></i>info@gmail.com</p>
        </div>
      </div>
      <div class="contact-card-five"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Contacts',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

.contact-box{
  margin-top: 8em;
  width: 100%;
  height: 38em;
}

.contact-content {
  width: 80%;
  height: 28em;
  /* border: 1px solid #8B0000; */
  border-top: none;
  position: absolute;
  left: 7em;
  
}
.contact-card-one {
  width: 15em;
  height: 25em;
  position: absolute;
  top: 13em;
  left: 3em;
  background-image: url("../images/userpage/3.jpg");
  background-repeat: cover;
  background-position: center;
}
.contact-card-two {
  width: 25em;
  height: 15em;
  position: absolute;
  top: 10em;
  left: 18.5em;
  background-image: url("../images/userpage/10.jpg");
  background-repeat: cover;
  background-position: center bottom;
}
.ex {
  background:rgba(221, 219, 219, 0.9);
  width: 20em;
  height: 14em;
  padding-left: 2em;
}
.contact-card-three {
  background-image: url("../images/homepage/2.jpg");
  background-repeat: cover;
  background-position: center bottom;
  /* background:rgba(221, 219, 219, 0.2); */
  width: 20em;
  height: 14em;
  position: absolute;
  top: 8em;
  left: 44em;
  
}
.contact-card-four {
  width: 25em;
  height: 9em;
  position: absolute;
  top: 25.5em;
  left: 18.5em;
  background-image: url("../images/userpage/7.jpg");
  background-repeat: cover;
  background-position: center ;

}
.cover {
  width: 25em;
  height: 9em;
  background:rgba(221, 219, 219, 0.7);
  

}
.contact-card-five {
  width: 23.3em;
  height: 19em;
  position: absolute;
  top: 22.5em;
  left: 44em;
  background-image: url("../images/userpage/11.jpg");
  background-repeat: cover;
  background-position: center ;
}
.num {
  font-size: 1.5em;
  color: rgb(156, 4, 4);
  font-family:'Neucha', cursive;
  padding-left: 1em;
}
.con {
  padding-right: 1em;
  color: #8B0000;
}
.contact-card-three h3 {
  color: #8B0000;
  margin-bottom: 1em;
  padding-left: 0.5em;
}
.contact-card-four h3 {
  color: #525151;
  padding-top: 1em;
  margin-bottom: 1em;
  padding-left: 2em;
}
.contact-card-four .num {
  margin-left: 3em;
  color: #525151;
}

</style>
