<template>
  <div>
    <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-mg-2 col-xs-0"></div>
          <div class="col-lg-8 col-mg-10 col-xs-12">
            <div id="card-form" class="card mb-5">
              <h1 class="text-center mt-2">Ranking</h1>
              <div class="row">
                <div class="col-md-10 mt-1"></div>

                <table align="center" class="table centerTable table-hover table-sm">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Periodo</th>
                      <th scope>Puntuación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in even(usuarios)" v-bind:key="user._id">
                      <td class="cuadradito">
                        <i
                          class="fa fa-trophy"
                          style="color:#f2ce00;"
                          v-if="index==0"
                          title="Usuario con la puntuación más alta"
                        ></i>
                        <i
                          class="fa fa-trophy"
                          style="color:#bebebe;"
                          v-if="index==1"
                          title="Usuario con la 2ª puntuación más alta"
                        ></i>
                        <i
                          class="fa fa-trophy"
                          style="color:#cd7f32 ;"
                          v-if="index==2"
                          title="Usuario con la 3ª puntuación más alta"
                        ></i>
                      </td>
                      <th scope="row">{{ index + 1 }}º</th>
                      <td>{{ user.nombre }}</td>
                      <td>{{ user.periodo }}</td>
                      <td>{{user.puntuacion}}</td>
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

<style scoped>
h1 {
  font-family: Quicksand;
  font-weight: bold;
}

@media only screen and (max-width: 500px) {
  th {
    padding-right: 6px !important;
    padding-left: 6px !important;
    font-size: 0.9em;
  }

  i {
    font-size: 15px !important;
  }
}
@media only screen and (max-width: 360px) {
  th {
    padding-right: 3px !important;
    padding-left: 3px !important;
    font-size: 0.8em;
  }

  i {
    font-size: 14px !important;
  }
}

.centerTable {
  margin: 0px auto;
  text-align: center;
}

.cuadradito {
  /* display: inline; */
  /* padding-right: 5px; */
  margin-top: 4px;
}

i {
  font-size: 30px;
}
</style>


<script >
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
      return arr.slice().sort(function(a, b) {
        return b.puntuacion - a.puntuacion;
      });
    },
    doMath: function(index) {
      return index + 1;
    }
  }
};
</script>