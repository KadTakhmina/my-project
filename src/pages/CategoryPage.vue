<template>
  <div class = "category-page">
     <HeaderSection/>
     <CategorySection/>   
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'
import CategorySection from '../components/CategorySection.vue'


export default {
  name: 'CategoryPage',
  components: {
    HeaderSection,
    CategorySection
  }
}
</script>

<style>

</style>
