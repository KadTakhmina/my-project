<template>
  <div class = "FreePage">
     <HeaderSection/>
     <FreeSection/>   
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'
import FreeSection from '../components/FreeSection.vue'


export default {
  name: 'FreePage',
  components: {
    HeaderSection,
    FreeSection
  }
}
</script>

<style>

</style>
