<template>
  <div class="container">
    <div class="row pt-5 pr-5 pl-5">
      <h1 class="col-lg-9 col-md-6 col-xs-6">
        Todas las actividades
        <a
          class="text-justify"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="bottom"
          data-content="Estas actividades te permiten aprender Pensamiento Computacional mientras realizas una tarea en tu aula o incluso en tu casa. Busca una que te guste, sigue las instrucciones y finalmente rellena el formulario para que un profesor pueda valorar tu actividad."
        >
          <i class="fas fa-info-circle text-warning"></i>
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
        <option value="Pensamiento">Pensamiento iterativo</option>
        <option value="Algoritmos">Algoritmos</option>
        <option value="Depuración">Depuración</option>
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
                      </div>
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
                        <input type="file" @change="onFileSelected" required />
                        <div align="center">
                          <img width="320" :src="picture" />
                          <button
                            class="btn btn-warning text-light d-block"
                            type="button"
                            @click="onUpload"
                          >Subir</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="form-group text-center">
                    <button class="btn btn-primary">Añadir tarea</button>
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
      titulo: "",
      mostrar: false,
      selectedFile: null,
      foto: "",
      picture: null
    };
  },
  created() {
    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });

    this.solucion.numero = -1;
    this.solucion.opinion = 0;
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
      this.solucion.alumno = decoded._id;
      this.solucion.profesor = this.tarea_aux.creador;
      this.solucion.foto = this.picture;

      let uri = "/soluciones/add";
      this.axios.post(uri, this.solucion);
    },
    valorar(num) {
      this.solucion.numero = num;
      if (num == 0) this.mostrar = true;
      else this.mostrar = false;
      this.solucion.opinion = num;
    },
    onFileSelected(event) {
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
          // this.uploadValue = percentage
        },
        error => {
          console.log(error.message);
        },
        () => {
          // this.uploadValue = 100;
          task.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            console.log(this.picture);
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
