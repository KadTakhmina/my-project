<template>
  <div class = "category-section">
    <!-- <div style="text-align:center">
       <input type="date">
    </div> -->
    
    <div class="container">
      <div class="event-card" v-for="event in events" :key="event.id">
        <img v-bind:src="event.url" alt="" class="event-img">
        <div class="container-info">
         
            <div class="event-info">
              <p>Тема:<span class="variable">{{event.title}}</span></p>
              <p>Место:<span class="variable">{{event.location}}</span></p>
              <p>Дата:<span class="variable">{{event.data}}</span></p>
              <p>Вход:<span class="variable">Свободный</span></p>
              
            </div>
            <div class="detail-block">
              <p>{{event.description}}</p>
              <button class="add" @click="done()">Добавить</button>
            </div>
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
    methods: {
      
      done: function() {
        
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
   background-color: white;
   /* padding-top: 2em; */
   margin-top: 8em;
  }
  .event-card {
    width: 100%;
    height: 25em;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2em;
    margin-right: 2em;
    margin-top: 1em;
    /* box-shadow:  3px 3px 5px 6px #F5F5F5; */
    position: relative;
    background-color: #ECECEC;
  }
  .event-img {
    width: 100%;
    height: 100%;
    /* position: absolute; */
  }
  .event-info {
    width: 100%;
    color:#053603;
    margin-top: 1em;
    text-align: center;
    
  }
  .variable {
    font-family: 'Neucha', cursive;
    color:#8B0000;
    margin-left: 0.5em;

  }
  .detail-block {
    position:absolute;
    width: 100%;
    left:0;
    bottom:0;
    right:0;
    top:0;
    background:#8B0000;
    padding: 15px;
    display: none;
    color: #C4C3C0;
    text-align: justify;
    font-family: 'Neucha', cursive;

  }
  .container-info:hover .detail-block {
    display: block;

  }
.add {
    /* float: right; */
    background-color: #C4C3C0;
    border: none;
    color: #8B0000;
    border-radius: 1em;
    height: 2em;
    width: 6em;
    font-family: 'Neucha', cursive;
    
  }
.container-info {
  width: 85%;
  height: 75%;
  /* padding: 0.3em; */
  background:rgba(226, 224, 224, 0.8);
  position: absolute;
  top: 3.5em;
}
</style>
