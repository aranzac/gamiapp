<template>
  <div>
    <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-mg-2 col-xs-0"></div>
          <div class="col-lg-8 col-mg-10 col-xs-12">
            <div id="card-form" class="card">
              <h2 v-if="login" class="text-center">Inicio de sesión</h2>
              <h2 v-if="signup" class="text-center">Registro</h2>
              <form v-on:@submit.prevent="addPost" class="col-lg-12">
                <div v-if="signup" class="form-group">
                  <label for="nombre">Nombre</label>
                  <input type="text" class="form-control" v-model="nombre" required />
                </div>
                <div v-if="signup" class="form-group">
                  <label for="apellido">Apellido</label>
                  <input type="text" class="form-control" v-model="apellido" required />
                </div>
                <div v-if="signup" class="form-group">
                  <label for="apellido" class="d-block">Rol</label>
                  <div class="row">
                    <div class="btn-group btn-group-toggle col-centered" data-toggle="buttons">
                      <label class="btn btn-warning text-light active col-centered">
                        <input type="radio" v-model="rol" autocomplete="off" value="alumno" checked /> Alumno/a
                      </label>
                      <label class="btn btn-warning text-light">
                        <input type="radio" v-model="rol" autocomplete="off" value="profesor" /> Profesor/a
                      </label>
                    </div>
                  </div>
                </div>

                <div v-if="signup" class="form-group">
                  <label for="edad">Edad</label>
                  <select
                    class="form-control"
                    v-model="edad"
                    name="edad"
                    id="edad"
                    placeholder=" "
                    required
                  >
                    <option value disabled selected></option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>16</option>
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
  <!-- <div>
    <h1>Registro</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre:</label>
            <input type="text" class="form-control" v-model="user.nombre">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea class="form-control" v-model="user.apellido" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>-->
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus";

export default {
  data() {
    return {
      user: {},
      direccion: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      rol: "",
      edad: ""
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
    addPost() {
      let uri = "/usuarios/add";
      // this.axios.post(uri, this.user).then(() => {
      //   this.$router.push({ name: this.direccion });
      // });

      if (this.$route.path == "/registro") {
        console.log("eys");
        this.axios
          .post(uri, {
            nombre: this.first_name,
            apellido: this.last_name,
            edad: this.email,
            rol: this.password,
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
      } else {
        console.log("logins");
        const token = localStorage.usertoken;
        const decoded = jwtDecode(token);
        axios
          .post("/usuarios/login", {
            email: this.email,
            password: this.password
          })
          .then(res => {
            if (res.data.error !== undefined) {
              router.push({ name: "Inicio de Sesión" });
              this.warning = true;
            } else {
              localStorage.setItem("usertoken", res.data);

              this.email = "";
              this.password = "";
              router.push({ name: this.direccion });
            }
          })
          .catch(err => {
            console.log(err);
          });
        this.emitMethod();
      }
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