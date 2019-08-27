<template>
  <div class="main">
    <vue-headful :title="$route.name + ' - ' + juego.titulo" />

    <div class="row justify-content-md-center alert">
      <div id="grupo_top" class="col-lg-12 col-md-12 col-xs-12">
        <div v-if="nuevos_puntos" class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="fa fa-exclamation-circle">&nbsp;&nbsp;</i>
          ¡Has obtenido {{ puntos_finales }} puntos de experiencia!
        </div>

        <div v-if="sin_puntos" class="alert alert-danger alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <i class="fa fa-exclamation-circle">&nbsp;&nbsp;</i>
          No has obtenido ningún punto. Vuélvelo a intentar.
        </div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/juegos">Juegos</router-link>
            </li>

            <li class="breadcrumb-item active" aria-current="page">{{this.juego.titulo}}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="col-lg-11">
        <div class="jumbotron">
          <h1 class="titulo-juego">{{juego.titulo}}</h1>
          <div class="h5p-container"></div>
        </div>
      </div>
    </div>

    <div align="center">
      <b-button
        id="enviarPuntos"
        variant="warning"
        class="text-light"
        @click="myfuncion()"
        :disabled="!resultado"
      >
        <b>Obtener puntos</b>
      </b-button>
    </div>
    <!-- <form v-on:submit.prevent="pedir" class="col-lg-12">
      <input type="text " v-model="juego" />Opción
      <b-button type="submit" variant="warning" class="text-light">
        <b>Pedir juego</b>
      </b-button>
    </form>-->
    <!-- <p>{{puntos}}</p> -->
  </div>
</template>
 
<script>
import jwtDecode from "jwt-decode";

export default {
  data: function() {
    return {
      who: "world!",
      juego: "",
      titulo: "",
      puntos: "",
      resultado: true,
      sin_puntos: false,
      nuevos_puntos: false,
      puntos_finales: ""
    };
  },
  created() {
    let src = document.createElement("script");
    src.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.min.js");
    document.head.appendChild(src);

    var uri = `/juegos/${this.$route.params.id}`;
    this.axios.get(uri).then(res => {
      this.juego = res.data;
      this.titulo = this.juego.titulo;
      var str1 = "/h5p_juegos/workspace/";

      var str2 = this.juego.carpeta;
      var res = str1.concat(str2);

      (function($) {
        $(function() {
          $(".h5p-container").h5p({
            id: 1, // OPTIONAL id change this if using multiple h5ps on the same page
            frameJs: "/h5p_juegos/dist/js/h5p-standalone-frame.min.js", // OPTIONAL if you move the location of h5p-standalone-frame.min.js
            frameCss: "/h5p_juegos/dist/styles/h5p.css", // OPTIONAL if you move the location of h5p.css
            h5pContent: res, // Location of the unpacked H5P content,
            displayOptions: {
              // OPTIONAL hide the frame or download, export etc. buttons they are visible by default
              frame: true,
              copyright: true,
              embed: false,
              download: false,
              icon: true,
              export: false
            }
          });
        });
      })(H5P.jQuery);
    });
  },
  mounted() {
    let recaptchaLink4 = document.createElement("script");
    recaptchaLink4.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.js");
    document.head.appendChild(recaptchaLink4);
    let src2 = document.createElement("script");
    src2.setAttribute(
      "src",
      "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/librerias%2Fh5p-standalone-main.js?alt=media&token=3162952e-7ed4-49d2-8ea0-10c6c60050b8"
    );
    document.head.appendChild(src2);
    let src3 = document.createElement("script");
    src3.setAttribute(
      "src",
      "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/librerias%2Fh5p-standalone-main.min.js?alt=media&token=823674b3-fd43-4700-ae5f-d51a34e0d090"
    );
    document.head.appendChild(src3);
  },
  methods: {
    pedir() {
      var str1 = "/h5p_juegos/workspace/";
      var str2 = this.carpeta;
      var res = str1.concat(str2);

      (function($) {
        $(function() {
          $(".h5p-container").h5p({
            id: this.juego._id,
            frameJs: "/h5p_juegos/dist/js/h5p-standalone-frame.min.js",
            frameCss: "/h5p_juegos/dist/styles/h5p.css",
            h5pContent: res, // Carpeta con el contenido
            displayOptions: {
              frame: true,
              copyright: true,
              embed: false,
              download: false,
              icon: true,
              export: false
            }
          });
        });
      })(H5P.jQuery);

      $(document).ready(function() {
        $('[data-toggle="popover"]').popover();
      });
    },

    myfuncion() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);

      var iframe = document.querySelector("#h5p-iframe-1");

      var iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      if (!iframeDocument) {
        throw "iframe couldn't be found in DOM.";
      }

      var obtenidos = iframeDocument.querySelector(
        ".h5p-joubelui-score-number-counter"
      );

      var totales = iframeDocument.querySelector(".h5p-joubelui-score-max");

      this.puntos = obtenidos.textContent;
      if (this.puntos != undefined && this.puntos != null) {
        var puntos_totales = Math.round(
          (((obtenidos.textContent / totales.textContent) * 100 * 50) / 100) *
            1.5
        );
        console.log(puntos_totales);
        console.log(obtenidos);

        console.log(totales);
        console.log(this.juego._id);

        // Si obtiene la mayor puntuación añade que ha jugado un juego
        if (puntos_totales != 0) {
          var completo = false;
          if (obtenidos.textContent == totales.textContent) {
            completo = true;
          }
          this.axios
            .post("/usuarios/earn", {
              _id: decoded._id,
              puntuacion: puntos_totales,
              maximo: completo,
              id_juego: this.juego._id
            })
            .then(res => {
              this.nuevos_puntos = true;
              this.puntos_finales = res.data.puntos;
            });
        } else this.sin_puntos = true;
      }
    }
  }
};
</script>
 
<style scoped>
#enviarPuntos:disabled {
  background-color: lightgray;
  color: grey;
  border-color: lightgray;
}
@media only screen and (min-width: 996px) {
  #grupo_top {
    padding-right: 54px;
    padding-left: 54px;
  }
}

@media only screen and (max-width: 455px) {
  #grupo_top {
    padding-right: 0px;
    padding-left: 0px;
  }
}

@media only screen and (max-width: 356px) {
  ol.breadcrumb {
    /* font-size: 0.8em; */
    padding: 5px;
    padding-left: 10px;
    text-align: center;
    font-size: 0.9em;
  }
}
.main {
  /* margin-top: 25px; */
  margin-bottom: 45px;
}

.titulo {
  font-family: Quicksand;
  font-weight: bold;
  margin-bottom: 20px;
}

.titulo-juego {
  font-size: 2em;
  color: black;
  font-weight: bold;

  font-family: Quicksand;
}

/* .bread {
  padding: 20px;
} */

.alert {
  margin-top: 20px;
}

.jumbotron {
  padding: 40px;
}

@media only screen and (max-width: 550px) {
  .jumbotron {
    padding: 20px;
  }
  .titulo-juego {
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
  }
}

.padding-0 {
  padding: 0px;
}
</style>
