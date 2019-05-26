<template>
  <section id="loginform" class="outer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-mg-2 col-xs-0"></div>
        <div class="col-lg-8 col-mg-10 col-xs-12">
          <div id="card-form" class="card">
            <h2 v-if="login" class="text-center">Inicio de sesión</h2>
            <h2 v-if="signup" class="text-center">Registro</h2>
            <form id="login" role="form" :action="direccion" class="col-lg-12" method="POST">
              <div v-if="signup" class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" name="nombre" id="nombre">
              </div>
              <div v-if="signup" class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" name="apellido" id="apellido">
              </div>
              <div v-if="signup" class="form-group">
                <label for="apellido" class="d-block">Rol</label>
                <div class="row">
                  <div class="btn-group btn-group-toggle col-centered" data-toggle="buttons">
                    <label class="btn btn-warning text-light active col-centered">
                      <input type="radio" name="options" id="option1" autocomplete="off" checked> Alumno/a
                    </label>
                    <label class="btn btn-warning text-light">
                      <input type="radio" name="options" id="option2" autocomplete="off"> Profesor/a
                    </label>
                  </div>
                </div>
              </div>

              <div v-if="signup" class="form-group">
                <label for="edad">Edad</label>
                <select class="form-control" name="edad" id="edad" placeholder=" ">
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
                  <option>&gt16</option>
                </select>
              </div>
              <div class="form-group">
                <label for="mail">Correo electrónico</label>
                <input type="email" name="email" class="form-control" id="mail">
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" name="contraseña" class="form-control" id="password">
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
</template>

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

<script>
export default {
  computed: {
    login: function() {
      return this.$route.path == "/iniciosesion" ? true : false;
    },
    signup: function() {
      return this.$route.path == "/registro" ? true : false;
    },
    direccion: function direccion() {
      if (this.$route.path == "/iniciosesion") {
        return "/account";
      } else if (this.$route.path == "/registro") {
        return "/login";
      }
    }
  }
};
</script>



