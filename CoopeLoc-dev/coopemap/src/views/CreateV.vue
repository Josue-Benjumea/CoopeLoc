<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card" style="border-radius: 5px; box-shado: black">
        <div class="card-header bg-dark text-white text-center">
          Crear Usuario Y Ruta
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
              <button class="btn btn-dark w-25" style="color: aqua">
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

export default defineComponent({
  data() {
    return {
      cc: "",
      firtsName: "",
      lastName: "",
      age: "",
      numberPhone: "",
      email: "",
      password: "",
      query: "",
    };
  },
  methods: {
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

      axios.post(`http://localhost:5400/users/create-user`, data).then(
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
