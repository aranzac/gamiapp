<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card mb-5" style="width: 70rem;">
            <h1 class="text-center">Logros</h1>

            <div class="table-responsive-sm mt-3">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Icono</th>
                    <th scope="col">Logro</th>
                    <th scope="col">Requisito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="logro in logros" :key="logro._id">
                    <th scope="row">
                      <img title="Icono del logro" class="icono" :src="logro.imagen" />
                    </th>
                    <td>{{logro.titulo}}</td>
                    <td>{{logro.descripcion}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      email: "",
      password: "",
      warning1: false,
      warning2: false,
      logros: []
    };
  },
  created() {
    this.axios.post("logros/add");
    this.axios.get("logros/").then(response => {
      this.logros = response.data;
      console.log(this.logros);
    });
  }
};
</script>


<style scoped>
.card.mb-5 {
  margin-top: 60px;
}
image {
  padding: 0px;
}
.icono {
  padding: 0px;
  height: 40px;
  width: 40px;
  margin: 0px;
  border-radius: 20px;
  border: 0px solid #232324;
}

@media only screen and (max-width: 1147px) {
  .card {
    width: 50rem !important;
  }
}
@media only screen and (max-width: 870px) {
  .card {
    width: 40rem !important;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width: 30rem !important;
  }
}
@media only screen and (max-width: 521px) {
  .card {
    width: 20rem !important;
  }
}
@media only screen and (max-width: 320px) {
  .card {
    width: 18rem !important;
  }
}
</style>
