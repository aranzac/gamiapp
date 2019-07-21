<template>
  <div>
    <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-mg-2 col-xs-0"></div>
          <div class="col-lg-8 col-mg-10 col-xs-12">
            <div v-if="warning1" class="alert alert-danger" role="alert">
              <i class="fa fa-exclamation-circle">&nbsp;&nbsp;</i>Datos incorrectos. Vuélvelo a intentar.
            </div>
            <div v-if="warning2" class="alert alert-danger" role="alert">
              <i class="fa fa-exclamation-circle">&nbsp;&nbsp;</i>Este usuario no existe.
            </div>
            <div id="card-form" class="card">
              <h2 class="text-center">Inicio de sesión</h2>
              <form v-on:submit.prevent="login" class="col-lg-12">
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input type="password" class="form-control" v-model="password" />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-md">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-2 col-mg-1 col-xs-0"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus";
import jwtDecode from "jwt-decode";

export default {
  data() {
    return {
      email: "",
      password: "",
      warning1: false,
      warning2: false
    };
  },

  methods: {
    login() {
      this.axios
        .post("/usuarios/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (res.data.error !== undefined) {
            if (res.data.error == "1") {
              this.warning2 = false;
              this.warning1 = true;
            } else if (res.data.error == "2") {
              this.warning1 = false;
              this.warning2 = true;
            }
          } else {
            localStorage.setItem("usertoken", res.data);
            const token = localStorage.usertoken;
            const decoded = jwtDecode(token);

            if (decoded.rol == "alumno") this.$router.push({ name: "perfil" });
            else if (decoded.rol == "profesor")
              this.$router.push({ name: "profesor" });
          }
        })
        .catch(err => {});
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>