<template>
  <div id="cuerpo">
    <div class="col-lg-12 md-5">
      <div class="card card1 shadow-sm" style="width: 25rem;">
        <h2>Perfil</h2>
        <div class="col-lg-12 col-xs-12 col-md-12">
          <img
            class="card card1 card-img-top rounded-sm"
            src="../assets/conejito.png"
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
            <li class="list-group-item pb-lg-5">
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
                  :value="puntuacion_actual"
                  variant="info"
                  striped
                  :animated="animate"
                  class="mt-2"
                ></b-progress>
              </div>
              <div class="row">
                <div class="col-lg-12 right">
                  <b>{{puntuacion_actual}} / {{puntuacion_final}}</b>
                </div>
              </div>
              <!-- <h6 class="text-success center">(Faltan {{restan}}xp para pasar al siguiente nivel)</h6> -->
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
    <div>
      <ul>
        <!-- <li v-for="actividad in actividades">{{actividad.titulo}}</li> -->
      </ul>
    </div>
    <!-- <pre>{{ $data | json }}</pre> -->
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

    return {
      animate: true,
      nombre: decoded.nombre || "",
      apellido: decoded.apellido || "",
      title: "Perfil de usuario",
      image: "./../assets/conejito.png",
      mensaje: "",
      hora: "",
      edad: decoded.edad || "",
      periodo: decoded.periodo || "",
      nivel: decoded.nivel + 1 || "",
      animal: "",
      puntuacion_actual: "",
      puntuacion_total: "",
      puntuacion_final: "",
      width: "width:" + 50 + "%;",
      restan: "25",
      porcentaje: "puntuacion"
    };
  },
  created() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    let uri = "/jugados";

    this.animal = animales[this.nivel - 1];
    this.puntuacion_final = niveles[this.nivel - 1];
    this.puntuacion_actual = 25;
    this.puntuacion_total = this.puntuacion_actual;
    if (this.nivel > 1)
      this.puntuacion_total = this.puntuacion_actual + niveles[this.nivel - 1];

    // this.nombre = decoded.nombre;
    // console.log(this.nombre);

    // this.axios
    //   .post("/usuarios", {
    //     email: decoded.email
    //   })
    //   .then(response => {
    //     this.juegos = response.data;
    //   });

    // this.axios.get(uri).then(response => {
    //   this.usuarios = response.data;
    // });
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
