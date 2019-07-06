<template>
  <div>
    <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-mg-2 col-xs-0"></div>
          <div class="col-lg-8 col-mg-10 col-xs-12">
            <div id="card-form" class="card">
              <h2 class="text-center">Registro</h2>
              <form @submit.prevent="register" class="col-lg-12">
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input type="text" class="form-control" v-model="nombre" required />
                </div>
                <div class="form-group">
                  <label for="apellido">Apellido</label>
                  <input type="text" class="form-control" v-model="apellido" required />
                </div>
                <div class="form-group">
                  <label for="apellido" class="d-block">Rol</label>
                  <section>
                    <!-- <label v-bind:style="{"background-color" : (isActive? "#d4a108" : "#ffc107" )}" @click="toggleClass()" class="btn btn-warning text-light btn-secondary"> -->
                    <label
                      v-bind:class="{ styleB: isActive, styleA: !isActive }"
                      class="btn btn-warning text-light btn-secondary"
                    >
                      <input
                        id="input"
                        class="clase"
                        type="radio"
                        v-on:change="toggleClass()"
                        v-model="rol"
                        value="alumno"
                      />Alumno
                    </label>
                    <label
                      v-bind:class="{ styleA: isActive, styleB: !isActive }"
                      class="btn btn-warning text-light btn-secondary"
                    >
                      <input
                        id="input"
                        class="clase"
                        type="radio"
                        v-on:change="toggleClass()"
                        v-model="rol"
                        value="profesor"
                      />Profesor
                    </label>

                    <!-- <span>value: {{isActive}}</span>
                      
                       <span>value: {{nombre}}</span>
                        <span>value: {{apellido}}</span>
                         <span>value: {{edad}}</span>
                    <span>value: {{rol}}</span>-->
                  </section>
                </div>

                <div class="form-group">
                  <label v-if="isActive" for="edad">Edad</label>
                  <select
                    v-if="isActive"
                    class="form-control"
                    v-model="edad"
                    name="edad"
                    id="edad"
                    placeholder=" "
                    required
                  >
                    <option value disabled selected></option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="0">Más de 16</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" class="form-control" v-model="email" required />
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input type="password" class="form-control" v-model="password" required />
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
import Form from "@/components/Form.vue";
import axios from "axios";
import EventBus from "./EventBus";
import { isAbsolute } from "path";

export default {
  data() {
    return {
      color: "",
      user: {},
      direccion: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      rol: "alumno",
      edad: "",
      gender: "",
      isActive: true
    };
  },
  created() {
    console.log(this.rol);
    console.log("registrando");
    if (this.$route.path == "/iniciosesion") {
      this.direccion = "perfil";
    } else if (this.$route.path == "/registro") {
      this.direccion = "iniciosesion";
    }
  },
  methods: {
    toggleClass() {
      // console.log("hola");
      // console.log(this.isActive);
      this.isActive = !this.isActive;
      // console.log(this.isActive);
      // console.log(this.rol);
    },
    register() {
      this.axios
        .post("/usuarios/add", {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          rol: this.rol,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log("Usuario Registrado");
          this.$router.push({ name: this.direccion });
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleOn() {
      this.rol = "alumno";
      console.log(this.rol);
    },
    toggleOff() {
      this.rol = "profesor";
      console.log(this.rol);
    }
  },
  computed: {
    login: function() {
      return this.$route.path == "/iniciosesion" ? true : false;
    },
    signup: function() {
      return this.$route.path == "/registro" ? true : false;
    }
  }
};
</script>

<style>
.styleB {
  background-color: #d4a108;
}

.styleA {
  background-color: #ffc107;
}

/* input:checked label {
  background-color: red;
} */

/* label:checked {
  height: 50px;
  width: 50px;
  background-color: red;
} */

#etiqueta:checked + #input {
  font-weight: bold;
  color: red;
}

.btn > input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.col-centered {
  float: none;
  margin: 0 auto;
  text-align: center;
}
h2 {
  font-size: 1.2em;
}
.outer-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  margin-top: 30px;
}

.card {
  padding: 15px 5px 15px 5px;
  margin: 0 auto;
  width: 40rem;
  /* text-align: justify !important; */
}

#card-form {
  text-align: justify !important;
}

@media only screen and (max-width: 780px) {
  .card {
    width: 35rem !important;
  }
}
@media only screen and (max-width: 620px) {
  .card {
    width: 27rem !important;
  }
}
@media only screen and (max-width: 470px) {
  .card {
    width: 20rem !important;
  }
}
@media only screen and (max-width: 360px) {
  .card {
    width: 18rem !important;
  }
  .form-group {
    font-size: 0.8em !important;
  }
  h2 {
    font-size: 1.5em;
  }
  .outer-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .card {
    padding: 10px 0px 10px 0px;
  }
}

form {
  margin-top: 8px;
}

.login-btn {
  position: fixed;
  top: 15px;
  /* right: 50px; */
}
</style>
