<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card" style="border-radius: 5px; box-shado: black">
        <div class="card-header bg-dark text-white text-center">
          Editar Usuario
        </div>
        <div class="card-body">
          <form v-on:submit="save">
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-file"></i
              ></span>
              <input
                type="number"
                id="cc"
                v-model="cc"
                class="form-control"
                maxlength="50"
                placeholder="Cedula"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-signature"></i
              ></span>
              <input
                type="text"
                id="firtsName"
                v-model="firtsName"
                class="form-control"
                maxlength="50"
                placeholder="Nombre"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-gift"></i
              ></span>
              <input
                type="text"
                id=" lastName"
                v-model="lastName"
                class="form-control"
                maxlength="50"
                placeholder="Apellido"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-arrow-up-9-1"></i
              ></span>
              <input
                type="number"
                id="age"
                v-model="age"
                class="form-control"
                maxlength="50"
                placeholder="Edad"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-phone"></i
              ></span>
              <input
                type="number"
                id="numberPhone"
                v-model="numberPhone"
                class="form-control"
                maxlength="50"
                placeholder="Celular"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-circle"></i
              ></span>
              <input
                type="text"
                id="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                placeholder="Correo"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-lock"></i
              ></span>
              <input
                type="text"
                id=" password"
                v-model="password"
                class="form-control"
                maxlength="50"
                placeholder="Contraseña"
                required
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-gift"></i
              ></span>
              <input
                type="query"
                id=" query"
                class="form-control"
                v-model="query"
                maxlength="50"
                placeholder="Lugar Para Guardar En Ruta"
                required
              />
            </div>

            <div class="d-grid col-4 mx-auto w-100 d-flex justify-center">
              <button class="btn btn-dark w-25 m-3" style="color: aqua">
                <i class="fa-solid fa-floppy-disk"></i>Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";
import { routeLocationKey, useRoute } from "vue-router";

export default defineComponent({
  data() {
    return {
      id: 0,
      cc: "",
      firtsName: "",
      lastName: "",
      age: "",
      numberPhone: "",
      email: "",
      password: "",
      query: "",
      url: `http://localhost:5400/users/user-details?id=`,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url = this.url + this.id.toString();

    this.getUser();
  },
  methods: {
    getUser() {
      axios.get(this.url).then((response) => {
        this.cc = response.data.data["cc"];
        this.firtsName = response.data.data["firtsName"];
        this.lastName = response.data.data["lastName"];
        this.age = response.data.data["age"];
        this.numberPhone = response.data.data["numberPhone"];
        this.email = response.data.data["email"];
        this.password = response.data.data["password"];
        this.query = response.data.data["query"];
        console.log(response);
      });
    },

    save() {
      let data = {
        cc: this.cc,
        firtsName: this.firtsName,
        lastName: this.lastName,
        age: this.age,
        numberPhone: this.numberPhone,
        email: this.email,
        password: this.password,
        query: this.query,
      };
      console.log(data);

      axios
        .put(`http://localhost:5400/users/update-user?id=${this.id}`, data)
        .then(
          (res) => {
            Swal.fire({
              icon: "success",
              title: res.data,
              text: "OK!",
            });
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: error.response.data,
              text: "Something went wrong!",
            });
          }
        );

      location.reload();
    },
  },
});
</script>
