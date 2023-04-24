import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zdWViZW4iLCJhIjoiY2xncjlrcTM4MTlsZzNrcDlyNHdxcDk2dSJ9.fXRYEzvyv1Qfgk3keTnObQ";

if (!navigator.geolocation) {
  throw new Error("Tu navegador no soporta Geolocation");
}

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
