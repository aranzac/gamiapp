<template>
  <div class="bigbox">
    <div class="col-lg-12 title-content">
      <h1 class="title text-white">Bienvenid@s</h1>
    </div>
    <div>
      <!-- <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-12">
            <b-card
              bg-variant="warning"
              text-variant="white"
              class="mb-1"
              tag="article"
              style="max-width: 30rem;"
            >
              <b-card-text class="d-block preguntas">¿Tienes una cuenta?</b-card-text>
              <b-button style="font-weight: bold;" variant="light">
                <router-link to="/iniciosesion" class="nav-link">Iniciar sesión</router-link>
              </b-button>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <b-card
              bg-variant="warning"
              text-variant="white"
              class="mb-1"
              tag="article"
              style="max-width: 30rem;"
            >
              <b-card-text class="d-block preguntas">¿Quieres crear una nueva cuenta?</b-card-text>
              <b-button style="font-weight: bold;" variant="light">
                <router-link to="/registro" class="nav-link">Regístrate</router-link>
              </b-button>
            </b-card>
          </div>
        </div>
      </div>-->
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
.preguntas {
  font-size: 1.2em;
  letter-spacing: 0.8px;
  font-family: "Quicksand";
  font-weight: bold;
}
.card {
  margin: 0 auto; /* Added */
  /* float: none;  */
  margin-bottom: 10px; /* Added */
  text-align: center;
}
.title {
  font-size: 6em;
  letter-spacing: 1px;
  padding-top: 90px;
  padding-bottom: 60px;
  font-family: "Pacifico";
  /* text-shadow: 4px 3px 0 #7a7a7a; */
  /* text-shadow: 2px 2px 0px rgba(62, 67, 57, 1); */
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.b-navbar-nav {
  background-color: transparent !important;
}

.links {
  padding-top: 15px;
}

.bigbox {
  width: 100%;
  margin: 0 auto;
  /* background-size: cover; */
  /* background-image: url("../assets/back2.jpg"); */
  /* height: calc(100vh - 78px); */

  text-align: center;
}

/* .bigbox {
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  background-image: url("../assets/wild-sea.png");
  height: calc(100vh - 70px);
  text-align: center;
  background-repeat: repeat;
} */
/* 
body {
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-image: url("../assets/wild-sea.png");
  background-repeat: repeat;
} */

/* body {
  background-color: #fff311;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23fff311' cx='50' cy='0' r='50'/%3E%3Cg fill='%23ecf123' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d9ee30' cx='50' cy='100' r='50'/%3E%3Cg fill='%23c7ea3b' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b5e746' cx='50' cy='200' r='50'/%3E%3Cg fill='%23a5e250' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%2395de59' cx='50' cy='300' r='50'/%3E%3Cg fill='%2385d961' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%2376d469' cx='50' cy='400' r='50'/%3E%3Cg fill='%2368ce70' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%235bc976' cx='50' cy='500' r='50'/%3E%3Cg fill='%234ec37b' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%2342bd80' cx='50' cy='600' r='50'/%3E%3Cg fill='%2338b784' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%232fb087' cx='50' cy='700' r='50'/%3E%3Cg fill='%2329aa8a' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%2326a38b' cx='50' cy='800' r='50'/%3E%3Cg fill='%23279d8b' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%232b968a' cx='50' cy='900' r='50'/%3E%3Cg fill='%23308f89' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23368886' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
} */

.bigbox {
  /* background-color: #87e5ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1128' height='188' viewBox='0 0 600 100'%3E%3Cg stroke='%23ffffff' stroke-width='3.8' stroke-miterlimit='10' stroke-opacity='0'%3E%3Ccircle fill='%23037B79' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%2392DEBA' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%23f1f1cc' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%23CAF2FF' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%236FCCFF' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23008de7' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23037B79' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%2353ac9a' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%23c8e7bb' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%2387e5ff' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%239de0fe' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%233eadf4' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%230089b3' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23037B79' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%2392DEBA' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%23f1f1cc' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%23CAF2FF' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%236FCCFF' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23008de7' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23037B79' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E");
  /* height: calc(100vh - 68px); */
  /* background-color: #14ccff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='100' viewBox='0 0 600 100'%3E%3Cg stroke='%23FFF' stroke-width='0' stroke-miterlimit='10' %3E%3Ccircle fill='%23037B79' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%2392DEBA' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%238febff' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%236FCCFF' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23006EB4' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23037B79' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%2353ac9a' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%2385e6df' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%2314ccff' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%2387d7ff' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%233e9cda' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%2300789c' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23037B79' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%2392DEBA' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%238febff' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%236FCCFF' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23006EB4' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23037B79' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #ffd900;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='100' viewBox='0 0 600 100'%3E%3Cg stroke='%23FFF' stroke-width='0' stroke-miterlimit='10' %3E%3Ccircle fill='%23ef767a' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%23a46da6' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%231a95ad' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%23ffd900' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%2359e2e8' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%23acd268' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%23ff9364' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23ef767a' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E");
  height: calc(100vh - 68px);
  background-color: #ffd900;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1387' height='231.2' viewBox='0 0 600 100'%3E%3Cg stroke='%23FFF' stroke-width='1.6' stroke-miterlimit='10' %3E%3Ccircle fill='%23ef767a' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%23a46da6' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%231a95ad' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%23ffd900' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%2359e2e8' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%23acd268' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%23ff9364' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23ef767a' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #ffd900;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1013' height='168.8' viewBox='0 0 600 100'%3E%3Cg stroke='%23FFF' stroke-width='0' stroke-miterlimit='10' %3E%3Ccircle fill='%23ef767a' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%23a46da6' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%231a95ad' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%23ffd900' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%2359e2e8' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%23acd268' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%23ff9364' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23ef767a' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #ffd900;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='811' height='135.2' viewBox='0 0 600 100'%3E%3Cg stroke='%23FFF' stroke-width='0' stroke-miterlimit='10' %3E%3Ccircle fill='%23ef767a' cx='0' cy='0' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='0' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='0' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='0' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='0' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='0' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='0' r='50'/%3E%3Ccircle cx='-50' cy='50' r='50'/%3E%3Ccircle fill='%23a46da6' cx='50' cy='50' r='50'/%3E%3Ccircle fill='%231a95ad' cx='150' cy='50' r='50'/%3E%3Ccircle fill='%23ffd900' cx='250' cy='50' r='50'/%3E%3Ccircle fill='%2359e2e8' cx='350' cy='50' r='50'/%3E%3Ccircle fill='%23acd268' cx='450' cy='50' r='50'/%3E%3Ccircle fill='%23ff9364' cx='550' cy='50' r='50'/%3E%3Ccircle cx='650' cy='50' r='50'/%3E%3Ccircle fill='%23ef767a' cx='0' cy='100' r='50'/%3E%3Ccircle fill='%23456990' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%2349beaa' cx='200' cy='100' r='50'/%3E%3Ccircle fill='%239fe2ff' cx='300' cy='100' r='50'/%3E%3Ccircle fill='%2349dcb1' cx='400' cy='100' r='50'/%3E%3Ccircle fill='%23ffb752' cx='500' cy='100' r='50'/%3E%3Ccircle fill='%23ef767a' cx='600' cy='100' r='50'/%3E%3Ccircle cx='50' cy='150' r='50'/%3E%3Ccircle cx='150' cy='150' r='50'/%3E%3Ccircle cx='250' cy='150' r='50'/%3E%3Ccircle cx='350' cy='150' r='50'/%3E%3Ccircle cx='450' cy='150' r='50'/%3E%3Ccircle cx='550' cy='150' r='50'/%3E%3C/g%3E%3C/svg%3E"); */
  background-color: #17a2b8;
  height: calc(100vh - 68px);
}

.bigbox {
  /* background-image: url("https://trianglify.io/p/w:1440!h:900!x:Spectral!v:0.842!c:0.208!s:5yhs7"); */
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
    padding-top: 80px;
  }
  h2 {
    font-size: 1.2em;
  }
}

@media only screen and (max-width: 400px) {
  .title {
    font-size: 3em;
  }
}

.row {
  margin: 0 !important;
}
</style>



