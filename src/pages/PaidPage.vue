<template>
  <div class = "PaidPage">
     <HeaderSection/>
     <PaidSection/>   
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'
import PaidSection from '../components/PaidSection.vue'


export default {
  name: 'PaidPage',
  components: {
    HeaderSection,
    PaidSection
  }
}
</script>

<style>

</style>
