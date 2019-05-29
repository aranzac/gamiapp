<template>
  <div>
    <h1>Tareas</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'tareas' }" class="btn btn-primary">Crear tareas</router-link>
      </div>
    </div>
    <br>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripcion</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarea in tareas" :key="tarea._id">
          <td>{{ tarea.nombre }}</td>
          <td>{{ tarea.apellido }}</td>
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
</template>

<script>
export default {
  data() {
    return {
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
    deletePost(id) {
      // let uri = `http://localhost:` + process.env.PORT + `/posts/delete/${id}`;
      let uri = `/tareas/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.tareas.splice(this.tareas.indexOf(id), 1);
      });
    }
  }
};
</script>