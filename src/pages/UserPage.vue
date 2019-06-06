<template>
  <div class = "user-page">
     <HeaderSection/>
     <div class="user-content">
        <div class="container flex-bg">
          <div class="my-event">
            <p class="event-heading">Мои мероприятия</p>
            <input class="event-date" type="date"/>
          </div>
          <div class="add-event">
            <p class="event-heading">Добавить мероприятие</p>
            <form>
              <label for="list" >Дата:</label>
              <input type="date" class="event-form"/>
              <div>
                <label for="list">Тип:</label>
                <select name="list" class="">
                  <option>Выберите из списка</option>
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
              </div>
              <div>
                <label for="theme">Тема:</label>
                <input class="event-form" type="text" name="theme"/> 
              </div>
              <div>
                <label  for="place" >Место:</label>
                <input class="event-form" type="text" name="place"/>
              </div>
              <div>
                <label for="entrance">Вход:</label>
                <input class="event-form" type="text" name="entrance"/>
              </div>
              <div>
                <label for="desc" >Описание:</label>
                <textarea  type="text" name="desc"/>
              </div>
              <button>Добавить</button>
            </form>
          </div>
        </div>
     </div>

     
       
  </div>
</template>

<script>

import HeaderSection from '../components/HeaderSection.vue'

export default {
  name: 'UserPage',
  components: {
    HeaderSection
  }
}
</script>

<style>
  .user-content {
     width: 100%;
     height: 100%;
     background-image: url("../img/bg/freebg.jpg");
     background-position: center top;
     position: relative;
  }
  .flex-bg {
    display: flex;
    justify-content: space-between;
    padding-top: 3em;
  }
  .my-event {
    height: 38em;
    width: 27em;
    background-image: url("../img/bg/contacts.png");
    background-size: cover;
  }
  .add-event {
    height: 38em;
    width: 27em;
    background-image: url("../img/bg/tip.png");
    background-size: cover;
  }
  .event-heading {
    padding-top: 2em;
    text-align: center;
    font-family: 'Neucha', cursive;
    font-size: 1.5em;
    color: #C4C3C0;
  }
  .event-date {
    width: 10em;
    margin-left: 7em;
    background-color: #C4C3C0;
  }
  .event-form {
    width: 15em;
    border: none;
    background-color: #C4C3C0;
  }
  label {
    width: 7em;
    padding: 1em;
    padding-left: 2em;
    
  }

</style>
