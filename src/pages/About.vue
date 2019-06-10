<template>
  <div class = "About">
     <Header/>
     <div class="one">
       <div class="about-img">
         <div class="about-card-one"></div>
         <div class="about-card-two"></div>
       </div>
       <div class="about-text">
         <h1 class="about-head">О нас</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a reiciendis impedit repudiandae 
            amet harum tenetur debitis reprehenderit suscipit doloremque eligendi, libero, earum quo architecto, 
            aspernatur sint nam ipsa laudantium!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a reiciendis impedit repudiandae 
            amet harum tenetur debitis reprehenderit suscipit doloremque eligendi, libero, earum quo architecto, 
            aspernatur sint nam ipsa laudantium!aspernatur sint nam ipsa laudantium!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a reiciendis impedit repudiandae 
            amet harum tenetur debitis reprehenderit suscipit doloremque eligendi, libero, earum quo architecto, 
            aspernatur sint nam ipsa laudantium!
          </p>
          <p class="signature">С любовью, Ваш...</p>
       </div>
     </div>
     <Footer/>
    
       
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

.one {
  width: 100%;
  height: 48em;
  display: flex;
  justify-content: space-around;
}
.about-img {
  /* position: static; */
  width: 60%;
}
.about-text {
  width: 40%;
  margin-top: 7em;
}

.about-card-one {
  height: 18em;
  width: 25em;
  position: absolute;
  top: 8em;
  background-image: url("../images/homepage/1.jpg");
  background-repeat: cover;
  background-position: center ;
  opacity: 0.7;
}
.about-card-two {
  height: 22em;
  width: 20em;
  position: absolute;
  top: 20em;
  left: 12em;
  background-image: url("../images/userpage/11.jpg");
  background-repeat: cover;
  background-position: center;
  opacity: 1;
}
.about-head {
  text-align: center;
  padding: 0.5em;
  color:#8B0000;
  font-family: 'Neucha', cursive;
}
.about-text .signature {
  color:#8B0000;
  text-align: right;
  padding-top: 3em;
  font-size: 1.2em;
}
.about-text p {
  color:rgb(156, 6, 6);
  font-family: 'Neucha', cursive;
  text-align: justify;
  padding-right: 2em;
  font-size: 1em;

}
</style>
