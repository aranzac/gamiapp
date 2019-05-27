<template>
  <div class="container">
    <!-- <nav class="navbar bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav>-->

    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-navbar-brand id="logo" class="logo" href="/">Gami</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" class="nav-link">Tutorial</router-link>
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/" class="nav-link">Información</router-link>
            <router-link to="/posts" class="nav-link">Actividades</router-link>
          </b-navbar-nav>
          <br>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/registro">Registro</b-nav-item>
            <b-nav-item to="/iniciosesion">Iniciar sesión</b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>Usuario</em>
              </template>
              <b-dropdown-item to="/perfil">Perfil</b-dropdown-item>
              <b-dropdown-item to="#">Salir</b-dropdown-item>
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


