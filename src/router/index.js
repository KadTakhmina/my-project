import Vue from "vue";
import Router from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import FreePage from '@/pages/FreePage.vue'
import PaidPage from '@/pages/PaidPage.vue'
import IncomePage from '@/pages/IncomePage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'
import About from '@/pages/About.vue'
import Contacts from '@/pages/Contacts.vue'




Vue.use(Router);

export default new Router({
  routes: [ {

    path: '/HomePage',
    name: 'HomePage',
    component: HomePage

  } ,
  {

    path: '/FreePage',
    name: 'FreePage',
    component: FreePage

  } ,
  {

    path: '/PaidPage',
    name: 'PaidPage',
    component: PaidPage

  } ,
  {

    path: '/IncomePage',
    name: 'IncomePage',
    component: IncomePage

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

  } 
]
})