<template>
  <div class="container">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-navbar-brand id="logo" class="logo" href="/">Gami</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" class="nav-link text-light">Tutorial</router-link>
            <router-link to="/" class="nav-link text-light">Home</router-link>
            <router-link to="/" class="nav-link text-light">Información</router-link>
            <router-link to="/tareas" class="nav-link text-light">Actividades</router-link>
            <router-link to="/rankings" class="nav-link text-light">Rankings</router-link>
            <router-link to="/juego" class="nav-link text-light">Juego</router-link>
          </b-navbar-nav>
          <br>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/registro" class="nav-link text-light">Registro</router-link>
            <router-link to="/iniciosesion" class="nav-link text-light">Iniciar sesión</router-link>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em class="text-light">Usuario</em>
              </template>
              <router-link to="/perfil" class="nav-link text-dark">Perfil</router-link>
              <router-link to="#" class="nav-link text-dark">Salir</router-link>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
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
</style>

<script>
import HomeComponent from "./components/HomeComponent.vue";
export default {
  name: "app",
  components: {
    HomeComponent
  }
};
</script>


