<template>
  <div class="container">
    <div class="row justify-content-md-center justify-content-lg-center justify-content-xs-center">
      <div class="col-12 col-md-auto">
        <div
          class="row justify-content-md-center justify-content-xs-center justify-content-lg-center"
        >
          <div class="col-1-3 mb-5 m-3">
            <div class="card card1 shadow-sm" style="width: 18rem;">
              <h2 class="mt-2">
                <i class="fa fa-graduation-cap"></i>
                Perfil de profesor
              </h2>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Nombre</th>
                      <td>{{nombre}} {{apellido}}</td>
                    </tr>
                    <tr>
                      <th scope="row">Correo</th>
                      <td>{{correo}}</td>
                    </tr>
                    <tr>
                      <th scope="row">Tareas creadas</th>
                      <td>{{numero_tareas}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-1-3 mb-5 m-3">
            <div class="card card1 shadow-sm" style="width: 18rem;">
              <h2 class="mt-2 mb-4">Tareas creadas</h2>
              <b-modal id="mymodal" ref="my-modal" hide-footer title="Crear tarea nueva">
                <div class="d-block">
                  <form @submit.prevent="addPost">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Título</label>
                          <input type="text" class="form-control" v-model="tarea.titulo" required />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Categoría</label>
                          <select
                            class="form-control"
                            v-model="tarea.categoria"
                            id="exampleFormControlSelect1"
                          >
                            <option value disabled selected></option>

                            <option>Abstracción</option>
                            <option>Descomposición</option>
                            <option>Reconocimiento de patrones</option>
                            <option>Algoritmos</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Periodo</label>
                          <select
                            class="form-control"
                            v-model="tarea.periodo"
                            id="exampleFormControlSelect1"
                          >
                            <option value disabled selected></option>
                            <option value="Infantil">Infantil (De 5 a 8 años)</option>
                            <option value="Junior">Junior (De 9 a 12 años)</option>
                            <option value="Senior">Senior (De 13 a 16 años)</option>
                            <option value="Pro">Pro (Más de 16 años)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Descripción</label>
                          <textarea
                            class="form-control"
                            v-model="tarea.descripcion"
                            rows="5"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <br />
                    <div class="form-group text-center">
                      <button class="btn btn-info">Añadir tarea</button>
                    </div>
                  </form>
                </div>
              </b-modal>

              <div class="col-lg-12 text-right">
                <b-button variant="info" @click="showModal">
                  <b>Añadir</b>
                  <i class="fa fa-plus-square ml-2"></i>
                </b-button>
              </div>
              <div class="card-body">
                <b-modal id="mymodal2" ref="my-modal2" hide-footer title="Tarea">
                  <div class="d-block"></div>
                </b-modal>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="task in creadas" :key="task._id">
                      <td>{{ task.titulo }}</td>

                      <td>
                        <b-button variant="info" class="text-light" @click="ver(task._id)">
                          <b>Ver</b>
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <b-modal id="mymodal2" ref="my-modal2" hide-footer title="Ver tarea">
                  <div class="d-block">
                    <h2 class="mt-2 text-center text-info">
                      <i class="fa fa-shapes text-info"></i>
                      &nbsp;&nbsp;{{tarea_aux.titulo}}
                    </h2>

                    <div class="card-body">
                      <table class="table table-sm">
                        <tbody>
                          <tr>
                            <th scope="row">Categoría</th>
                            <td>{{tarea_aux.categoria}}</td>
                          </tr>
                          <tr>
                            <th scope="row">Periodo</th>
                            <td>{{tarea_aux.periodo}}</td>
                          </tr>
                          <tr>
                            <th scope="row">Descripción</th>
                            <td>{{tarea_aux.descripcion}}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div class="mt-4" align="right">
                        <b-button
                          variant="info"
                          class="btn btn-danger btn-sm text-light"
                          @click="borrar(tarea_aux._id)"
                        >
                          <b>Borrar tarea</b>
                        </b-button>
                      </div>
                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
          <div class="col-1-3 mb-5 m-3">
            <div class="card card1 shadow-sm" style="width: 25rem;">
              <h2 class="mt-2">Tareas por corregir</h2>
              <b-modal id="my-modal3" ref="my-modal3" hide-footer title="Ver solución">
                <div class="d-block">
                  <h2 class="mt-2 text-center text-info font-weight-bold">
                    <i class="fas fa-file text-info"></i>
                    &nbsp;&nbsp;"{{tarea_aux2.titulo}}" realizada por {{tarea_aux2.alumno}}
                  </h2>

                  <div class="card-body">
                    <table class="table table-sm">
                      <tbody>
                        <tr>
                          <th scope="row">Pasos seguidos</th>
                          <td>{{tarea_aux2.descripcion}}</td>
                        </tr>
                        <tr>
                          <th scope="row">Opinión</th>
                          <td>
                            {{tarea_aux2.opinion}}
                            <i
                              v-if="tarea_aux2.opinion=='Divertida'"
                              class="fas fa-smile text-info"
                            ></i>
                            <i v-if="tarea_aux2.opinion=='Aburrida'" class="fas fa-frown text-info"></i>
                            <!-- <i alt="0 puntos" title="0 puntos" v-if="cero" class="far fa-star"></i>
                            <span v-for="aux in tarea_aux2.opinion">
                              <i class="fas fa-star text-info"></i>
                            </span>-->
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Foto del proceso</th>
                          <td v-if="tarea_aux2.foto!=null">
                            <img :src="tarea_aux2.foto" />
                          </td>
                          <td
                            v-if="tarea_aux2.foto==null"
                            class="font-italic text-muted"
                          >No ha adjuntado una imagen.</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="mt-4" align="center">
                      <b-button variant="info" class="btn text-light" @click="calificar(tarea_aux)">
                        <b>Calificar</b>
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-modal>
              <b-modal id="my-modal4" ref="my-modal4" hide-footer title="Calificar tarea">
                <div class="d-block">
                  <h2 class="mt-2 text-center text-info font-weight-bold">
                    <i class="fas fa-file text-info"></i>
                    &nbsp;&nbsp;{{tarea_aux2.titulo}} realizada por {{tarea_aux2.alumno}}
                  </h2>
                  <form @submit.prevent="addScore(tarea_aux2.alumno)">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Nota</label>
                          <select class="form-control" v-model="nota" placeholder=" " required>
                            <option value disabled selected></option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="form-group text-center">
                      <button class="btn btn-info">Calificar</button>
                    </div>
                  </form>
                </div>
              </b-modal>
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <!-- <th>Realizado por</th> -->
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="task in soluciones" :key="task._id">
                      <td>{{ task.titulo }}</td>
                      <!-- <td>{{ task.alumno }}</td> -->
                      <td>
                        <b-button variant="info" class="text-light" @click="ver2(task)">
                          <b>Ver</b>
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-12.col-md-auto {
  margin-top: 40px !important;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

/* 
.card-body {
  padding: 15px 0px 0px 0px;
} */

.row {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

@media only screen and (max-width: 320px) {
  .card1 {
    width: 20rem !important;
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
    width: 30rem;
  }
}
@media only screen and (max-width: 350px) {
  .card.card1 {
    width: 20rem;
    font-size: 0.8em;
  }
}
</style>

<script>
import jwtDecode from "jwt-decode";
import axios from "axios";
import router from "../router";
import EventBus from "./EventBus";

export default {
  data() {
    return {
      tarea: {},
      tareas: [],
      tarea_aux: {},
      tarea_aux2: {},
      tarea_aux3: {},
      creadas: [],
      usuario: "",
      _id: "",
      nombre: "",
      apellido: "",
      correo: "",
      numero_tareas: "",
      soluciones: "",
      cero: false,
      rol: "",
      nota: ""
    };
  },

  created() {
    let uri = "/tareas";

    this.axios.get(uri).then(response => {
      this.tareas = response.data;
    });

    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);

    this.axios
      .post("usuarios/profile", {
        _id: decoded._id
      })
      .then(response => {
        this.usuario = response.data;
        this.nombre = this.usuario.nombre;
        this.apellido = this.usuario.apellido;
        this.correo = this.usuario.email;
        this._id = this.usuario._id;

        let uri2 = "tareas/creador";
        this.axios.post(uri2, { creador: this.correo }).then(response => {
          this.creadas = response.data;
          this.numero_tareas = this.creadas.length;
        });

        let uri3 = "/soluciones";
        this.axios.post(uri3, { creador: this.correo }).then(response => {
          this.soluciones = response.data;
        });
      });
  },
  methods: {
    addPost() {
      let uri = "/tareas/add";
      let uri2 = "tareas/creador";
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);

      this.tarea.creador = this.correo;
      this.axios.post(uri, this.tarea).then(() => {
        this.axios.post(uri2, { _id: this.correo }).then(response => {
          this.creadas = response.data;
          this.numero_tareas = this.creadas.length;

          // Para resetear los campos
          this.tarea.titulo = "";
          this.tarea.categoria = "";
          this.tarea.descripcion = "";
          this.tarea.periodo = "";

          let uri3 = "tareas/creador";
          this.axios.post(uri3, { creador: this.correo }).then(response => {
            this.creadas = response.data;
            this.numero_tareas = this.creadas.length;
          });
        });
      });

      this.$refs["my-modal"].hide();
    },
    addScore(tarea) {
      this.axios
        .post("usuarios/profile", {
          _id: this.tarea_aux2.id_alumno
        })
        .then(response => {
          this.axios
            .post("usuarios/calificar", {
              _id: this.tarea_aux2.id_alumno,
              puntuacion: this.nota
            })
            .then(response => {
              this.axios
                .post("usuarios/profile", {
                  _id: this.tarea_aux2.id_alumno
                })
                .then(response => {
                  this.$refs["my-modal4"].hide();
                  this.axios
                    .post("soluciones/marcar", {
                      _id: this.tarea_aux2._id
                    })
                    .then(res => {
                      let uri3 = "/soluciones";
                      this.axios
                        .post(uri3, { creador: this.correo })
                        .then(response => {
                          this.soluciones = response.data;
                        });
                    });
                });
            });
        });
    },
    ver(id) {
      let uri = `/tareas/ver/${id}`;
      this.$refs["my-modal2"].show();

      this.axios.get(uri).then(response => {
        this.tarea_aux = response.data;
      });
    },
    ver2(tarea) {
      this.cero = false;
      if (tarea.opinion == 0) this.cero = true;
      this.$refs["my-modal3"].show();
      this.tarea_aux2 = tarea;
    },
    borrar(id) {
      let uri = `/tareas/delete/${id}`;
      this.$refs["my-modal2"].hide();

      this.axios.delete(uri).then(response => {
        let uri2 = "tareas/creador";
        this.axios.post(uri2, { creador: this.correo }).then(response => {
          this.creadas = response.data;
          this.numero_tareas = this.creadas.length;
        });
      });
    },
    corregir(tarea) {
      this.cero = false;
      if (tarea.opinion == 0) this.cero = true;
      this.$refs["my-modal3"].show();
      this.tarea_aux2 = tarea;
    },
    calificar(tarea) {
      this.$refs["my-modal3"].hide();
      this.tarea_aux3 = tarea;
      this.$refs["my-modal4"].show();
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModal2() {
      this.$refs["my-modal2"].show();
    },
    showModal3() {
      this.$refs["my-modal3"].show();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>