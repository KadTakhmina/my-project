<template>
    <div class="header">
      <div class="container flex-container">
        <p class="head-logo" >Logo</p>
        <form>
          <input type="search" placeholder="Куда пойдем?"/>
        </form>
        <LoginForm/>  
      </div>
    </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Header',
  components: {
    LoginForm
  }
}
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
.header {
  height: 4em;
  padding: 1em;
  background-color:#8FBC8F;
  width: 100%;
}
input {
  background-color:#8FBC8F;
  width: 25em;
  height: 2.5em;
  border: 1px #6B8E23 solid;
  border-radius: 0.5em;
  padding: 0.5em;
}
input[type="search"]::-webkit-input-placeholder {
    color: #DCDCDC;
   } 
   input[type="search"]::-moz-placeholder {
    color: #DCDCDC;
   }
 
.head-logo {
  color: #DCDCDC;
  font-size: 1.6em;
}

</style>
