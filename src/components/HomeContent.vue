<template>
   <div class = "home-content">
     <div class="one"></div>
     <div class="two">
       <div class="test">
         <p>Окунись в мир </p>
         <span>классической музыки</span>
       </div>
      </div>
     <div class="three"></div>
     <div class="four">
       <div class="outer">
         <div class="inner">
           <p>Пойдем на <span>КОНЦЕРТ?</span></p>
           
         </div>
       </div>
     </div>
     <div class="five"></div>
     <div class="six"></div>
     <div class="seven">
       <div class="outer-one">
         <div class="inner-one">
           <router-link class = "link" to="/About">
             <p>О нас</p>
           </router-link>
         </div>
       </div>
     </div>
     <div class="eight">
       <div class="test">
         <h1>test</h1>
       </div>
     </div>
     <div class="nine"></div>
     
     
   </div>
    
</template>

<script>
export default {
  name: "HomeContent"
  
}
</script>

<style>
.home-content {
  width: 100%;
  height: 53em;
 
}
.home-content .one {
  width: 9em;
  height: 27em;
  background-image: url("../images/homepage/4.jpg");
  background-repeat: cover;
  background-position: center top;
  position: absolute;
  top: 5em;
}
.home-content .two {
  width: 20em;
  height: 18em;
  background-image: url("../images/homepage/5.jpg");
  background-repeat: cover;
  background-position: center;
  position: absolute;
  top: 10em;
  left: 9.3em;
}
.home-content .three {
  width: 9em;
  height: 18em;
  background-image: url("../images/homepage/9.jpg");
  background-repeat: cover;
  background-position: center;
  position: absolute;
  top: 10em;
  left: 29.5em;
}
.home-content .four {
  width: 20em;
  height: 27em;
  background-image: url("../images/homepage/12.jpg");
  background-repeat: cover;
  background-position: center top;
  position: absolute;
  top: 14em;
  left: 38.7em;
}
.home-content .five {
  width: 8.4em;
  height: 27.5em;
  background-image: url("../images/homepage/11.jpg");
  background-repeat: cover; 
  position: absolute;
  top: 14.7em;
  left: 59em;
}
.home-content .six {
  width: 29.1em;
  height: 5em;
  background-image: url("../images/homepage/13.jpg");
  background-repeat: cover;
  background-position: center;
  position: absolute;
  top: 28.3em;
  left: 9.3em;
}
.home-content .seven {
  width: 13em;
  height: 15em;
  background-image: url("../images/homepage/3.jpg");
  background-repeat: cover;
  background-position: center;
  position: absolute;
  top: 33.6em;
  left: 9.3em;
}
.home-content .eight {
  width: 15.6em;
  height: 15em;
   background-image: url("../images/homepage/1.jpg");
  background-repeat: cover;
  background-position: center bottom;
  position: absolute;
  top: 33.6em;
  left: 22.6em;
}
.home-content .nine {
  width: 20em;
  height: 6em;
  background-image: url("../images/homepage/8.jpg");
  background-repeat: cover;
  background-position: center ;
  position: absolute;
  top: 41.3em;
  left: 38.7em;
}
.test {
  position:absolute;
  width: 100%;
  left:0;
  bottom:0;
  right:0;
  top:0;
  background:rgba(221, 219, 219, 0.8);
  padding: 15px;
  display: none;
  text-align: center;
    /* font-family: 'Neucha', cursive; */
}
.two:hover .test {
  display: block;

}
.eight:hover .test {
  display: block;

}
.outer {
  width: 12em;
  height: 13em;
  margin-top: 8em;
  margin-left: 4em;
  padding: 0.3em;
  background-color: #D3D3D3;
  opacity: 0.5;
}
.inner {
  width: 11.4em;
  height: 12.3em;
  border: 1px solid #696969;
  text-align: center;
    
}
.outer-one {
  width: 10em;
  height: 6em;
  margin-top: 3.8em;
  margin-left: 1.8em;
  padding: 0.3em;
  background:rgba(221, 219, 219, 0.5);
}
.inner-one {
  width: 9.4em;
  height: 5.3em;
  border: 1px solid #696969;
  text-align: center;
    
}
.inner p {
  font-size: 1.3em;
  padding-top: 2em;
  letter-spacing: 0.1em;
}
.inner span {
  font-size: 1.5em;
  letter-spacing: 0;
}
.inner-one p {
  font-size: 2em;
  color: #8B0000;
}
.test p {
  font-size: 1.8em;
  letter-spacing: 0.1em;
  padding-top: 1.3em;
  color: rgb(109, 108, 108);
  font-family: 'Neucha', cursive;
  
}
.test span {
  font-size: 2.9em;
  font-family: 'Neucha', cursive;
  color: rgb(109, 108, 108);
  letter-spacing: 0.1em;
}
  
</style>