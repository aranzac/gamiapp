<template>
  <div class="container">
    <div class="row justify-content-md-center mt-5">
      <div class="col-12 col-md-auto">
        <div class="row">
          <div class="col-lg-6 mb-5">
            <div class="card card1 shadow-sm" style="width: 25rem;">
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
                    >(Faltan {{restan}} xp para pasar al siguiente nivel)</h6>
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
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-5">
            <div class="card card1 shadow-sm">
              <h2>Logros desbloqueados</h2>
              <table align="center" class="table centerTable table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Logro</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="cuadradito"></td>
                    <td>
                      <img class="icono" src="../assets/visor.png" />
                    </td>
                    <td class="align-middle">Explorador</td>
                    <td class="align-middle">Has jugado a tareas y juegos por igual</td>
                  </tr>
                  <tr>
                    <td class="cuadradito"></td>
                    <td>
                      <img class="icono" src="../assets/top.png" />
                    </td>
                    <td class="align-middle">En la cima</td>
                    <td class="align-middle">Has alcanzado el primer puesto del ranking</td>
                  </tr>
                  <tr>
                    <td class="cuadradito"></td>
                    <td>
                      <img class="icono" src="../assets/lovepc.png" />
                    </td>
                    <td class="align-middle">En la cima</td>
                    <td class="align-middle">Has alcanzado el primer puesto del ranking</td>
                  </tr>
                </tbody>
              </table>
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

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    const ruta = "../assets/";
    const nombre = "visor.png";
    const rutasa = "../assets/visor.png";
    return {
      usuario: [],
      animate: true,
      nombre: "",
      apellido: "",
      imagen: "",
      hora: "",
      edad: "",
      periodo: "",
      nivel: "",
      animal: "",
      puntuacion: "",
      puntuacion_total: "",
      puntuacion_final: "3",
      width: "width:" + 50 + "%;",
      restan: "",
      porcentaje: "puntuacion"
    };
  },
  methods: {
    func() {
      return "../assets/visor.png";
    }
  },
  created() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    let uri = "/jugados";

    this.axios
      .post("usuarios/profile", {
        _id: decoded._id
      })
      .then(response => {
        // console.log(response.data);

        this.usuario = response.data;
        this.nombre = this.usuario.nombre;
        this.apellido = this.usuario.apellido;
        this.edad = this.usuario.edad;
        this.periodo = this.usuario.periodo;
        this.puntuacion = this.usuario.puntuacion;
        this.nivel = this.usuario.nivel;
        this.animal = animales[this.nivel - 1];

        var y = 0;
        var inx = 0;
        while (inx <= this.nivel - 1) {
          y += niveles[inx];
          inx++;
        }

        this.puntuacion_final = y;
        this.puntuacion = decoded.puntuacion - niveles[this.nivel - 1];
        this.puntuacion_total = decoded.puntuacion;
        if (this.nivel > 1)
          this.puntuacion_total = this.puntuacion + niveles[this.nivel - 1];

        this.restan = this.puntuacion_final - this.puntuacion;

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
          // code block
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
@media only screen and (max-width: 320px) {
  .card.card1 {
    width: 15rem !important;
  }
}
/* .grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: ". izq der ." ". izq der ." ". izq der .";
}

.izq {
  grid-area: izq;
}

.der {
  grid-area: der;
}*/

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
