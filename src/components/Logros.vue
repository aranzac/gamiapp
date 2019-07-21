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
                    <th scope="col">Se necesita</th>
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
.card.mb-5 {
  margin-top: 60px;
}
image {
  padding: 0px;
}
.icono {
  padding: 0px;
  height: 45px;
  width: 45px;
  margin: 0px;
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
