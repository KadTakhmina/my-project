import Vue from "vue"
import Router from "vue-router"
import HomePage from '@/pages/HomePage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'
import About from '@/pages/About.vue'
import Contacts from '@/pages/Contacts.vue'
import UserPage from '@/pages/UserPage.vue'
import LoginPage from '@/pages/LoginPage.vue'


Vue.use(Router)

export default new Router({
  routes: [ {

    path: '/HomePage',
    name: 'HomePage',
    component: HomePage

  } ,
  {

    path: '/CategoryPage',
    name: 'CategoryPage',
    component: CategoryPage

  } ,
  {

    path: '/About',
    name: 'About',
    component: About

  } ,
  {

    path: '/Contacts',
    name: 'Contacts',
    component: Contacts

  } ,
  {

    path: '/UserPage',
    name: 'UserPage',
    component: UserPage

  } ,
  {

    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage

  } 
  
]
})