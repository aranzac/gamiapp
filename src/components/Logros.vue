<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="card mb-5" style="width: 70rem;">
            <h1 class="text-center">Logros</h1>
            <!-- <table align="center" class="table centerTable table-hover table-sm">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col"></th>
                  <th scope="col">Logro</th>
                  <th scope="col">Se necesita</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img class="icono" src="../assets/visor.png" />
                  </td>
                  <td></td>

                  <td>A mitad de camino</td>
                  <td>Superar el primer nivel</td>
                </tr>
              </tbody>
            </table>-->
            <div class="table-responsive-sm mt-3">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <img class="icono" src="../assets/visor.png" />
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img class="icono" src="../assets/visor.png" />
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <section id="loginform" class="outer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-mg-10 col-xs-12">
            <div id="card-form" class="card mb-5" >
              <h1 class="text-center">Logros</h1>
              <div class="row">
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
                    <tr>
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
                      <td>{{ }}</td>
                      <td>{{ }}</td>
                      <td>{{}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
// const token = localStorage.usertoken;
// const decoded = jwtDecode(token);
// export default {
//   data() {
//     return {
//       email: "",
//       password: "",
//       warning1: false,
//       warning2: false
//     };
//   },

//   methods: {
//     login() {
//       console.log("login");
//       // router.push({ name: "perfil" });

//       this.axios
//         .post("/usuarios/login", {
//           email: this.email,
//           password: this.password
//         })
//         .then(res => {
//           if (res.data.error !== undefined) {
//             if (res.data.error == "1") {
//               this.warning2 = false;
//               this.warning1 = true;
//             } else if (res.data.error == "2") {
//               this.warning1 = false;
//               this.warning2 = true;
//             }
//           } else {
//             localStorage.setItem("usertoken", res.data);

//             if (decoded.rol == "alumno") this.$router.push({ name: "perfil" });
//             else if (decoded.rol == "profesor")
//               this.$router.push({ name: "profesor" });
//           }
//         })
//         .catch(err => {});
//       this.emitMethod();
//     },
//     emitMethod() {
//       EventBus.$emit("logged-in", "loggedin");
//     }
//   }
// };
</script>


<style scoped>
image {
  padding: 0px;
}
.icono {
  padding: 0px;
  height: 45px;
  width: 45px;
  margin: 0px;
}
</style>
