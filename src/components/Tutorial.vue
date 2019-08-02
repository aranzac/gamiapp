<template>
  <div class="container">
    <div class="row pt-5 pr-5 pl-5">
      <h1 class="titulo2 col-lg-9 col-md-9 col-xs-9">
        Tutorial
        <a
          class="text-justify"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="right"
          data-content="Haz click en alguno de los temas para consultarlo "
        >
          <i class="fas fa-info-circle text-warning info" style="font-size:50px"></i>
        </a>
      </h1>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="p-2" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info">¿Qué es Gami?</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">¿Cómo jugar?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text2 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-9 variant="info">¿Cómo guardar la app?</b-button>
            </b-card-header>
            <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text9 }}</b-card-text>

                <br />
                <b-card-text>
                  <b>{{text10}}</b>
                </b-card-text>
                <br />
                <div align="center">
                  <img class="pasos" alt="Paso 1" src="../assets/paso1IOS.png" />
                  <img class="pasos" alt="Paso 2" src="../assets/paso2IOS.png" />
                  <img class="pasos" alt="Paso 3" src="../assets/paso3IOS.png" />
                </div>

                <br />
                <b-card-text>
                  <b>{{text11}}</b>
                </b-card-text>
                <br />
                <div align="center">
                  <img class="pasos" alt="Paso 1" src="../assets/paso1IOS.png" />
                  <img class="pasos" alt="Paso 2" src="../assets/paso2IOS.png" />
                  <img class="pasos" alt="Paso 3" src="../assets/paso3IOS.png" />
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="info">Perfiles</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>
                  {{ text3 }}
                  <ul>
                    <li>
                      <b>Alumno o alumna</b>: tipo de usuario que quiere jugar y aprender Pensamiento Computacional. Obtendrá los puntos cuando un profesor o profesora lo evalúe
                    </li>
                    <li>
                      <b>Profesor o profesora</b>: tipo de usuario que creará tareas y las corregirá puntuando a los alumnos.
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-4 variant="info">Perfil de alumno</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text4 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-5 variant="info">Perfil de profesor</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text5 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-6 variant="info">Rankings</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text6 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-7 variant="info">Niveles</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text7 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-8 variant="info">Logros</b-button>
            </b-card-header>
            <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-justify">
                <b-card-text>{{ text8 }}</b-card-text>
                <router-link to="/logros" class="nav-link text-primary">Ver todos los logros</router-link>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Es una plataforma que permite aprender conceptos del Pensamiento Computacional mediante actividades propuestas por profesores y profesoras que serán realizadas por alumnos y alumnas tanto en la escuela como en casa.",
      text2: `Cuando accedas a tu cuenta, en la pestaña "Actividades" podrás encontrar distintas tareas sobre los conceptos del Pensamiento Computacional. Están diseñadas para realizarse a mano, en tu casa o en la escuela. Cuando la hayas terminado, haz click en "Realizar" y rellena el formulario. Para que el profesor o profesora que creó esa tarea pueda evaluarte correctamente, es conveniente que subas una foto para demostrar que la has terminado. `,
      text3:
        "Al crear una cuenta puedes elegir entre dos roles: como profesor y como alumno:",
      text4:
        "Si tienes un perfil de alumno o alumna puedes encontrar tus datos, puntuación, nivel actual y tu progreso. Además a medida que juegues obtendrás logros de todo tipo.",
      text5:
        "Si tienes un perfil de profesor o profesora puedes encontrar tus datos personales, la tareas que has creado, y las soluciones de los alumnos a dichas actividades. Además puedes crear nuevas actividades y borrarlas a tu gusto. Tu misión principal será evaluar estas soluciones a las actividades.",
      text6:
        "En la pestaña Rankings podrás consultar tu posición dentro del ranking de todos los usuarios. ¡Cuando llegues al primer puesto conseguirás un logro!",
      text7:
        "Para subir de nivel debes esperar a que un profesor o profesora evalúe las actividades que has realizado previamente. A medida que subas de nivel el juego se irá complicando y necesitarás más puntos para pasar al siguiente. Si eres constante y te conectas una semana seguida obtendrás una racha que bonificará tus puntuaciones siguientes. Desde que no te conectes un día perderás dicha racha :(",
      text8:
        "Los logros te ayudan a reconocer tu trabajo y tu progreso. Cada vez que superes un nivel obtendrás el logro correspondiente. Sé el o la mejor para ganar más logros que nadie. Puedes consultar todos los logros disponibles en el siguiente enlace",
      text9:
        "Para guardar la página web de Gami en la pantalla principal de tu dispositivo debes seguir los siguientes pasos según el sistema operativo: ",
      text10: "IOS (Debe ser con el navegador safari): ",
      text11: "Android (Con Google Chrome): "
    };
  },
  created() {
    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
};
</script>


<style scoped>
b-card-text {
  text-align: justify;
}
p.card-text {
  text-transform: none;
}

.title {
  font-size: 4.5em;
  padding: 70px 0px 30px 0px;
  letter-spacing: 1px;
  font-family: "Quicksand";
}

/* .title2 {
  font-size: 4em;
  letter-spacing: 1px;
  padding-top: 70px;
  padding-bottom: 30px;
  font-family: "Pacifico";
} */

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

@media only screen and (max-width: 370px) {
  .title {
    font-size: 4em;
  }
  .p-3 {
    padding: 0px !important;
  }
  .info {
    font-size: 35px !important;
  }
}

.pasos {
  border: 0px;
  max-width: 60%;
  max-height: 60%;
  margin: 0px !important;
  display: block;
}

@media only screen and (max-width: 790px) {
  img.pasos {
    min-width: 80%;
    min-height: 80%;
  }
  .titulo2 {
    text-align: center !important;
  }
}

@media only screen and (max-width: 475px) {
  img.pasos {
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
