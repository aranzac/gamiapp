<template>
  <div>
    <div class="container">
      <div class="row pt-5 pr-5 pl-5">
        <h1 class="col-lg-9 col-md-6 col-xs-6 titulo2">
          Logros
          <a
            class="text-justify"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="bottom"
            data-content="Estos son todos los logros que puedes conseguir. Sigue jugando para cumplir los requisitos y obtenerlos."
          >
            <i class="fas fa-info-circle text-warning" style="font-size:50px"></i>
          </a>
        </h1>
      </div>
      <div class="row justify-content-md-center mt-5">
        <div class="col-md-6 col-md-auto">
          <!-- <div class="card mb-5" style="width: 70rem;"> -->
          <div class="table-responsive-sm">
            <table class="table table-sm">
              <thead>
                <tr class="text-center">
                  <th scope="col">Icono</th>
                  <th scope="col">Logro</th>
                  <th scope="col">Requisito</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="logro in logros" :key="logro._id">
                  <th scope="row">
                    <img title="Icono del logro" class="icono" :src="logro.imagen" />
                  </th>
                  <td>{{logro.titulo}}</td>
                  <td>{{logro.descripcion}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- </div> -->
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
    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });

    this.axios.post("logros/add");
    this.axios.get("logros/").then(response => {
      this.logros = response.data;
    });
  }
};
</script>


<style scoped>
.titulo2 {
  font-family: Quicksand;
  font-weight: bold;
  font-size: 4em;
}

@media only screen and (max-width: 540px) {
  .titulo2 {
    font-size: 3em;
  }
}

.card.mb-5 {
  margin-top: 40px;
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
