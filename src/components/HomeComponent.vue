<template>
  <div class="bigbox">
    <div class="col-lg-12 title-content">
      <h1 class="title text-white">Bienvenid@</h1>
    </div>
    <div class="row half bg-light"></div>
    <!-- <div class="col-md-8">
      <div class="card card-default">
        <div class="card-header">Home Component</div>

        <div class="card-body">I'm the Home NO Component component.</div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style>
.half {
  width: 40%;
  margin: auto;
  border-radius: 20px;
  margin-top: 20px;
}

.ppal-bottom {
  background-color: rgb(106, 180, 209);
  color: white;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
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
  height: 100vh;
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
