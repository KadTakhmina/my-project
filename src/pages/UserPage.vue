<template>
  <div class = "user-page" >
    <Header/>
    <div class="user-content">
      <div class="user-card-one"></div>
      <div class="user-card-two">
        <div class="flex-user-event">
          <div class="user-event">
           <h3>Мои мероприятия</h3>
           <p v-bind="name" class="welcom">{{username}}, добро пожаловать!</p>
           <!-- <p v-bind="email" >{{email}}</p> -->
           <p @mouseover="getEvent()" class="goEvent">Мероприятия:</p>
             <p v-for="event in myevent" :key="event.id" class="myevent"><span>{{event.data}}:</span>{{event.title}}</p>
             <!-- <p v-bind="myevent">{{myevent.data}}</p> -->
          </div>

          <div class="add-event">
            <h3>Добавить мероприятие</h3>
            <form style="padding-left: 2em; padding-top:1em" @submit.prevent="newEvent">
              <input type="date" class="event-form" v-model = "date"/>
                <select name="list" class="list event-form" v-model = "event">
                  <option>Тип мероприятия</option>
                  <option>Выставка</option>
                  <option>Конференция</option>
                  <option>Концерт</option>
                  <option>Мастер класс</option>
                  <option>Презентация</option>
                  <option>Спектакль</option>
                  <option>Турнир</option>
                  <option>Фестиваль</option>
                  <option>Ярмарка</option>
                  <option>Другое</option>
                </select>
                <input class="event-form" type="text" name="theme" placeholder="Тема" v-model = "theme"/> 
                <input class="event-form" type="text" name="place" placeholder="Место" v-model = "place"/>
                <input class="event-form" type="text" name="entrance" placeholder="Вход" v-model = "enter"/>
                <input class="event-form" type="text" name="org" placeholder="Организатор" v-model = "org"/>
                <textarea class="descr event-form" type="text" name="desc" placeholder="Описание" v-model = "description"/>
                <button  @click="newEvent()" class="go">Добавить</button>
            </form>
          </div>
        </div>
      </div>
      <div class="user-card-three"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
  name: 'UserPage',
  components: {
    Header,
    Footer
  },
  data () {
    return {
        date: '',
        event: 'Тип мероприятия',
        theme: '',
        place: '',
        enter: '',
        org: '',
        description: '',
        events: [],
        username: '',
        email: '',
        myevent: {}
      }
  },
  
  methods: {
      newEvent() {
        this.events.push({
          'date': this.date,
          'event': this.event,
          'theme': this.theme,
          'place': this.place,
          'enter': this.enter,
          'org': this.org,
          'description': this.description,
        });
        let data = JSON.stringify(this.events);
        localStorage.setItem('events', data);
        // this.date = '',
        // this.event = 'Тип мероприятия',
        // this.theme = '',
        // this.place = '',
        // this.enter = '',
        // this.org = '',
        // this.description = ''
    },
    getEvent() {
      let events = JSON.parse(localStorage.getItem('EVENTS'))
      this.myevent = events
      console.log(this.myevent)

    }
      
        
    },
    mounted() {
      let user = JSON.parse(localStorage.getItem('USER')) 
      this.username = user.name
      this.email = user.email

      // let events = JSON.parse(localStorage.getItem('EVENTS'))
      // this.myevent = events
      // console.log(this.myevent)
    },
    
  }



</script>
  
<style>
  .user-content {
    width: 100%;
    height: 50em;
  }
  .user-card-one {
    width: 10%;
    height:  30em;
    position: absolute;
    top: 5em;
    background-image: url("../images/userpage/8.jpg");
    background-repeat: cover;
    background-position: center ;
  }
  .user-card-two {
    width: 75%;
    height:  34em;
    position: absolute;
    top: 10em;
    left: 7em;
    background-image: url("../images/homepage/9.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -10em;
  }
  .user-card-three {
    width: 14%;
    height:  24em;
    position: absolute;
    top: 15em;
    left: 58em;
    background-image: url("../images/userpage/6.jpg");
    background-repeat: cover;
    background-position: center bottom;
  }
  .flex-user-event {
    display: flex;
    justify-content: space-between;
  }
  .user-event {
    width: 45%;
    height: 34em;
    background:rgba(221, 219, 219, 0.9);
    margin-left: 1em;
    /* text-align: center; */
    padding: 1em;
    margin-top: 2em;
  }
  .add-event {
    margin-top: 2em;
    width: 50%;
    height: 34em;
    background:rgba(221, 219, 219, 0.9);
    margin-left: 1em;
    text-align: center;
    padding: 1em;
  }
  .flex-user-event h3 {
    font-family: 'Neucha', cursive;
    color: #8B0000;
  }
  .event-form {
    display: block;
    width: 20em;
    height: 2.5em;
    margin-bottom: 1em;
    background-color: rgb(189, 184, 184);
    border: 1px solid #8B0000;
    color: #8B0000;
    font-family: 'Neucha', cursive;
    padding-left: 0.5em;
  }
  .descr {
    height: 4em;
  }
  .event-form::placeholder {
  color: #8B0000;
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
}
.welcom {
  font-family: 'Neucha', cursive;
  font-size: 1.3em;
  text-align: center;
  margin-top: 1em;
}
.goEvent {
  font-family: 'Neucha', cursive;
  font-size: 1.2em;
  text-align: center;
  text-decoration: underline;
}
.myevent {
  /* font-family: 'Neucha', cursive; */
  font-size: 1em;
}
.myevent span {
  font-family: 'Neucha', cursive;
  padding-right: 1em;
  color: #8B0000;
  font-size: 1.2em;
}
  
</style>
