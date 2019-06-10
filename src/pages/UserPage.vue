<template>
  <div class = "user-page">
    <Header/>
    <div class="user-content">
      <div class="user-card-one"></div>
      <div class="user-card-two">
        <div class="flex-user-event">
          <div class="user-event">
           <h3>Мои мероприятия</h3>
           <p>Что?</p>
           <p>Где?</p>
           <p>Когда?</p>
          
          </div>
          <div class="add-event">
            <h3>Добавить мероприятие</h3>
            <form style="padding-left: 2em; padding-top:1em">
              <input type="date" class="event-form"/>
                <select name="list" class="list event-form">
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
                <input class="event-form" type="text" name="theme" placeholder="Тема"/> 
                <input class="event-form" type="text" name="place" placeholder="Место"/>
                <input class="event-form" type="text" name="entrance" placeholder="Вход"/>
                <input class="event-form" type="text" name="org" placeholder="Организатор"/>
                <textarea class="descr event-form" type="text" name="desc" placeholder="Описание"/>
                <button class="go">Добавить</button>
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
  }
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

  
</style>
