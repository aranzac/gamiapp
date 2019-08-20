<template>
  <div class="container">
    <div>
      <vue-headful :title="$route.name" />

      <b-navbar toggleable="lg" type="dark" variant="info">
        <!-- <b-navbar-brand  class="logo" href="/">Gami</b-navbar-brand> -->
        <router-link to="/" id="logo" class="logo">Gami</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/tutorial" class="nav-link text-light">Tutorial</router-link>
            <!-- <router-link to="/" class="nav-link text-light">Información</router-link> -->
            <router-link
              v-if="auth=='loggedin'"
              to="/tareas"
              class="nav-link text-light"
            >Actividades</router-link>
            <router-link to="/rankings" class="nav-link text-light">Rankings</router-link>
            <router-link v-if="alumno == ''" to="/juegos" class="nav-link text-light">Juegos</router-link>
            <!-- <router-link to="/jueguini" class="nav-link text-light">Jueguini</router-link>
            <a href="../h5p/demo/juegos.html">Juegaso</a>
            <a href="../h5p/demo/prueba.html">Prueba</a>-->
          </b-navbar-nav>
          <br />
          <b-navbar-nav class="ml-auto">
            <router-link
              v-if="auth==''"
              to="/iniciosesion"
              class="nav-link text-light"
            >Accede a tu cuenta</router-link>
            <router-link v-if="auth==''" to="/registro" class="nav-link text-light">Registro</router-link>

            <b-nav-item-dropdown v-if="auth=='loggedin'" right>
              <template slot="button-content">
                <em @click="cuenta()" class="text-light">Cuenta</em>
              </template>
              <router-link
                v-if="alumno == 'profesor'"
                to="/profesor"
                class="nav-link text-dark"
              >Mi perfil</router-link>
              <router-link v-if="alumno == ''" to="/perfil" class="nav-link text-dark">Mi perfil</router-link>
              <b-dropdown-item @click="logout()">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.oscuro {
  color: rgba(255, 255, 255, 0.2);
}
.container {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 100% !important;
}
@media (min-width: 1200px) {
  .container {
    max-width: 100% !important;
  }
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
.navbar {
  width: 100% !important;
}
nav {
  width: 100% !important;
}
.logo {
  font-family: "Pacifico";
}
.center {
  text-align: center;
}
#logo {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 35px;
  color: white !important;
}
h2,
th,
.btn {
  font-family: Quicksand;
  font-weight: bold;
}
.navbar-nav > .nav-link {
  color: white;
  /* font-weight: 500; */
  font-size: 1.1em;
  font-weight: 600;
  font-size: 1.1em;
}
.navbar-nav > .nav-link:hover {
  /* color: rgb(223, 222, 222) !important; */
  color: white !important;
  /* font-weight: 700; */
  font-size: 1.1em;
  text-decoration: underline;
}
.navbar-nav > a.nav-link:focus {
  /* color: rgb(236, 233, 233) !important; */
  color: whitesmoke !important;
  font-weight: 700;
  text-decoration: underline;
}
</style>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import EventBus from "./components/EventBus.vue";
import jwtDecode from "jwt-decode";
import { isAbsolute } from "path";
export default {
  name: "app",
  components: {
    HomeComponent
  },
  data() {
    return {
      auth: "",
      user: "",
      alumno: "",
      rol: false
    };
  },
  mounted() {
    // let src = document.createElement("script");
    // src.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.min.js");
    // document.head.appendChild(src);
  },
  created() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    if (decoded.rol == "profesor") this.rol = true;
    else if (decoded.rol == "alumno") this.rol = false;
    if (decoded.rol == "profesor") this.alumno = "profesor";
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
      this.auth = "";
      this.$router.push({ name: "Inicio" });
    },
    cuenta() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      if (decoded.rol == "profesor") this.alumno = "profesor";
      else if (decoded.rol == "alumno") this.alumno = "";
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
    // Para que cuando se desconecte sin logout se borre el token, y no aparezca la info
    if (this.auth == "") localStorage.removeItem("usertoken");
  }
};
</script>
