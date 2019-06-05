<template>
  <div class = "category-section">
    <div class="container">
      <div class="event-card" v-for="event in events" :key="event.id">
        <img v-bind:src="event.url" alt="" class="event-img">
        <div class="event-info">
          <p>Тема:<span class="variable">{{event.title}}</span></p>
          <p>Место:<span class="variable">{{event.location}}</span></p>
          <p>Дата:<span class="variable">{{event.data}}</span></p>
        </div>
        <div class="detail-block">
          <p>{{event.description}}</p>
        </div>
      </div>
      
    </div>
       
          
  </div>
</template>

<script>
 import axios from 'axios'

  export default {
    name: 'CategorySection',
    data() {
      return {
        events: []
      }
    },
    mounted() {
      axios.get('https://api.myjson.com/bins/m4c23').then((response) => {
          this.events = response.data
 
    })
    
  }
  }
</script>


<style>
 .category-section {
   width: 100%;
   height: 100%;
   background-color: #F0F0EF;
   padding-top: 2em;
   
  }
  .event-card {
    width: 100%;
    height: 17em;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2em;
    margin-right: 2em;
    padding: 1em;
    box-shadow:  3px 3px 5px 6px #ccc;
    position: relative;
  }
  .event-img {
    width: 40%;
    height: 15em;
  }
  .event-info {
    width: 55%;
    color:#053603;
    margin-top: 2em;
    
  }
  .variable {
    font-family: 'Neucha', cursive;
    color: #008000;
    margin-left: 0.5em;

  }
  .detail-block {
    position:absolute;
    width: 43%;
    left:0;
    bottom:0;
    right:0;
    top:0;
    background:rgba(29, 87, 6, 0.9);
    padding: 15px;
    display: none;
    color: #C4C3C0;
    text-align: justify;
    font-family: 'Neucha', cursive;

  }
  .event-card:hover .detail-block {
    display: block;

  }

</style>
