<template>
     <div class="dropdown">
          <a class="user"><i class="fas fa-user-secret" style="color:#DCDCDC"></i></a>
          <div class="dropdown-content">
            <b-span @click="$bvModal.show('modal-scoped')" class="log">Войти</b-span>
            <b-modal id="modal-scoped" title="Вход">
              <label>Имя пользователя</label>
              <input required v-model="username" type="text" placeholder="Snoopy"/>
              <br>
              <br>
              <label>Пароль</label>
              <br>
              <input required v-model="password" type="password" placeholder="Password"/>
              <template slot="modal-footer" slot-scope="{ ok, cancel}">
                <b-button size="sm" variant="success" @click="ok()">
                  Войти
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Отмена
                </b-button>
              </template>
            </b-modal>
            <b-span v-b-modal.modal-multi-1 class="log">Регистрация</b-span>
            <b-modal id="modal-multi-1" title="Регистрация" ok-only no-stacking>
              <label>Имя пользователя</label>
              <input required v-model="username" type="text" placeholder="Snoopy"/>
              <label>Номер телефона пользователя</label>
              <input required v-model="username" type="text" placeholder="Snoopy"/>
              <br>
              <label>Пароль</label>
              <br>
              <input required v-model="password" type="password" placeholder="Password"/>
            </b-modal>
          </div>
        </div>
</template>

<script>
  export default {
    name: "LoginForm"
  }
</script>

<style>
    .user {
    font-size: 1.5em;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      border-radius: 1em;
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      right: 0;
      width: 8em;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .dropdown-content .log {
      color: #6B8E23;
      padding: 12px 14px;
      display: block;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown-content .log:hover {
      background-color: #ddd;
      border-radius: 1em;
    }

</style>
