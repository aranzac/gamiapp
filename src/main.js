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
  // Para despliege
  baseURL: 'https://appgami.herokuapp.com'
  // Para desarrollo
  // baseURL: 'http://localhost:5000/'
})

Vue.use(VueAxios, base);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import Perfil from './components/Perfil.vue';
import Registro from './components/Registro.vue';
import InicioSesion from './components/InicioSesion.vue';
import IndexComponentUsuarios from './components/IndexComponentUsuarios.vue';
import Rankings from './components/Rankings.vue';
import Tareas from './components/Tareas.vue';
import PerfilProfesor from './components/PerfilProfesor.vue'
import PruebaJuego from './components/PruebaJuego.vue'
import Jueguini from '../public/h5p/demo/Jueguini.vue'
import './registerServiceWorker';

const routes = [{
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
    name: 'registro',
    path: '/registro',
    component: Registro
  },
  {
    name: 'iniciosesion',
    path: '/iniciosesion',
    component: InicioSesion
  },
  {
    name: 'perfil',
    path: '/perfil',
    component: Perfil
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  },
  {
    name: 'usuarios',
    path: '/usuarios',
    component: IndexComponentUsuarios
  },
  {
    name: 'rankings',
    path: '/rankings',
    component: Rankings
  },
  {
    name: 'tareas',
    path: '/tareas',
    component: Tareas
  },
  {
    name: 'profesor',
    path: '/profesor',
    component: PerfilProfesor
  },
  {
    name: 'juego',
    path: '/juego',
    component: PruebaJuego
  },
  {
    name: 'jueguini',
    path: '/jueguini',
    component: Jueguini
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');