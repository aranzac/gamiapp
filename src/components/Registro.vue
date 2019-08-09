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
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    v-model="nombre"
                    @change="nameValid()"
                    maxlength="9"
                    required
                  />
                  <div class="valid-feedback">¡Este nombre es válido!</div>
                  <div
                    class="invalid-feedback"
                  >Este nombre no es válido. Debe tener al menos 3 letras y no puede contener carácteres especiales</div>
                </div>
                <div class="form-group">
                  <label for="apellido">Apellido</label>
                  <input
                    id="apellido"
                    type="text"
                    class="form-control"
                    @change="apellidoValid()"
                    v-model="apellido"
                    required
                  />
                  <div class="valid-feedback">¡Este apellido es válido!</div>
                  <div
                    class="invalid-feedback"
                  >Este apellido no es válido. Debe tener al menos 3 letras y no puede contener carácteres especiales</div>
                </div>
                <div class="form-group">
                  <label for="apellido" class="d-block">Rol</label>
                  <section class="text-center">
                    <!-- <label v-bind:style="{"background-color" : (isActive? "#d4a108" : "#ffc107" )}" @click="toggleClass()" class="btn btn-warning text-light btn-secondary"> -->
                    <label
                      v-bind:class="{ styleB: isActive, styleA: !isActive }"
                      class="btn btn-warning text-light btn-secondary"
                    >
                      <input
                        id="rol"
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
                        class="clase"
                        type="radio"
                        v-on:change="toggleClass()"
                        v-model="rol"
                        value="profesor"
                      />Profesor
                    </label>
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
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    @change="emailValid()"
                    v-model="email"
                    required
                  />
                  <div id="valido" class="valid-feedback d-none">¡Este correo es válido!</div>
                  <div
                    id="falla1"
                    class="invalid-feedback d-none"
                  >Este correo no es válido. Debe tener la siguiente forma: caracteres@caracteres.dominio</div>
                  <div
                    id="falla2"
                    class="invalid-feedback d-none"
                  >Ya existe una cuenta para este correo.</div>
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="password"
                    @change="passwordValid()"
                    required
                  />
                  <div id="valido" class="valid-feedback">¡Esta contraseña es válida!</div>
                  <div
                    id="falla1"
                    class="invalid-feedback"
                  >Esta contraseña no es válida. Debe tener una longitud mínima de 6 carácteres, incluir al menos una letra minúscula y al menos una letra mayúscula</div>
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

function validar(el) {
  el.classList.remove("is-invalid");
  el.classList.add("is-valid");
}

function invalidar(el) {
  el.classList.remove("is-valid");
  el.classList.add("is-invalid");
}

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
      isActive: true,
      val_name: false,
      val_apellido: false,
      val_password: false,
      val_correo: false
    };
  },
  created() {
    if (this.$route.path == "/iniciosesion") {
      this.direccion = "Perfil";
    } else if (this.$route.path == "/registro") {
      this.direccion = "Inicio de Sesión";
    }
  },
  methods: {
    nameValid() {
      var exp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
      var element = document.querySelector("#name");
      if (exp.test(this.nombre)) validar(element);
      else invalidar(element);
    },
    apellidoValid() {
      var exp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
      var element = document.querySelector("#apellido");
      if (exp.test(this.apellido)) {
        validar(element);
      } else invalidar(element);
    },
    emailValid() {
      var msj = document.querySelector("#valido");
      var msj2 = document.querySelector("#falla1");

      var exp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (exp.test(this.email)) {
        msj2.classList.remove("d-block");
        this.validar_correo(this.email);
      } else {
        msj.classList.remove("d-block");
        msj.classList.add("d-none");
        msj2.classList.add("d-block");
      }
    },
    validar_correo(email) {
      var msj = document.querySelector("#valido");
      var msj2 = document.querySelector("#falla1");
      var msj3 = document.querySelector("#falla2");

      this.axios.post("usuarios/existente", { email: email }).then(res => {
        if (res.data.error == "Not used") {
          msj2.classList.remove("d-block");
          msj3.classList.remove("d-block");
          msj.classList.add("d-block");
          var aux = document.querySelector("#email");
          validar(aux);
        } else if (res.data == email) {
          msj.classList.remove("d-block");
          msj3.classList.add("d-block");
        }
      });
    },
    passwordValid() {
      var exp = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
      var element = document.querySelector("#password");
      if (exp.test(this.password)) validar(element);
      else invalidar(element);
    },
    toggleClass() {
      this.isActive = !this.isActive;
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
          this.$router.push({ name: this.direccion });
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleOn() {
      this.rol = "alumno";
    },
    toggleOff() {
      this.rol = "profesor";
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
