<template>
  <form class="myf">
    <div class="form-group">
      <label for="exampleInputEmail1">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="Nombre"
        placeholder="Nombre"
        required
      />
    </div>
    <div class="form-group">
      <label for="Apellido">Apellido</label>
      <input
        type="text"
        class="form-control"
        id="Apellido"
        placeholder="Apellido"
        required
      />
    </div>
    <div class="form-group">
      <label for="Telefono">Telefono</label>
      <input
        type="number"
        class="form-control"
        id="Telefono"
        placeholder="Telefono"
        required
      />
    </div>
    <div class="form-group">
      <label for="ciudad">Ciudad</label>
      <input
        type="text"
        class="form-control"
        id="ciudad"
        placeholder="Ciudad"
        required
      />
    </div>
    <div class="form-group">
      <label for="Ruta">Ruta</label>
      <input
        type="text"
        class="form-control"
        id="Ruta"
        placeholder="Ruta"
        value="required"
      />
    </div>
    <button type="submit" class="btn btn-primary m-3">Submit</button>
  </form>
</template>
<script lang="ts" src="./formD.ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "formD",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.myf {
  position: fixed;
  top: 10rem;
  left: 68rem;
  background-color: white;
  z-index: 999;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 10px !important;
  overflow: hidden;
  padding: 5px;
}
</style>
