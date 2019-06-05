<template>
  <div class = "free-content">
     <div class = "container bg-second">
        <h1 class="heading-paid">Платные мероприятия</h1>
        <div class="categories">
          <div class="category-one">
             <img class="category-img image" src="../img/paidpage/R1.png">   
          </div>
          <div class="category-two">
             <img class="category-img image" src="../img/paidpage/R5.png">   
          </div>
          <div class="category-three">
             <img class="category-img image" src="../img/paidpage/R7.png">  
          </div>
          <div class="category-four">
             <img class="category-img image" src="../img/paidpage/R3.png">  
          </div>
           <div class="category-five">
             <img class="category-img image" src="../img/paidpage/R2.png"> 
          </div>
          <div class="category-six">
             <img class="category-img image" src="../img/paidpage/R4.png"> 
          </div>
          <div class="category-seven">
             <img class="category-img image" src="../img/paidpage/R8.png">  
          </div>
          <div class="category-eight">
             <img class="category-img image" src="../img/paidpage/R9.png">  
          </div>
          <div class="category-nine">
             <img class="category-img image" src="../img/paidpage/R6.png">  
          </div>
        </div>
     </div>
     
  </div>
</template>

<script>


export default {
  name: 'PaidSection'
}
</script>

<style>
.heading-paid {
  text-align: center;
  padding-top: 0.5em;
  color:#0000FF	;
  font-family: 'Neucha', cursive;
}
.bg-second {
  background-image: url("../img/bg/bg2.png");
  position: absolute;
  height: 100%;
  left: 3em;
}
.free-content {
  height: 500px;
  background-image: url("../img/bg/freebg.jpg");
  background-position: center top;
  position: relative;
  
}
.category-img {
  height: 6em;
  width: 6em;
}

.category-one {
  position: absolute;
  left: 6em;
  top: 2em;
}
.category-two {
  position: absolute;
  left: 5em;
  top: 16em;
}
.category-three {
  position: absolute;
  left: 22em;
  top: 6em;
}
.category-four {
  position: absolute;
  left: 16em;
  top: 22em;
}
.category-six {
  position: absolute;
  left: 47em;
  top: 1.5em;
}
.category-five {
  position: absolute;
  left: 40em;
  top: 21.5em;
}
.category-seven {
  position: absolute;
  left: 38em;
  top: 8em;
}
.category-eight {
  position: absolute;
  left: 53em;
  top: 10em;
}
.category-nine {
  position: absolute;
  left: 27em;
  top: 15em;
}
.image {
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;

}
.image:hover {
  -webkit-transform: scale(1.4);
  -moz-transform: scale(1.4);
  -o-transform: scale(1.4);
}






</style>
