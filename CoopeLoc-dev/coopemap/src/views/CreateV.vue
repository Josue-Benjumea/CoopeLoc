<template>
  <div class="row mt-3" >
    <div class="col-md-6 offset-md-3" >
      <div class="card" style="border-radius:5px; box-shado:black,">
        <div class="card-header bg-dark text-white text-center">Crear Usuario Y Ruta</div>
        <div class="card-body">
        <form>


        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-file"></i></span>
        <input type="number" id="cc" class="form-control" maxlength="50" placeholder="Cedula" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-signature"></i></span>
        <input type="text" id="firtsName" class="form-control" maxlength="50" placeholder="Nombre" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
        <input type="text" id=" lastName" class="form-control" maxlength="50" placeholder="Apellido" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-arrow-up-9-1"></i></span>
        <input type="number" id="age" class="form-control" maxlength="50" placeholder="Edad" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
        <input type="number" id="numberPhone" class="form-control" maxlength="50" placeholder="Celular" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-circle"></i></span>
        <input type="text" id="email" class="form-control" maxlength="50" placeholder="Correo" required>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
        <input type="text" id=" password" class="form-control" maxlength="50" placeholder="Contraseña" required>
        </div>

         <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
        <input type="query" id=" password" class="form-control" maxlength="50" placeholder="Lugar Para Guardar En Ruta" required>
        </div>
        
        <div class="d-grid col-4 mx-auto w-100 d-flex justify-center">
            <button class="btn btn-dark  w-25" style="color:aqua"><i class="fa-solid fa-floppy-disk"></i>Guardar</button>
        </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    setup() {
       return{}
    },
})
</script>
