<template>
  <div class="container main">
    <div class="row">
      <div class="col-lg-8 col-mg-10 col-xs-12" align="center"></div>
    </div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-12 col-md-auto">
        <div v-if="puntos_nuevos" class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="fa fa-exclamation-circle">&nbsp;&nbsp;</i>
          ¡Has obtenido {{newPoints}} puntos de experiencia!
        </div>
        <div v-if="racha_perdida" class="alert alert-danger alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="far fa-frown">&nbsp;</i>
          Has perdido la racha. Sigue conectándote cada día para recuperarla.
        </div>
        <div v-if="racha_aumentada" class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="far fa-smile">&nbsp;&nbsp;</i>
          ¡Tu racha ha aumentado! Sigue conectándote cada día para no perderla.
        </div>
        <div v-if="nivel_nuevo" class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="fab fa-slack-hash">&nbsp;</i>
          ¡Has subido de nivel!
        </div>
        <div v-if="logro_nuevo" class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="fas fa-award">&nbsp;&nbsp;</i>
          ¡Has obtenido un nuevo logro!
        </div>
        <div class="row">
          <div class="col-lg-5 mb-5">
            <div class="card card1 shadow-sm" style="width: 20rem;">
              <h2>Perfil</h2>
              <div class="col-lg-12 col-xs-12 col-md-12">
                <img
                  :src="imagen"
                  class="card card1 card-img-top rounded-sm"
                  title="Foto de perfil"
                  alt="Foto de perfil"
                />
                <h2 class="sub">
                  <b>Nivel:</b>
                  <p>&nbsp;&nbsp;{{nivel}}. {{animal}}</p>
                </h2>
              </div>
              <div class="card-body card1-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Puntuación:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p>{{puntuacion_total}}</p>
                      </div>
                    </div>

                    <div>
                      <b-progress
                        :max="puntuacion_final"
                        :value="puntuacion"
                        variant="info"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 right">
                        <b>{{puntuacion}} / {{puntuacion_final}}</b>
                      </div>
                    </div>
                    <h6
                      class="text-success center"
                    >(Faltan {{restan}} puntos para pasar al siguiente nivel)</h6>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Nombre:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p>{{nombre}} {{apellido}}</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Edad:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p>{{edad}}</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Periodo:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p>{{periodo}}</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Juegos jugados:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p class="minimizar">{{juegos}} juegos</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col lg-6 inline justify">
                        <b>Racha:</b>
                      </div>
                      <div class="col lg-6 inline right">
                        <p class="minimizar">{{racha}} días seguidos conectándote</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-7 mb-5">
            <b-modal
              id="my-modal"
              style="width: 10rem;"
              ref="my-modal"
              hide-footer
              title="Logro descargable"
            >
              <!-- <div class="row">Descarga o imprime este archivo en tu dispositivo</div>
              <br />
              <div class="row">
                <div class="col-lg-12 text-center">
                  <a href download>
                    <i class="fas fa-file-pdf"></i>
                  </a>
                </div>
              </div>-->
            </b-modal>
            <div id class="card card1 shadow-sm" style="width: 30rem;">
              <h2>Logros desbloqueados</h2>
              <table align="center" class="table centerTable table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Logro</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descripción</th>
                    <!-- <th scope="col">asdasd</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  <tr v-for="logro in logros_render" :key="logro._id">
                    <td class="cuadradito"></td>
                    <td>
                      <img class="icono" title="Imagen del logro" :src="logro.imagen" />
                    </td>
                    <td class="align-middle">{{logro.titulo}}</td>
                    <td class="align-middle">{{logro.descripcion}}</td>
                    <!-- <td>
                      <button class="btn btn-warning text-light" @click="open()">
                        <i class="fas fa-eye"></i>&nbsp;Ver logro
                      </button>
                    </td>-->
                  </tr>
                </tbody>
              </table>
              <div class="text-center mt-3">
                <b-button variant="warning">
                  <router-link
                    to="/logros"
                    class="nav-link text-light p-0"
                  >Todos los logros posibles</router-link>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import axios from "axios";
import router from "../router";
import EventBus from "./EventBus";

const animales = [
  "oveja",
  "conejo",
  "gato",
  "perro",
  "hipopótamo",
  "jirafa",
  "zebra",
  "elefante",
  "tigre",
  "ciervo"
];

const niveles = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
const limites = [50, 150, 300, 500, 750, 1050, 1400, 1800, 2250, 2750];

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    const ruta = "../assets/";
    const nombre = "visor.png";
    const rutasa = "../assets/visor.png";
    return {
      title: "Hola",
      usuario: [],
      animate: true,
      _id: "",
      nombre: "",
      apellido: "",
      imagen: "",
      hora: "",
      edad: "",
      periodo: "",
      nivel: "",
      animal: "",
      puntuacion: 0,
      puntuacion_total: 0,
      puntuacion_final: 0,
      width: "width:" + 50 + "%;",
      restan: "",
      porcentaje: "puntuacion",
      nivel_nuevo: false,
      puntos_nuevos: false,
      logro_nuevo: false,
      racha_perdida: false,
      racha_aumentada: false,
      newPoints: "",
      logros: [],
      logros_user: [],
      logros_render: [],
      racha: "",
      aux: "",
      logros_nuevos: [],
      juegos: 0
    };
  },
  methods: {
    func() {
      return "../assets/visor.png";
    },
    open() {
      this.$refs["my-modal"].show();
    },
    get_max_user() {
      return this.axios.get("usuarios/max");
    },
    add_logros() {
      var au2;
      this.axios.get("/logros").then(response => {
        this.logros = response.data;
        var aux = [];

        //Logros que no ha conseguido
        for (var i = 0; i < this.logros.length; i++) {
          if (!this.logros_user.includes(i)) aux.push(i);
        }

        var logros_nuevos = [];

        for (var i = 0; i < aux.length; i++) {
          switch (aux[i]) {
            case 1:
              if (this.nivel_nuevo) if (this.nivel >= 2) logros_nuevos.push(1);
              break;
            case 2:
              if (this.nivel_nuevo) if (this.nivel >= 3) logros_nuevos.push(2);
              break;
            case 3:
              if (this.nivel_nuevo) if (this.nivel >= 4) logros_nuevos.push(3);
              break;
            case 4:
              if (this.nivel_nuevo) if (this.nivel >= 5) logros_nuevos.push(4);
              break;
            case 5:
              if (this.nivel_nuevo) if (this.nivel >= 6) logros_nuevos.push(5);
              break;
            case 6:
              if (this.nivel_nuevo) if (this.nivel >= 7) logros_nuevos.push(6);
              break;
            case 7:
              if (this.nivel_nuevo) if (this.nivel >= 8) logros_nuevos.push(7);
              break;
            case 8:
              if (this.nivel_nuevo) if (this.nivel >= 9) logros_nuevos.push(8);
              break;
            case 9:
              if (this.nivel_nuevo) if (this.nivel >= 10) logros_nuevos.push(9);
              break;
            case 10:
              if (this.nivel == 10)
                if (this.puntuacion_total >= limites[limites.length - 1])
                  logros_nuevos.push(10);
              break;
            case 12:
              var uri = `usuarios/max/${this._id}`;
              this.axios.get(uri);
              break;
            case 13:
              if (this.nivel == 10)
                if (this.puntuacion_total == limites[limites.length - 1])
                  logros_nuevos.push(13);
              break;
            case 14:
              if (this.racha >= 7) logros_nuevos.push(14);
              break;
            case 15:
              if (this.racha >= 30) logros_nuevos.push(15);
              break;
          }
        }
        if (!logros_nuevos.length == 0) this.logro_nuevo = true;
        else this.logro_nuevo = false;

        var to_add = [];

        for (var i = 0; i < logros_nuevos.length; i++) {
          if (!this.logros_user.includes(logros_nuevos[i]))
            to_add.push(logros_nuevos[i]);
        }
        if (to_add.length != 0)
          this.axios
            .post("usuarios/addlogro", {
              id: this._id,
              logros: to_add
            })
            .then(response => {
              this.logros_user = response.data;
              let uri2 = "logros/ver";
              this.axios.post(uri2, { logros: this.logros_user }).then(res => {
                this.logros_render = res.data;
              });
            });
      });
    },
    add_puntos() {
      if (
        this.puntuacion_total - this.usuario.puntuacion_anterior != 0 &&
        this.puntuacion_total != 0
      ) {
        this.puntos_nuevos = true;

        if (
          this.usuario.puntuacion_anterior < limites[this.nivel - 2] &&
          this.usuario.puntuacion > limites[this.nivel - 2]
        )
          this.nivel_nuevo = true;

        this.newPoints =
          this.usuario.puntuacion - this.usuario.puntuacion_anterior;

        this.axios.post("usuarios/resetearpuntos", {
          _id: this.usuario._id
        });
      } else {
        this.puntos_nuevos = false;
        this.nivel_nuevo = false;
      }
    }
  },
  created() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);

    this.logro_nuevo = false;

    let uri = "/jugados";

    this.axios
      .post("usuarios/profile", {
        _id: decoded._id
      })
      .then(response => {
        this.usuario = response.data;
        this._id = response.data._id;
        this.nombre = this.usuario.nombre;
        this.apellido = this.usuario.apellido;
        this.edad = this.usuario.edad;
        this.periodo = this.usuario.periodo;
        this.puntuacion_total = this.usuario.puntuacion;
        this.nivel = this.usuario.nivel;
        this.animal = animales[this.nivel - 1];
        this.puntuacion_final = niveles[this.nivel - 1];
        this.juegos = this.usuario.juegos_jugados;
        this.racha = this.usuario.racha;
        if (this.nivel > 1)
          this.puntuacion = this.puntuacion_total - limites[this.nivel - 2];

        if (this.usuario.rol == "alumno") {
          var racha_aux = this.usuario.racha;

          var uri3 = `usuarios/updateracha/${this._id}`;
          this.axios.get(uri3).then(res => {
            var old = res.data.racha;

            var uri4 = `usuarios/getracha/${this._id}`;
            this.axios.get(uri4).then(res => {
              this.racha = res.data.racha;
              if (old != 0 && this.racha == 0) {
                this.racha_perdida = true;
              } else if (this.racha > old) {
                this.racha_aumentada = true;
              }
            });
          });

          this.logros_user = this.usuario.logros;

          let uri2 = "logros/ver";
          this.axios.post(uri2, { logros: this.logros_user }).then(res => {
            this.logros_render = res.data;
          });

          // Comprobar si hay puntos nuevos y si ha subido de nivel
          this.add_puntos();

          //Comprobar si ha conseguido logros nuevos
          this.add_logros();

          // Calcular los puntos que faltan para el siguiente nivel
          this.restan = this.puntuacion_final - this.puntuacion;
          if (this.restan < 0) this.restan = 0;

          // Para asignar las imagenes segun los niveles
          switch (this.nivel) {
            case 1:
              this.imagen = require("../assets/1.png");
              break;
            case 2:
              this.imagen = require("../assets/2.png");
              break;
            case 3:
              this.imagen = require("../assets/3.png");
              break;
            case 4:
              this.imagen = require("../assets/4.png");
              break;
            case 5:
              this.imagen = require("../assets/5.png");
              break;
            case 6:
              this.imagen = require("../assets/6.png");
              break;
            case 7:
              this.imagen = require("../assets/7.png");
              break;
            case 8:
              this.imagen = require("../assets/8.png");
              break;
            case 9:
              this.imagen = require("../assets/9.png");
              break;
            case 10:
              this.imagen = require("../assets/10.png");
              break;

            default:
          }
        }
      });
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {}
};
</script>

<style>
.main {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}

.minimizar {
  text-transform: initial;
}

.fas.fa-file-pdf {
  font-size: 8em;
  color: #dd0b0b;
  /* background: rgb(161, 7, 7);
  background: linear-gradient(
    0deg,
    rgba(161, 7, 7, 1) 37%,
    rgba(235, 12, 12, 1) 100%
  ); */
}

@media only screen and (max-width: 320px) {
  .card.card1 {
    width: 15rem !important;
  }
}

.card1-body {
  padding: 0px;
}
.card.card1 {
  width: 30rem;
}

@media only screen and (max-width: 789px) {
  .card.card1 {
    width: 20rem;
  }
}
@media only screen and (max-width: 350px) {
  .card.card1 {
    width: 10rem;
    font-size: 0.8em;
  }
}

.icono {
  /* background-image: url(../assets/visor.png) 0 0; */
  height: 60px;
  width: 60px;
  display: inline-block;
  border: 0px;
}

img {
  max-width: 200px;
  max-height: 200px;

  border: 2px solid lightgrey;
  margin: 0px 0px 7px 0px;
  margin: auto;
  border-radius: 8px;
  padding: 10px 10px 10px 10px;
}

p {
  text-transform: capitalize;
}
.justify {
  text-align: justify;
}

#cuerpo {
  margin-top: 25px;
}
p {
  display: inline;
}

.inline {
  display: inline-block;
}

.right {
  text-align: right;
}

.card1 {
  /* float: none; Added */
  text-align: center;
  /* margin: 0 auto; */
  /* margin-top: 40px; */
  padding: 10px 0px 0px 0px;
  margin: 0;
}

.card1-body {
  font-size: 1em;
}
.sub {
  font-size: 1em;
}

.progress {
  margin-top: 5px;
}
h6 {
  margin-top: 5px;
}

@media only screen and (max-width: 992px) {
  .card1 {
    margin-bottom: 10px;
    text-align: center;
    padding: 5px 0px 0px 0px;
    width: 20rem !important;
    margin-top: 20px;
  }
  .card1-body {
    font-size: 0.8em;
  }
  h2 {
    font-size: 1.6em;
  }
  .list-group-item {
    padding: 3px 0px 10px;
  }
}

@media only screen and (max-width: 400px) {
  .card1 {
    width: 15rem !important;
  }
  img {
    max-width: 146px;
    max-height: 146px;
  }
}

/* .card-body {
  text-align: justify;
} */
</style>
