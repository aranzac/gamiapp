import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(PortalVue)
Vue.use(BootstrapVue)
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

const base = axios.create({
  baseURL: 'https://appgami.herokuapp.com'
})

Vue.use(VueAxios, base);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import './registerServiceWorker';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');