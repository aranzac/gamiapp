<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/" id="logo" class="logo">Gami</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/tutorial" class="nav-link text-light">Tutorial</router-link>
        <!-- <router-link to="/" class="nav-link text-light">Información</router-link> -->
        <router-link v-if="auth=='loggedin'" to="/tareas" class="nav-link text-light">Actividades</router-link>
        <router-link to="/rankings" class="nav-link text-light">Rankings</router-link>
        <!-- <router-link v-if="alumno == ''" to="/juego" class="nav-link text-light">Juego</router-link> -->
        <router-link v-if="alumno == 'alumno'" to="/juegos" class="nav-link text-light">Juegos</router-link>
        <!-- <router-link to="/juegos" class="nav-link text-light">Juegos</router-link> -->

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
          <router-link v-if="alumno == 'alumno'" to="/perfil" class="nav-link text-dark">Mi perfil</router-link>
          <b-dropdown-item @click="logout()">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      auth: "",
      user: "",
      alumno: "",
      rol: false
    };
  },
  mounted() {
    let src = document.createElement("script");
    src.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.min.js");
    document.head.appendChild(src);
  },
  created() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    this.alumno = "";
    // if()
    if (decoded.rol == "profesor") this.rol = true;
    else if (decoded.rol == "alumno") this.rol = false;
    if (decoded.rol == "profesor") this.alumno = "profesor";
    else if (decoded.rol == "alumno") this.alumno = "alumno";
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