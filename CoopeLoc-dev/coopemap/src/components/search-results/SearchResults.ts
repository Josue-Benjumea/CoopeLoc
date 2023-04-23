import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";
import SearchBar from "../searchbar/SearchBar";


export default defineComponent({
  name: "SearchResults",


  setup() {
    const { isLoadingPlaces, places, userLocation } = usePlacesStore();
    const activePlace = ref("");
    const { map, setPlaceMarkers, getRoute } = useMapStore();

    watch(places, (newPlaces) => {
      activePlace.value = "";
      setPlaceMarkers(newPlaces);
    });

    return {
      isLoadingPlaces,
      places,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;
        map.value?.flyTo({
          zoom: 14,
          center: [lng, lat],
        });
      },
      getRouteDirections: (place: Feature) => {
        if (!userLocation.value) return;

        const [lng, lat] = place.center;
        const [startlng, startlat] = userLocation.value;

        const start: [number, number] = [startlng, startlat];
        const end: [number, number] = [lng, lat];

        getRoute(start, end);
      },
    };
  },
});
