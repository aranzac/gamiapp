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
          >
          <h2 class="sub">
            <b>Nivel:</b>
            <p>{{nivel}}. {{animal}}</p>
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
                  <p>{{puntuaciacion_total}}</p>
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  v-bind:style="width"
                  v-bind:aria-valuenow="puntuacion_actual"
                  v-bind:aria-valuemin="0"
                  v-bind:aria-valuemax="100"
                ></div>
              </div>
              <div class="row">
                <div class="col-lg-12 right">
                  <b>{{puntuacion_actual}} / {{puntuacion_final}}</b>
                </div>
              </div>
              <h6 class="text-success center">(Faltan {{restan}}xp para pasar al siguiente nivel)</h6>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline justify">
                  <b>Nombre:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{usuarios.nombre}} {{usuarios.apellido}}</p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline justify">
                  <b>Edad:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{usuarios.edad}}</p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline justify">
                  <b>Periodo:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{usuarios.periodo}}</p>
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
export default {
  data() {
    return {
      usuarios: [],
      title: "Perfil de usuario",
      image: "./../assets/conejito.png",
      mensaje: "holaaaaaa",
      nombre: "Adios",
      hora: "jeje",
      edad: "22",
      periodo: "Infantalsdil",
      nivel: "1",
      animal: "Conejito",
      puntuacion_actual: "25",
      puntuaciacion_total: "25",
      puntuacion_final: "50",
      width: "width:" + 50 + "%;",
      restan: "25",
      actividades: [
        { titulo: "Salir", descripcion: "Una tareita", completado: false },
        { titulo: "Comer", descripcion: "Otra tareita", completado: false }
      ]
    };
  },
  created() {
    // let uri = "http://localhost:" + process.env.PORT + "/posts";
    let id = "5cec783063c5c0391c68ab4f";
    let uri = `/usuarios/${id}`;

    this.axios.get(uri).then(response => {
      this.usuarios = response.data;
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
img {
  max-width: 200px;
  max-height: 200px;

  border: 2px solid lightgrey;
  margin: 0px 0px 7px 0px;
  border-radius: 8px;
  padding: 10px 10px 10px 10px;
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
  font-size: 0.8em;
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
}

/* .card-body {
  text-align: justify;
} */
</style>
