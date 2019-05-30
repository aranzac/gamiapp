<template>
  <div id="cuerpo">
    <div class="row">
      <div class="mt-3 col-lg-4 col-md-12 col-xs-12">
        <div class="card card1 shadow-sm" style="width: 25rem;">
          <h2 class="mt-2">Perfil profesor</h2>

          <div class="card-body"></div>
        </div>
      </div>
      <div class="mt-3 col-lg-8 col-md-12 col-xs-12">
        <div class="card card2 shadow-sm">
          <div class="row">
            <div class="col-lg-12 text-right">
              <b-button variant="primary" @click="showModal">
                <b>Añadir</b>
                <i class="fa fa-plus-square ml-2"></i>
              </b-button>
            </div>
          </div>

          <!-- <b-modal id="modal-1" title="Crear tarea">
            <form @submit.prevent="addPost" action="submit">
                
              <b-form-group label="Título" label-for="input-1">
                <b-form-input trim></b-form-input>
              </b-form-group>
              <b-form-group label="Descripción" label-for="input-1">
                <b-form-textarea id="textarea" v-model="text" rows="3" max-rows="6"></b-form-textarea>
              </b-form-group>
            </form>
          </b-modal>-->
          <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
          <!-- <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button> -->

          <b-modal ref="my-modal" hide-footer title="Crear tarea">
            <div class="d-block">
              <form @submit.prevent="addPost" action="submit">
                <b-form-group label="Título" label-for="input-1">
                  <b-form-input trim></b-form-input>
                </b-form-group>
                <b-form-group label="Categoría" label-for="input-3">
                  <select class="form-control">
                    <option value disabled selected></option>
                    <option>Ordenación</option>
                    <option>Descomposición</option>
                    <option>Reconocimiento de patrones</option>
                    <option>Abstracción</option>
                    <option>Algoritmos</option>
                  </select>
                </b-form-group>
                <b-form-group label="Descripción" label-for="input-3">
                  <b-form-textarea id="textarea" v-model="text" rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>
              </form>
            </div>
            <div class="text-center">
              <b-button class="mt-2" variant="primary" @click="hideModal">
                <b>Enviar</b>
              </b-button>
            </div>
          </b-modal>

          <h2>Tareas creadas</h2>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tarea in tareas" :key="tarea._id">
                  <td>{{ tarea.titulo }}</td>
                  <td>{{ tarea.categoria }}</td>
                  <td>
                    <router-link
                      :to="{name: 'edit', params: { id: tarea._id }}"
                      class="btn btn-primary"
                    >Edit</router-link>
                  </td>
                  <td>
                    <button class="btn btn-danger" @click.prevent="deletePost(tarea._id)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- <pre>{{ $data | json }}</pre> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarea: {}
    };
  },
  methods: {
    addPost() {
      // let uri = "http://localhost:4000/posts/add";
      let uri = "/tareas/add";
      this.axios.post(uri, this.tarea).then(() => {
        this.$router.push({ name: "tareas" });
      });
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>

<style>
@media (min-width: 1200px) {
  .col-lg-4 {
    display: block;
  }
}

@media only screen and (max-width: 1200px) {
  .card1 {
    width: 20em !important;
  }
}
</style>
