<template>
  <button v-if="insBtnReady" class="btn" @click="btnLocationClick">
    Ir A Tu ubicacion
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { usePlacesStore, useMapStore } from "../../composables";

export default defineComponent({
  name: "MyLocationBtn",
  setup() {
    const { userLocation, isUserlocationReady } = usePlacesStore();
    const { map, isMapready } = useMapStore();

    return {
      insBtnReady: computed<boolean>(
        () => isUserlocationReady.value && isMapready.value
      ),
      btnLocationClick: () => {
        map.value?.flyTo({
          center: userLocation.value!,
          zoom: 14,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
  background-color: aqua;
}
</style>
