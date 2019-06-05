<template>
  <div id="app">
     <router-view/>
     
  </div>
</template>

<script>

import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>

</style>
