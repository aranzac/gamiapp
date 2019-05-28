<template>
  <div>
    <h1>Usuarios</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'registro' }" class="btn btn-primary">Registrar usuario</router-link>
      </div>
    </div>
    <br>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usuarios" :key="user._id">
          <td>{{ user.nombre }}</td>
          <td>{{ user.apellido }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: []
    };
  },
  created() {
    // let uri = "http://localhost:" + process.env.PORT + "/posts";
    let uri = "/usuarios";

    this.axios.get(uri).then(response => {
      this.usuarios = response.data;
    });
  }
};
</script>