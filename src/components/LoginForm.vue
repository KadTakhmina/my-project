<template>
  <div class="login-content">
    <div class="login-box">
      <transition name="login">
        <Login v-if="displayLogin"/>
      </transition>
      <transition name="signin">
        <Signin v-if="displaySignin"/>
      </transition>
      <div class="flex-login">
        <h3 @click="showLogin()">Вход</h3>
        <h3>|</h3>
        <h3 @click="showSignin()" class="sign">Регистрация</h3>
      </div>
      
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Signin from "../components/Signin.vue";

  export default {
    name: "LoginForm",
    components: {
    Login,
    Signin
  },
  data() {
    return {
      displayLogin: true,
      displaySignin: false
    };
  },
  methods: {
    showLogin() {
      this.displayLogin = true;
      this.displaySignin = false;
    },
    showSignin() {
      this.displayLogin = false;
      this.displaySignin = true;
    },
  }
  }
 
  
</script>

<style>
.login-content {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40em;
  background-image: url("../images/homepage/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  z-index: -20em;
}
.login-box {
  height: 25em;
  width: 50%;
  background-color: rgba(221, 219, 219, 0.8);
  position: fixed;
  top: 15%;
  left: 25%;
}
.flex-login {
  display: flex;
  justify-content: center;
  padding: 2em;
}
.flex-login h3 {
  margin-right: 0.4em;
  color: #8B0000;
  font-family: 'Neucha', cursive;
}
.flex-login h3:hover {
  cursor: pointer;
  text-decoration: underline;
}
.go {
  background-color: #8B0000;
  border: none;
  height: 2.5em;
  color: #D3D3D3;
  width: 8em;
}
.cancel {
  background-color: #D3D3D3;
  border: none;
  height: 2.5em;
  color: #8B0000;
  width: 8em;
  margin-left: 1em;

}

/* login style */
.login-enter {
  transform: translateX(-200px);
  opacity: 0;
}
.login-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.login-leave-active,
.login-leave-to {
  opacity: 0;
}

/* signin style */
.signin-enter {
  transform: translateX(200px);
  opacity: 0;
}
.signin-enter-to {
  transform: translateX(0px);
}
.signin-enter-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.signin-leave-active,
.signin-leave-to {
  opacity: 0;
}

    
    
</style>
