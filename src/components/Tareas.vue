<template>
  <div class="container">
    <div class="row pt-5 pr-5 pl-5">
      <h1 class="col-lg-9 col-md-6 col-xs-6 titulo2">
        Actividades
        <a
          class="text-justify"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="bottom"
          data-content="Estas actividades te permiten aprender Pensamiento Computacional mientras realizas una tarea en tu aula o incluso en tu casa. Busca una que te guste, sigue las instrucciones y finalmente rellena el formulario para que un profesor o profesora pueda valorar tu actividad."
        >
          <i class="fas fa-info-circle text-warning info" style="font-size:50px"></i>
        </a>
      </h1>

      <select
        class="custom-select col-lg-3 col-md-6 col-xs-6 custom-select custom-select-md"
        v-model="category"
        required
      >
        <option selected disabled>Filtrar por categoría</option>
        <option value="Abstracción">Abstracción</option>
        <option value="Descomposición">Descomposición</option>
        <option value="Algoritmos">Algoritmos</option>
        <option value="Algoritmos">Reconocimiento de patrones</option>

        <option style="background-color: lightgrey; color: grey;" value>Eliminar filtros</option>
      </select>
    </div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-md-6 col-md-auto">
        <table align="center" class="table centerTable table-hover table-sm mb-5">
          <thead>
            <tr>
              <th>Título</th>
              <th class="hide">Periodo</th>
              <th class="hide">Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <b-modal id="mymodal" ref="my-modal" hide-footer title="Solución a la tarea">
              <div class="d-block">
                <form @submit.prevent="addSol">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="apellido" class="d-block">¿Qué te ha parecido?</label>
                        <section class="text-center">
                          <!-- <label v-bind:style="{"background-color" : (isActive? "#d4a108" : "#ffc107" )}" @click="toggleClass()" class="btn btn-warning text-light btn-secondary"> -->
                          <label
                            v-bind:class="{ styleD: isActive, styleC: !isActive }"
                            class="btn btn-success text-light btn-secondary"
                          >
                            <input
                              id="rol"
                              class="clase"
                              type="radio"
                              v-on:change="toggleClass()"
                              v-model="opinion"
                              value="Divertida"
                              autocomplete="on"
                            />¡Divertida!
                          </label>
                          <label
                            v-bind:class="{ styleAA: isActive, styleBB: !isActive }"
                            class="btn btn-danger text-light btn-secondary"
                          >
                            <input
                              class="clase"
                              type="radio"
                              v-on:change="toggleClass()"
                              v-model="opinion"
                              value="Aburrida"
                              autocomplete="on"
                            />Aburrida
                          </label>
                        </section>
                      </div>
                      <!-- <div class="form-group">
                        <label>¿Qué te ha parecido esta actividad?</label>

                        <div align="center" class="mt-3">
                          <div class="btn-group">
                            <button type="button" class="btn" v-on:click="valorar(0)">
                              <i class="fas fa-frown valora text-secondary"></i>
                            </button>
                            <button type="button" class="btn" v-on:click="valorar(1)">
                              <i class="fas fa-grin-beam valora text-info"></i>
                            </button>
                            <button type="button" class="btn" v-on:click="valorar(2)">
                              <i class="fas fa-grin-stars valora text-warning"></i>
                            </button>
                          </div>
                        </div>
                        <div v-if="mostrar" class="row mt-3">
                          <div class="col-xs-6">
                            <div class="input-group input-group-sm mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">¿Por qué?</span>
                              </div>
                              <input
                                type="text"
                                class="form-control input-sm"
                                placeholder
                                aria-describedby="inputGroup-sizing-sm"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>-->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>¿Cómo la has resuelto?</label>
                        <textarea class="form-control" v-model="solucion.descripcion" rows required></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>¿Tienes alguna foto de la actividad? ¡Súbela!</label>
                        <input
                          type="file"
                          @change="onFileSelected"
                          accept="image/x-png, image/gif, image/jpeg"
                        />

                        <div align="center">
                          <img width="320" :src="picture" />
                          <div class="row m-3">
                            <div class="tama">
                              <label v-if="ima==true">Porcentaje de subida</label>
                              <b-progress
                                v-if="ima==true"
                                :max="max"
                                :min="min"
                                :value="uploadValue"
                                variant="success"
                                striped
                                :animated="animate"
                              ></b-progress>
                            </div>
                          </div>
                          <button
                            v-if="ima==true && uploadValue!=100"
                            class="btn btn-success text-light d-block"
                            type="button"
                            @click="onUpload"
                          >Subir imagen</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group text-center">
                    <button v-if="uploadValue==100 || !ima" class="btn btn-primary">Añadir tarea</button>
                  </div>
                </form>
              </div>
            </b-modal>
            <b-modal id="mymodal2" ref="my-modal2" hide-footer title="Ver tarea">
              <div class="d-block">
                <h2 class="mt-2 text-center text-warning">
                  <i class="fa fa-shapes text-warning"></i>
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

                  <div v-if="alumno==''" class="mt-4" align="center">
                    <b-button
                      variant="warning"
                      class="btn text-light"
                      @click="realizar(tarea_aux._id)"
                    >
                      <b>Realizar</b>
                    </b-button>
                  </div>
                </div>
              </div>
            </b-modal>
            <tr v-for="tarea in filtro" :key="tarea._id">
              <td>{{ tarea.titulo }}</td>
              <td class="hide">{{ tarea.periodo }}</td>
              <td class="hide">{{ tarea.categoria }}</td>
              <td>
                <b-button variant="warning" class="btn text-light" @click="ver(tarea._id)">
                  <b>Ver</b>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import firebase from "firebase";

export default {
  data() {
    return {
      tareas: [],
      category: "",
      tarea_aux: {},
      alumno: "",
      solucion: {},
      animate: true,
      titulo: "",
      mostrar: false,
      selectedFile: null,
      foto: "",
      picture: null,
      isActive: true,
      opinion: "",
      max: 100,
      min: 0,
      valor: 50,
      ima: false,
      uploadValue: 0
    };
  },
  created() {
    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });

    this.solucion.numero = -1;
    this.solucion.opinion = "";
    this.solucion.feedback = "";
    let uri = "/tareas";

    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);

    if (decoded.rol == "profesor") this.alumno = "profesor";

    this.axios.get(uri).then(response => {
      this.tareas = response.data;
    });
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
    ver(id) {
      let uri = `/tareas/ver/${id}`;
      this.$refs["my-modal2"].show();

      this.axios.get(uri).then(response => {
        this.tarea_aux = response.data;
        this.titulo = this.tarea_aux.titulo;
      });
    },
    realizar(id) {
      this.image = null;
      this.selectedFile = null;
      this.picture = null;
      this.$refs["my-modal2"].hide();
      this.$refs["my-modal"].show();
    },
    addSol() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);

      this.$refs["my-modal"].hide();

      this.solucion.titulo = this.titulo;
      this.solucion.alumno = decoded.nombre;
      this.solucion.profesor = this.tarea_aux.creador;
      this.solucion.foto = this.picture;
      this.solucion.id_alumno = decoded._id;
      this.solucion.opinion = this.opinion;
      let uri = "/soluciones/add";
      this.axios.post(uri, this.solucion);

      this.ima = false;
      this.uploadValue = 0;
      this.titulo = this.tarea_aux.creador = this.solucion = this.picture = "";
    },
    valorar(num) {
      this.solucion.numero = num;
      if (num == 0) this.mostrar = true;
      else this.mostrar = false;
      // this.solucion.opinion = num;
    },
    onFileSelected(event) {
      this.uploadValue = 0;
      this.ima = true;
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const storageRef = firebase
        .storage()
        .ref(`/soluciones/${this.selectedFile.name}`);
      const task = storageRef.put(this.selectedFile);
      task.on(
        "state_changed",
        snapshot => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = percentage;
        },
        error => {
          console.log(error.message);
        },
        () => {
          // this.uploadValue = 100;
          task.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    }
  },
  computed: {
    filtro: function() {
      var vm = this;
      var categoria = vm.category;

      if (categoria === "") {
        return vm.tareas;
      } else {
        return vm.tareas.filter(function(tarea) {
          return tarea.categoria === categoria;
        });
      }
    }
  }
};
</script>

<style scoped>
.tama {
  width: 200px;
  text-align: center;
  margin: auto;
}
.styleBB {
  background-color: #961b27;
}

.styleAA {
  background-color: #dc3545;
}

.styleC {
  background-color: #28a745;
}

.styleD {
  background-color: #1b6d2e;
}

.titulo2 {
  font-family: Quicksand;
  font-weight: bold;
  font-size: 4em;
}

@media only screen and (max-width: 1000px) {
  .titulo2 {
    font-size: 3em;
  }
  .info {
    font-size: 30px !important;
  }
}

@media only screen and (max-width: 540px) {
  .titulo2 {
    font-size: 3em;
    padding-left: 0px;
  }
}

img {
  border: 0px;
}

@media only screen and (max-width: 770px) {
  .col-lg-9.col-md-6.col-xs-6 {
    text-align: center;
    margin-bottom: 20px;
  }
  .row.pt-5.pr-5 {
    padding: 30px !important;
  }
  .row.justify-content-md-center {
    margin-top: 0px !important;
  }
  .info {
    font-size: 35px !important;
  }
}
@media only screen and (max-width: 643px) {
  .hide {
    display: none;
  }
}

.valora {
  font-size: 3em;
}

.centerTable {
  margin: 0px auto;
  text-align: center;
}
</style>
