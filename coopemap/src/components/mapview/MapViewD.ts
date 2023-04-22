import { useMapStore, usePlacesStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
  name: "MapViewD",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isLoading, userLocation, isUserlocationReady } = usePlacesStore();
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div Element No Exits");
      if (!userLocation.value) throw new Error("User Location No Exist");

      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15,
         // starting zoom
      });

      const mylocationPopup = new mapboxgl.Popup({offset:[0,-25]}).setLngLat(userLocation.value)
        .setHTML(`
                    <h4>Tu ubicacion</h4>
                    <p>${userLocation.value}</p>
                
                `);
      
      const myLocationMarket = new mapboxgl.Marker()
        .setLngLat(userLocation.value).setPopup(mylocationPopup)
        .addTo(map);

        setMap(map)
    };




    onMounted(() => {
      if (isUserlocationReady.value) return initMap();
    });

    watch(isUserlocationReady, (newVal) => {
      if (isUserlocationReady.value) initMap();
    });

    return {
      isLoading,
      userLocation,
      isUserlocationReady,
      mapElement,
    };
  },
});
