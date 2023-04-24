<template>
  <map-view-d></map-view-d>
  <SearchBar></SearchBar>
  <details-component></details-component>

  <my-location-btn></my-location-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlacesStore } from "../composables/usePlacesStore";

import MapViewD from "../components/mapview/MapViewD.vue";
import SearchBar from "../components/searchbar/SearchBar.vue";
import detailsComponent from "../components/distance&duration/detailsComponent.vue";

import MyLocationBtn from "../components/locationBtn/MyLocationBtn.vue";

export default defineComponent({
  name: "MapView",
  components: { MapViewD, SearchBar, MyLocationBtn, detailsComponent },
  setup() {
    usePlacesStore();
  },
  data() {
    return {};
  },
});
</script>
