<template>
  <div class="content">
    <Header/>
    <HomeContent/>   
    <Footer/>
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  name: "HomePage",
  components: {
    HomeContent,
    Header,
    Footer
  }
  
}
</script>

<style>
   
   
</style>