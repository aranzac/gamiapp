<template>
  <div>
    <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-mg-2 col-xs-0"></div>
          <div class="col-lg-8 col-mg-10 col-xs-12">
            <div id="card-form" class="card">
              <h2 class="text-center mt-2">Usuarios</h2>
              <div class="row">
                <div class="col-md-10 mt-1"></div>

                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Posición</th>
                      <th>Usuario</th>
                      <th>Periodo</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in even(usuarios)">
                      <td>{{ user.key }}</td>
                      <td>{{ user.nombre }} {{user.apellido}}</td>
                      <td>{{ user.periodo }}</td>
                      <td>{{ user.puntuacion }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    let uri = "/usuarios";

    this.axios.get(uri).then(response => {
      this.usuarios = response.data;
    });
  },
  methods: {
    even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return b.puntuacion - a.puntuacion;
      });
    }
  }
};
</script>