import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl"
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zdWViZW4iLCJhIjoiY2xncjlrcTM4MTlsZzNrcDlyNHdxcDk2dSJ9.fXRYEzvyv1Qfgk3keTnObQ';

if(!navigator.geolocation){
    throw new Error('Tu navegador no soporta Geolocation')
}

createApp(App).use(store).use(router).mount("#app");
