<template>
  <div class="bigbox">
    <div class="col-lg-12 title-content">
      <h1 class="title text-white">Bienvenid@</h1>
    </div>
    <div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-12">
            <b-card
              bg-variant="warning"
              text-variant="white"
              class="mb-2"
              style="max-width: 30rem;"
            >
              <b-card-text id="preguntas" class="d-block">¿Ya tienes una cuenta?</b-card-text>
              <b-button
                href="/iniciosesion"
                style="font-weight: bold;"
                variant="light"
              >Iniciar sesión</b-button>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <b-card
              bg-variant="warning"
              text-variant="white"
              class="mb-2"
              tag="article"
              style="max-width: 30rem;"
            >
              <b-card-text id="preguntas" class="d-block">¿Quieres crear una nueva cuenta?</b-card-text>
              <b-button style="font-weight: bold;" variant="light">
                <router-link to="/registro" class="nav-link">Regístrate</router-link>
              </b-button>
            </b-card>
          </div>
        </div>
      </div>
      <!-- <row>
        <div class="col-md-6">
          <b-card
            bg-variant="warning"
            text-variant="white"
            class="mb-2"
            tag="article"
            style="max-width: 20rem;"
          >
            <b-card-text>¿Ya tienes una cuenta?</b-card-text>
            <b-button href="#" variant="light">Iniciar sesión</b-button>
          </b-card>
        </div>
      </row>
      <row>
        <div class="col-md-6">
          <b-card
            bg-variant="warning"
            text-variant="white"
            class="mb-2"
            tag="article"
            style="max-width: 20rem;"
          >
            <b-card-text>¿Quieres crear una nueva cuenta?</b-card-text>
            <b-button href="#" variant="light">Regístrate</b-button>
          </b-card>
        </div>
      </row>
      </div>-->
      <!-- <div class="col-md-8">
      <div class="card card-default">
        <div class="card-header">Home Component</div>

        <div class="card-body">I'm the Home NO Component component.</div>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style>
#preguntas {
  font-size: 1.5em;
  letter-spacing: 1px;
  font-family: "Quicksand";
  font-weight: bold;
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  text-align: center;
}
.title {
  font-size: 6em;
  letter-spacing: 1px;
  padding-top: 90px;
  padding-bottom: 60px;
  font-family: "Pacifico";
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bigbox {
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  background-image: url("../assets/back2.jpg");
  height: calc(100vh - 78px);
  text-align: center;
}

@media only screen and (max-width: 1077px) {
  .half {
    width: 60%;
  }
}
@media only screen and (max-width: 540px) {
  .title {
    font-size: 4.5em;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  h2 {
    font-size: 1.5em;
  }
  .half {
    width: 80%;
    margin-top: 5px;
  }
}

@media only screen and (max-width: 540px) {
  .title {
    font-size: 3.5em;
  }
  h2 {
    font-size: 1.2em;
  }
}

.row {
  margin: 0 !important;
}
</style>
