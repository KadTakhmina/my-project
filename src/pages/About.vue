<template>
  <div class = "About">
     <HeaderSection/>
     <div class="about-content">
       <div class="container">
         <h1 class="about-head">О нас</h1>
         <p class="about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a reiciendis impedit repudiandae 
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
       
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'


export default {
  name: 'About',
  components: {
    HeaderSection
  }
}
</script>

<style>

.about-content {
  background-color:#6B8E23;
  height: 28em;
}
.about-head {
  text-align: center;
  padding: 0.5em;
  padding-top: 1em;
  color:#DBDBDB;
  font-family: 'Neucha', cursive;
}
.about-text{
  text-align: justify;
  font-family: 'Neucha', cursive;
  color: #DCDCDC;
}
.signature {
  color:#DBDBDB;
  text-align: right;
  padding-top: 3em;

}
</style>
