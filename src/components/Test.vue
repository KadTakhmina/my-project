<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../img/bg2.png">
        <div class = "container bg-second">
        <h1 class="heading">Образовательные</h1>
        <div class="categories">
          <div class="category-one">
             <img class="category-img" src="../img/R1.png">   
          </div>
          <div class="category-two">
             <img class="category-img" src="../img/R6.png">   
          </div>
          <div class="category-three">
             <img class="category-img" src="../img/R7.png">  
          </div>
          <div class="category-four">
             <img class="category-img" src="../img/R3.png">  
          </div>
           <div class="category-five">
             <img class="category-img" src="../img/R2.png"> 
          </div>
          <div class="category-six">
             <img class="category-img" src="../img/R1.png"> 
          </div>
          <div class="category-seven">
             <img class="category-img" src="../img/R8.png">  
          </div>
        </div>
     </div>
     
      </b-carousel-slide>
      </b-carousel>

     

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
