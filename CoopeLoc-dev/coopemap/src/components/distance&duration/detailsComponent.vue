<template>
  <div v-if="distance" class="trip-container column">
    <div class="col">
      Distance: <strong> {{ distance }} kms</strong>
    </div>
    <div class="col">
      Duration: <strong> {{ duration }} minutes</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMapStore } from "../../composables";

export default defineComponent({
  name: "detailsComponent",
  setup() {
    const { distance, duration } = useMapStore();
    return {
      distance,
      duration,
    };
  },
});
</script>

<style scoped>
.trip-container {
  padding: 10px;
  position: fixed;
  bottom: 15px;
  left: 65rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  width: 350px;
}
strong {
  color: rgb(50, 197, 197);
}
</style>
