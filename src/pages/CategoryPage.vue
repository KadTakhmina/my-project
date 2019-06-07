<template>
  <div class = "category-page">
     <Header/>
     <CategorySection/>   
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import CategorySection from '../components/CategorySection.vue'


export default {
  name: 'CategoryPage',
  components: {
    Header,
    CategorySection
  }
}
</script>

<style>

</style>
