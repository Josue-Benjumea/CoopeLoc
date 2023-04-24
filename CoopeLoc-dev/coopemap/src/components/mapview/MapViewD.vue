<script lang="ts" src="./MapViewD.ts"></script>

<template>
  <div
    v-if="!isUserlocationReady"
    class="loading d-flex justify-content-center align-items-center"
  >
    <div class="text center">
      <h3>Espere Por Favor</h3>
      <span>Adquiriendo ubicacion...</span>
    </div>
  </div>

  <div
    v-show="isUserlocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
</template>

<style scoped>
.loading {
  color: white;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: black;
}

.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
