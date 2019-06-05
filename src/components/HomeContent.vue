<template>
   <div class = "bg">
     <b-container class = "wrapper-block">
      <section class = "left">
        <div class = "block-free">
          <router-link class = "link" to="/FreePage">
            <p class="free">Бесплатные</p>
          </router-link>
        </div>
        <div class = "block-income">
          <router-link class = "link" to="/IncomePage">
            <p class="income">Ближайшие</p>
          </router-link>
        </div>
        <div class = "block-paid">
          <router-link class = "link" to="/PaidPage">
            <p class="paid">Платные</p>
          </router-link>
        </div>
      </section>
      <section class = "rigth">
        <img class = "letter" src="../img/bg/G.png" >
        <img class = "letter" src="../img/bg/O.png" >
        <img class = "letter" src="../img/bg/que.png" >
      </section>
        
    </b-container> 
   </div>
    
</template>

<script>
export default {
  name: "HomeContent"
  
}
</script>

<style>
.bg {
  width: 100%;
  height: 100%;
  background-color: #8FBC8F;
  z-index: -1000;
  
  
}
.wrapper-block {
  height: 100%;
  display: flex;
  width: 100%;
  padding-top: 3em;
}
.left {
  height: 100%;
  margin: 0;
  width: 75%;
}
.rigth {
  margin: 0;
  width: 25%;
  
}
.block-free {
  width: 10em;
  height: 10em;
  position: absolute;
  top: 14em;
  background-image: url("../img/bg/casestudies_bg.png");
  background-size: cover;
} 
.block-income {
  width: 10em;
  height: 10em;
  position: absolute;
  top: 8em;
  left: 23em;
  background-image: url("../img/bg/resources_bg.png");
  background-size: cover;
} 
.block-paid {
  width: 10em;
  height: 10em;
  position: absolute;
  top: 19em;
  left: 39em;
  background-image: url("../img/bg/casestudies_bg.png");
  background-size: cover;
} 
.free, .income, .paid {
  position: absolute;
  top: 2.2em;
  left: 1.4em;
  font-size: 1.5em;
  font-family: 'Neucha', cursive;
}
.free:hover {
  transform: rotateX(0deg) rotateY(360deg);
  transition: 1000ms ease 0ms
}
.paid:hover {
  transform: rotateX(0deg) rotateY(360deg);
  transition: 1000ms ease 0ms
}
.income:hover {
  transform: rotateX(0deg) rotateY(360deg);
  transition: 1000ms ease 0ms
}
.free, .paid{
  color: #D3D3D3;
}
.income {
  color: #6B8E23;
}
.letter {
  
  animation: letter 3s ease-out infinite;

}
@keyframes letter {
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(-0.75em);
  }
  20% {
    opacity: 1;
  }
  89% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(-1000em);
  }
}

  
</style>