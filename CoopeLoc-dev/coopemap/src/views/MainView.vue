<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover bg-light">
          <thead>
            <tr>
              <th>#</th>
              <th>cc</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="(user, i) in users" :key="user._id">
              <td>{{ i + 1 }}</td>
              <td>{{ user.cc }}</td>
              <td>{{ user.firtsName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.numberPhone }}</td>
              <td>
                <router-link
                  :to="{ path: 'edit/' + user._id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  v-on:click="this.delete(user._id)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return { users: null };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("http://localhost:5400/users/get-users").then((res) => {
        (this.users = res.data.data), console.log(this.users);
      });
    },
    delete(id) {
      Swal.fire({
        title: "Estas seguro de eliminar el elemento?",
        text: "Esta accion no se podra deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5400/users/delete-user?id=${id}`);
          location.reload

          Swal.fire(
            "Borrado",
            "El elemento ha sido borrado exitsoamente Recargar para ver los cambios",
            "success"
          );
        }
      });
    },
  },
};
</script>

<style scoped>
th {
  color: rgb(13, 124, 124);
}
</style>
