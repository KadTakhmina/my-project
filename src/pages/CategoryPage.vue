<template>
  <div class = "category-page">
     <Header/>
     <CategorySection/>   
     <Footer/>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import CategorySection from '../components/CategorySection.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'CategoryPage',
  components: {
    Header,
    CategorySection,
    Footer
  }
}
</script>

<style>

</style>
