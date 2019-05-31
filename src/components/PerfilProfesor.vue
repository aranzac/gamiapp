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

          <b-modal ref="my-modal" hide-footer title="Crear tareas">
            <div class="d-block">
              <form @submit.prevent="addPost">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Título</label>
                      <input type="text" class="form-control" v-model="tarea.titulo" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Descripción</label>
                      <textarea class="form-control" v-model="tarea.descripcion" rows="5" required></textarea>
                    </div>
                  </div>
                </div>
                <br>
                <div class="form-group text-center">
                  <button class="btn btn-primary">Create</button>
                </div>
              </form>
            </div>
          </b-modal>

          <h2>Tareas creadas</h2>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Descripcion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="task in tareas" :key="task._id">
                  <td>{{ task.titulo }}</td>
                  <td>{{ task.descripcion }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarea: {},
      tareas: []
    };
  },

  created() {
    // let uri = "http://localhost:" + process.env.PORT + "/posts";
    let uri = "/tareas";

    this.axios.get(uri).then(response => {
      this.tareas = response.data;
    });
  },
  methods: {
    addPost() {
      let uri = "/tareas/add";
      this.axios.post(uri, this.tarea).then(() => {
        this.$router.push({ name: "profesor" });
      });
      hideModal();
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