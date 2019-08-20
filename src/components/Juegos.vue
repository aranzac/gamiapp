<template>
  <div class="container">
    <div class="row pt-5 pr-5 pl-5">
      <h1 class="col-lg-9 col-md-6 col-xs-6 titulo2">
        Juegos
        <a
          class="text-justify"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="bottom"
          data-content="Podrás practicar el Pensamiento Computacional con estos pequeños juegos. Elige el tema, luego el juego, y cuando hayas terminado haz click en 'Comprobar' y después en 'Obtener puntos para que se sumen a tus puntos actuales.'"
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
        <option value="Pensamiento iterativo">Pensamiento iterativo</option>
        <option value="Algoritmos">Algoritmos</option>
        <option value="Depuración">Depuración</option>
        <option style="background-color: lightgrey; color: grey;" value>Eliminar filtros</option>
      </select>
    </div>

    <div class="row justify-content-md-center mt-5">
      <div class="col-md-8 col-xs-6 col-md-auto">
        <table align="center" class="table centerTable table-hover table-sm mb-5">
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="juego in filtro" :key="juego._id">
              <td>{{ juego.titulo }}</td>
              <td>{{ juego.categoria }}</td>
              <td>
                <router-link :to="{ name: 'Juego', params: {id: juego._id } }">
                  <b-button type="submit" variant="info" class="btn text-light">
                    <b>¡Jugar!</b>
                  </b-button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { METHODS } from "http";
export default {
  data: function() {
    return {
      titulo: "",
      directorio: "",
      categoria: "",
      juego: "",
      category: "",
      carpeta: "",
      todos: []
    };
  },
  created() {
    this.axios.get("/juegos").then(res => {
      this.todos = res.data;
    });
  },
  mounted() {
    // let src = document.createElement("script");
    // src.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.min.js");
    // document.head.appendChild(src);
  },

  methods: {
    add() {
      this.axios
        .post("juegos/add", {
          titulo: this.titulo,
          categoria: this.categoria,
          carpeta: this.carpeta
        })
        .then(res => {
          this.axios.get("/juegos").then(res => {
            this.todos = res.data;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    filtro: function() {
      var vm = this;
      var categoria = vm.category;

      if (categoria === "") {
        return vm.todos;
      } else {
        return vm.todos.filter(function(juego) {
          return juego.categoria === categoria;
        });
      }
    }
  }
};
</script>

<style >
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
