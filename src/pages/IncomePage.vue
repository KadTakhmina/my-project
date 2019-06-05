<template>
  <div class = "IncomePage">
     <HeaderSection/>
     <IncomeSection/>   
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'
import IncomeSection from '../components/IncomeSection.vue'


export default {
  name: 'IncomePage',
  components: {
    HeaderSection,
    IncomeSection
  }
}
</script>

<style>

</style>
